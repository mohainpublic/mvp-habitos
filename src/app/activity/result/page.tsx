import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { FireIcon, TrophyIcon } from "@/components/icons";

export default function ActivityResultPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-8 bg-background px-6 py-12 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 text-accent">
        <TrophyIcon className="h-11 w-11" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-semibold tracking-wide text-muted-foreground">
          ACTIVIDAD COMPLETADA
        </span>
        <span className="text-5xl font-extrabold text-brand">+50</span>
        <span className="text-sm font-medium text-muted-foreground">Puntos</span>
      </div>

      <Card className="flex w-full max-w-sm items-center justify-between bg-accent/10">
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <FireIcon className="h-4 w-4 text-accent" /> Racha actual
        </span>
        <span className="text-sm font-bold text-foreground">12 → 13</span>
      </Card>

      <div className="flex w-full max-w-sm flex-col gap-2 text-left">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Progreso nivel 4</span>
          <span>1,258 / 2,000</span>
        </div>
        <ProgressBar value={63} color="brand" />
      </div>

      <LinkButton href="/home" className="max-w-sm">
        Volver al home
      </LinkButton>
    </div>
  );
}
