import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/lib/lead";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, contact, query } = (await request.json()) as {
      name?: string;
      contact?: string;
      query?: string;
    };

    if (!name || !contact || !query) {
      return NextResponse.json({ error: "name, contact and query are required." }, { status: 400 });
    }

    const result = await sendLeadNotification({ name, contact, query });

    if (!result.sent) {
      return NextResponse.json({ sent: false, detail: result.detail }, { status: 500 });
    }

    await prisma.lead.create({
      data: {
        name,
        email: contact.includes("@") ? contact : null,
        phone: contact.includes("@") ? null : contact,
        query,
        source: "MANUAL_NOTIFY",
        isNotified: true
      }
    });

    return NextResponse.json({ sent: true, detail: result.detail });
  } catch (error) {
    return NextResponse.json({ error: "Notification failed.", detail: String(error) }, { status: 500 });
  }
}
