"use client";

import { useRef, useState } from "react";
import { TopBar } from "@/components/nav/top-bar";
import { BottomNav } from "@/components/nav/bottom-nav";
import { SendIcon, SparkleIcon } from "@/components/icons";

type Message = { id: number; from: "ai" | "me"; text: string };

const SUGGESTIONS = [
  "Resúmeme mis apuntes de hoy",
  "Hazme un quiz de 5 preguntas",
  "Planifica mi semana de estudio",
];

const INITIAL: Message[] = [
  {
    id: 0,
    from: "ai",
    text: "¡Hola, Alex! Soy tu asistente de estudio. Puedo ayudarte a repasar, planificar sesiones o resolver dudas rápidas. ¿Por dónde empezamos?",
  },
];

// TODO(feature futura - chat IA real): conectar con un modelo real (backend/Functions);
// de momento la respuesta del asistente es un eco simulado, sin llamadas externas.
export default function ChatIaPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const nextId = useRef(1);

  function send(text: string) {
    const value = text.trim();
    if (!value) return;
    const userMsg: Message = { id: nextId.current++, from: "me", text: value };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId.current++,
          from: "ai",
          text: "Todavía estoy en modo demo: pronto podré responder de verdad. De momento, ¡sigue registrando tus sesiones para no perder la racha!",
        },
      ]);
      setTyping(false);
    }, 900);
  }

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-sm flex-col bg-background">
      <TopBar />

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-5">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-end gap-2 ${
              m.from === "me" ? "flex-row-reverse" : ""
            }`}
          >
            {m.from === "ai" && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <SparkleIcon className="h-3.5 w-3.5" />
              </span>
            )}
            <div
              className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                m.from === "me"
                  ? "rounded-br-md bg-brand text-brand-foreground"
                  : "rounded-bl-md bg-surface-muted text-foreground"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
              <SparkleIcon className="h-3.5 w-3.5" />
            </span>
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-surface-muted px-3.5 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.2s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.1s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
            </div>
          </div>
        )}

        {messages.length === 1 && (
          <div className="mt-2 flex flex-col gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="rounded-xl border border-border bg-surface px-3.5 py-2.5 text-left text-xs font-medium text-foreground hover:bg-surface-muted"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-border px-4 py-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          className="h-11 flex-1 rounded-full border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-brand"
        />
        <button
          type="submit"
          aria-label="Enviar"
          disabled={!input.trim()}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground disabled:opacity-40"
        >
          <SendIcon className="h-4.5 w-4.5" />
        </button>
      </form>

      <BottomNav />
    </div>
  );
}
