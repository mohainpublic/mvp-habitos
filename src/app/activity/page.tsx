"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { BookIcon, CameraIcon, RunIcon } from "@/components/icons";

type Mode = "study" | "sport";

const MODES: { id: Mode; label: string; hint: string; icon: typeof BookIcon }[] = [
  { id: "study", label: "Estudio", hint: "Captura tu sesión de concentración.", icon: BookIcon },
  { id: "sport", label: "Deporte", hint: "Captura tu entrenamiento.", icon: RunIcon },
];

export default function ActivityPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("study");

  function handleCapture() {
    // TODO(feature 4 - cámara real): abrir cámara in-app (sin galería) y verificar foto.
    router.push("/activity/result");
  }

  return (
    <AppShell>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-foreground">¿Qué has hecho hoy?</h1>
        <p className="text-sm text-muted-foreground">
          Registra tu actividad para mantener tu racha.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {MODES.map(({ id, label, hint, icon: Icon }) => {
          const active = mode === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={`flex items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-colors ${
                active
                  ? id === "study"
                    ? "border-brand bg-brand/5"
                    : "border-accent bg-accent/5"
                  : "border-border bg-surface"
              }`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  id === "study" ? "bg-brand text-white" : "bg-accent text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">{label}</span>
                <span className="text-xs text-muted-foreground">{hint}</span>
              </div>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleCapture}
        className="flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-surface-muted py-16 text-muted-foreground transition-colors hover:border-brand"
      >
        <CameraIcon className="h-9 w-9" />
        <span className="text-sm font-medium">Vista de la cámara</span>
      </button>
    </AppShell>
  );
}
