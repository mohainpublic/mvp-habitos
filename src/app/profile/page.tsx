import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import {
  BookIcon,
  ClockIcon,
  FireIcon,
  RunIcon,
  SettingsIcon,
  TrophyIcon,
} from "@/components/icons";

// TODO(feature 11 - perfil real): sustituir por datos de Firestore/Auth.
const BADGES = [
  { label: "Madrugador", desc: "Estudio 5am", icon: ClockIcon },
  { label: "Maratonista", desc: "Corre 10k", icon: RunIcon },
  { label: "Constante", desc: "30 días seguidos", icon: FireIcon },
  { label: "Récord personal", desc: "Energía", icon: TrophyIcon },
];

const ACTIVITY = [
  { title: "Sesión de estudio", subtitle: "Cálculo avanzado", points: "+50 pts", time: "Hace 2h", icon: BookIcon },
  { title: "Carrera 5km", subtitle: "Parque Central", points: "+120 pts", time: "Ayer", icon: RunIcon },
];

export default function ProfilePage() {
  return (
    <AppShell>
      <div className="relative flex flex-col items-center gap-2 text-center">
        <Link
          href="/settings"
          aria-label="Ajustes"
          className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-surface-muted hover:text-foreground"
        >
          <SettingsIcon />
        </Link>
        <Avatar name="Alex Rivera" size={80} ring />
        <span className="text-lg font-bold text-foreground">Alex Rivera</span>
        <span className="text-xs text-muted-foreground">
          Estudiante de Ingeniería &amp; Runner
        </span>
      </div>

      <Card className="flex items-center justify-between bg-accent/10">
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <FireIcon className="h-4 w-4 text-accent" /> Racha máxima
        </span>
        <span className="text-lg font-bold text-accent">25 días</span>
      </Card>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold text-foreground">Insignias ganadas</h2>
        <div className="grid grid-cols-2 gap-3">
          {BADGES.map(({ label, desc, icon: Icon }) => (
            <Card key={label} className="flex flex-col items-center gap-2 py-4 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-bold text-foreground">{label}</span>
              <span className="text-[11px] text-muted-foreground">{desc}</span>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold text-foreground">Actividad reciente</h2>
        <Card className="flex flex-col divide-y divide-border p-0">
          {ACTIVITY.map(({ title, subtitle, points, time, icon: Icon }) => (
            <div key={title} className="flex items-center gap-3 px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-semibold text-foreground">{title}</span>
                <span className="text-xs text-muted-foreground">{subtitle}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-success">{points}</span>
                <span className="text-[11px] text-muted-foreground">{time}</span>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </AppShell>
  );
}
