import { Wordmark } from "@/components/brand/logo";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-background px-6 py-12">
      <div className="flex w-full max-w-sm flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Wordmark />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-foreground">
              Bienvenido de nuevo
            </h1>
            <p className="text-sm text-muted-foreground">
              Estudia duro, entrena mejor, gana con tus amigos.
            </p>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
