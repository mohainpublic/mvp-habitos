import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Avatar } from "@/components/ui/avatar";
import {
  BookIcon,
  ChevronRightIcon,
  FireIcon,
  PhoneLockIcon,
  PlusIcon,
  RunIcon,
} from "@/components/icons";

// TODO(feature 5/6 - puntos y ranking real): sustituir datos de ejemplo por Firestore.
const RANKING_PREVIEW = [
  { name: "Sofía R.", points: 2450, you: false },
  { name: "Tú", points: 2100, you: true },
  { name: "Miguel A.", points: 1900, you: false },
];

export default function HomePage() {
  return (
    <AppShell>
      <Card
        className="flex flex-col gap-3.5 rounded-[28px]"
        style={{
          background:
            "radial-gradient(120% 140% at 12% 15%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 62%), var(--surface)",
        }}
      >
        <div className="flex items-center gap-3.5">
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/30">
            <FireIcon className="h-6 w-6" />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">
              Tu racha actual
            </span>
            <span className="font-headline text-[23px] font-extrabold text-foreground">
              12 días
            </span>
          </div>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          ¡Sigue así! Estás equilibrando estudio y deporte a la perfección.
        </p>
        <div className="flex items-center gap-1.5">
          {[true, true, true, true, true, false, false].map((done, i) => (
            <span
              key={i}
              className={
                done
                  ? "h-2.5 w-2.5 rounded-full bg-accent"
                  : "h-2.5 w-2.5 rounded-full border-[1.5px] border-accent/30"
              }
            />
          ))}
          <span className="ml-1.5 text-[10.5px] font-semibold text-muted-foreground">
            5/7 días esta semana
          </span>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card className="flex flex-col gap-2">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-brand">
            <BookIcon className="h-4 w-4" /> Estudio
          </span>
          <span className="text-lg font-bold text-foreground">4h 30m</span>
          <ProgressBar value={75} color="brand" />
          <span className="text-[11px] text-muted-foreground">
            Objetivo: 6h
          </span>
        </Card>
        <Card className="flex flex-col gap-2">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-accent">
            <RunIcon className="h-4 w-4" /> Deporte
          </span>
          <span className="text-lg font-bold text-foreground">1h 15m</span>
          <ProgressBar value={50} color="accent" />
          <span className="text-[11px] text-muted-foreground">
            Objetivo: 2.5h
          </span>
        </Card>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-foreground">
            Ranking resumido
          </h2>
          <Link
            href="/ranking"
            className="flex items-center text-xs font-semibold text-brand"
          >
            Ver todo <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <Card className="flex flex-col divide-y divide-border p-0">
          {RANKING_PREVIEW.map((r, i) => (
            <div
              key={r.name}
              className={`flex items-center gap-2.5 px-4 py-3 ${
                r.you ? "bg-brand/5" : ""
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold ${
                  i === 0
                    ? "bg-accent text-white"
                    : "bg-surface-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </span>
              <Avatar name={r.name} size={30} />
              <span
                className={`flex-1 text-sm ${
                  r.you ? "font-bold text-brand" : "font-medium text-foreground"
                }`}
              >
                {r.name}
              </span>
              <span className="text-sm font-bold text-foreground">
                {r.points.toLocaleString("es-ES")}
              </span>
            </div>
          ))}
        </Card>
      </div>

      <Link
        href="/settings/bloqueo-moviles"
        className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 hover:bg-surface-muted"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <PhoneLockIcon className="h-4.5 w-4.5" />
        </span>
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-semibold text-foreground">
            Bloqueo de móviles
          </span>
          <span className="text-xs text-muted-foreground">
            Activo durante tus sesiones
          </span>
        </div>
        <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
      </Link>

      <div className="h-16 shrink-0" />

      <Link
        href="/activity"
        className="absolute bottom-28 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-gradient-to-b from-brand to-brand/85 py-3 pl-3 pr-6 text-sm font-bold text-brand-foreground shadow-[0_16px_28px_-10px] shadow-brand/50 ring-1 ring-white/15"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <PlusIcon className="h-4 w-4" />
        </span>
        Registrar actividad
      </Link>
    </AppShell>
  );
}
