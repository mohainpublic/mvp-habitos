"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppleIcon, EyeIcon, GoogleIcon, LockIcon, MailIcon } from "@/components/icons";

export function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSignup = mode === "signup";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Introduce un correo electrónico válido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    setError(null);
    // TODO(feature 2 - auth real): conectar con Firebase Auth aquí.
    console.log("submit", { mode, email });
    router.push("/group");
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-3">
        <Button type="button" variant="outline" icon={<GoogleIcon />}>
          Continuar con Google
        </Button>
        <Button type="button" variant="outline" icon={<AppleIcon />}>
          Continuar con Apple
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs font-medium text-muted-foreground">O</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-col gap-4">
        <Input
          id="email"
          label="Correo electrónico"
          type="email"
          placeholder="tu@email.com"
          icon={<MailIcon />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Contraseña
            </span>
            {!isSignup && (
              <button
                type="button"
                className="text-xs font-medium text-brand hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>
            )}
          </div>
          <span className="relative flex items-center">
            <span className="pointer-events-none absolute left-3.5 text-muted-foreground">
              <LockIcon />
            </span>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={isSignup ? "new-password" : "current-password"}
              className="h-12 w-full rounded-xl border border-border bg-surface pl-10 pr-11 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-brand"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3.5 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              <EyeIcon off={showPassword} />
            </button>
          </span>
        </div>
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}

      <Button type="submit">{isSignup ? "Crear cuenta" : "Iniciar sesión"}</Button>

      <p className="text-center text-sm text-muted-foreground">
        {isSignup ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
        <button
          type="button"
          onClick={() => setMode(isSignup ? "login" : "signup")}
          className="font-semibold text-brand hover:underline"
        >
          {isSignup ? "Inicia sesión" : "Regístrate"}
        </button>
      </p>
    </form>
  );
}
