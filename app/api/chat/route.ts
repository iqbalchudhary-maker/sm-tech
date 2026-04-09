import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/lead";
import { prisma } from "@/lib/prisma";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ExtractedLead = {
  name: string | null;
  contact: string | null;
  query: string | null;
};

const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const SYSTEM_PROMPT = `
You are "SM Tech Agent", the silent closer for SM Technology.
Tone: professional, deeply polite, empathetic, and persuasive.
Objective: naturally discover and confirm three lead fields without using forms:
1) Name
2) Contact (email or phone/WhatsApp)
3) User project query/problem

Conversation style:
- Keep responses concise (2-6 lines).
- Ask one strategic follow-up question when information is missing.
- Never sound pushy.
- Show expertise in: AI Automation, Agentic Workflows, WhatsApp Funnels, ERP/School Systems, AutoMarketing, RAG chatbots.
- Suggest CTA when user is interested:
  "Should I book a priority call with our Pakistan head office (+923010637955) or UAE branch (+971558245432) for you?"
`;

async function generateAssistantText(messages: ChatMessage[]) {
  const payload = {
    contents: messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    })),
    systemInstruction: {
      parts: [{ text: SYSTEM_PROMPT }]
    },
    generationConfig: {
      temperature: 0.65,
      topP: 0.9,
      maxOutputTokens: 500
    }
  };

  const response = await fetch(`${GEMINI_ENDPOINT}?key=${process.env.GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "I am here to help you with your automation goals.";
}

async function extractLead(messages: ChatMessage[]): Promise<ExtractedLead> {
  const transcript = messages.map((m) => `${m.role.toUpperCase()}: ${m.content}`).join("\n");

  const extractorInstruction = `
Extract lead info from this conversation. Return ONLY valid compact JSON:
{"name": string|null, "contact": string|null, "query": string|null}
Rules:
- "contact" can be phone or email.
- "query" should be 1-2 sentence summary of user need.
- If missing, return null for the field.
`;

  const response = await fetch(`${GEMINI_ENDPOINT}?key=${process.env.GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: `${extractorInstruction}\n\n${transcript}` }] }],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 200
      }
    })
  });

  if (!response.ok) {
    return { name: null, contact: null, query: null };
  }

  const data = await response.json();
  const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

  try {
    const jsonStart = raw.indexOf("{");
    const jsonEnd = raw.lastIndexOf("}");
    if (jsonStart === -1 || jsonEnd === -1) return { name: null, contact: null, query: null };
    const parsed = JSON.parse(raw.slice(jsonStart, jsonEnd + 1)) as ExtractedLead;
    return {
      name: parsed.name?.trim() || null,
      contact: parsed.contact?.trim() || null,
      query: parsed.query?.trim() || null
    };
  } catch {
    return { name: null, contact: null, query: null };
  }
}

function streamText(text: string): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      const chunkSize = 20;
      let i = 0;
      const timer = setInterval(() => {
        if (i >= text.length) {
          clearInterval(timer);
          controller.close();
          return;
        }
        controller.enqueue(encoder.encode(text.slice(i, i + chunkSize)));
        i += chunkSize;
      }, 22);
    }
  });
}

export async function POST(request: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured." }, { status: 500 });
    }

    const { messages, leadAlreadyNotified } = (await request.json()) as {
      messages?: ChatMessage[];
      leadAlreadyNotified?: boolean;
    };

    if (!messages?.length) {
      return NextResponse.json({ error: "messages are required." }, { status: 400 });
    }

    const assistantText = await generateAssistantText(messages);
    const extracted = await extractLead(messages);

    let leadNotified = false;
    if (!leadAlreadyNotified && extracted.name && extracted.contact && extracted.query) {
      const email = extracted.contact.includes("@") ? extracted.contact : null;
      const phone = email ? null : extracted.contact;

      await prisma.lead.create({
        data: {
          name: extracted.name,
          email,
          phone,
          query: extracted.query,
          source: "AI_AGENT",
          isNotified: false
        }
      });

      const notify = await sendLeadNotification({
        name: extracted.name,
        contact: extracted.contact,
        query: extracted.query
      });
      leadNotified = notify.sent;

      if (notify.sent) {
        await prisma.lead.updateMany({
          where: {
            name: extracted.name,
            query: extracted.query,
            isNotified: false
          },
          data: { isNotified: true }
        });
      }
    }

    return new Response(streamText(assistantText), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Lead-Complete": String(Boolean(extracted.name && extracted.contact && extracted.query)),
        "X-Lead-Notified": String(leadNotified),
        "X-Lead-Name": encodeURIComponent(extracted.name ?? ""),
        "X-Lead-Contact": encodeURIComponent(extracted.contact ?? "")
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Chat route failed.", detail: String(error) }, { status: 500 });
  }
}
