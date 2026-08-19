"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PlusIcon, UsersIcon } from "@/components/icons";

export default function GroupPage() {
  const router = useRouter();
  const [code, setCode] = useState("");

  function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    // TODO(feature 3 - grupos real): validar código contra Firestore.
    router.push("/home");
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-8 bg-background px-6 py-12 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
        <UsersIcon className="h-9 w-9" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-foreground">
          Únete a un grupo
        </h1>
        <p className="max-w-xs text-sm text-muted-foreground">
          Introduce tu código de invitación para conectar con tus compañeros
          de estudio y deporte. ¡Consigamos esos objetivos juntos!
        </p>
      </div>

      <form onSubmit={handleJoin} className="flex w-full max-w-sm flex-col gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5">
          <span className="font-mono text-sm text-muted-foreground">#</span>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="INTRODUCE EL CÓDIGO"
            className="h-12 w-full bg-transparent font-mono text-sm uppercase tracking-wide text-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>
        <Button type="submit">Unirse al grupo</Button>
      </form>

      <div className="flex w-full max-w-sm items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs font-medium text-muted-foreground">O</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <button
        type="button"
        onClick={() => router.push("/group/invite")}
        className="flex w-full max-w-sm flex-col items-center gap-2 rounded-2xl border border-dashed border-border bg-surface-muted px-5 py-6 text-center transition-colors hover:border-brand"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
          <PlusIcon className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold text-foreground">
          Crear grupo nuevo
        </span>
        <span className="text-xs text-muted-foreground">
          Empieza tu propia comunidad desde cero
        </span>
      </button>
    </div>
  );
}
