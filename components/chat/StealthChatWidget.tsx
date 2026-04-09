"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const STORAGE_KEY = "sm-tech-agent-history";
const NOTIFIED_KEY = "sm-tech-agent-lead-notified";

const quickActions = ["Optimize my Revenue", "Automate my Staff", "How does it work?"];

const firstMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hello, I am SM Tech Agent. I can help you design the right AI automation strategy for your business. To guide you precisely, may I know your name and what kind of project you are considering?"
};

export function StealthChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([firstMessage]);
  const [leadNotified, setLeadNotified] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    const notified = localStorage.getItem(NOTIFIED_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Message[];
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    if (notified === "true") setLeadNotified(true);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, thinking, open]);

  const canSend = useMemo(() => input.trim().length > 0 && !thinking, [input, thinking]);

  async function runChat(text: string) {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    const optimisticAssistantId = crypto.randomUUID();

    setMessages((prev) => [...prev, userMsg, { id: optimisticAssistantId, role: "assistant", content: "" }]);
    setInput("");
    setThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadAlreadyNotified: leadNotified,
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok || !response.body) {
        throw new Error("Unable to process chat at the moment.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        fullText += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) => (m.id === optimisticAssistantId ? { ...m, content: fullText } : m))
        );
      }

      const notified = response.headers.get("X-Lead-Notified") === "true";
      if (notified) {
        setLeadNotified(true);
        localStorage.setItem(NOTIFIED_KEY, "true");
      }
    } catch (error) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === optimisticAssistantId
            ? { ...m, content: `I apologize, something went wrong. Please retry in a moment. (${String(error)})` }
            : m
        )
      );
    } finally {
      setThinking(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            className="mb-3 h-[560px] w-[360px] overflow-hidden rounded-3xl border border-white/20 bg-slate-950/70 shadow-glow backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-neonBlue/15 p-2 text-neonBlue">
                  <Bot size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">SM Tech Agent</p>
                  <p className="text-[11px] text-slate-400">The Silent Closer</p>
                </div>
              </div>
              <button className="text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="h-[395px] space-y-3 overflow-y-auto px-3 py-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "assistant" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      m.role === "assistant"
                        ? "border border-white/10 bg-white/5 text-slate-100"
                        : "bg-neonBlue/20 text-neonBlue"
                    }`}
                  >
                    {m.content || "..."}
                  </div>
                </div>
              ))}

              {thinking && (
                <div className="flex items-center gap-2 px-1 text-xs text-slate-400">
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Thinking...
                  </motion.span>
                  <Sparkles size={13} className="text-neonBlue" />
                </div>
              )}
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="mb-2 flex flex-wrap gap-2">
                {quickActions.map((qa) => (
                  <button
                    key={qa}
                    onClick={() => runChat(qa)}
                    disabled={thinking}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10 disabled:opacity-40"
                  >
                    {qa}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && canSend) runChat(input.trim());
                  }}
                  placeholder="Type your message..."
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500"
                />
                <button
                  onClick={() => runChat(input.trim())}
                  disabled={!canSend}
                  className="rounded-xl bg-electricViolet/25 p-2 text-electricViolet disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-neonBlue/40 bg-slate-900/80 px-4 py-3 text-sm text-neonBlue shadow-glow backdrop-blur-xl"
      >
        <MessageCircle size={18} />
        Chat with SM Tech Agent
      </button>
    </div>
  );
}
