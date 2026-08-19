import Link from "next/link";
import { Wordmark } from "@/components/brand/logo";
import { LinkButton } from "@/components/ui/button";
import { ArrowRightIcon, BookIcon, FireIcon } from "@/components/icons";

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-8 bg-background px-6 py-12 text-center">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-brand/10 text-brand">
        <BookIcon className="h-10 w-10" />
        <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
          <FireIcon className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Wordmark size="lg" />
        <h1 className="text-2xl font-bold text-foreground">
          Domina tus hábitos,
          <br />
          vence a tus amigos
        </h1>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-4">
        <LinkButton href="/login" className="justify-between px-5">
          Empezar
          <ArrowRightIcon />
        </LinkButton>
        <p className="text-sm text-muted-foreground">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="font-semibold text-brand hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
