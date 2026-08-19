"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wordmark } from "@/components/brand/logo";
import { Button, LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeftIcon, CopyIcon, SendIcon, WhatsAppIcon } from "@/components/icons";

const INVITE_CODE = "SPORT-2024";

export default function InviteFriendsPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(INVITE_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-sm flex-col gap-8 bg-background px-6 py-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Volver"
          className="text-foreground"
        >
          <ArrowLeftIcon />
        </button>
        <Wordmark size="sm" />
      </div>

      <div className="flex flex-1 flex-col items-center gap-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
          <SendIcon className="h-9 w-9" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-bold text-foreground">
            Invita a tus amigos
          </h1>
          <p className="max-w-xs text-sm text-muted-foreground">
            Comparte tu código único para invitarlos. Cuando se unan, ambos
            ganáis puntos extra en vuestra próxima sesión.
          </p>
        </div>

        <Card className="flex w-full flex-col items-center gap-3 py-6">
          <span className="text-xs font-semibold tracking-wide text-muted-foreground">
            TU CÓDIGO DE INVITACIÓN
          </span>
          <span className="font-mono text-3xl font-bold text-brand">
            {INVITE_CODE}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <CopyIcon />
            {copied ? "¡Copiado!" : "Copiar código"}
          </button>
        </Card>

        <div className="flex w-full flex-col gap-3">
          <Button type="button" variant="success" icon={<WhatsAppIcon />}>
            Compartir en WhatsApp
          </Button>
          <Button type="button" variant="outline">
            Más opciones
          </Button>
        </div>
      </div>

      <LinkButton href="/home">Continuar</LinkButton>
    </div>
  );
}
