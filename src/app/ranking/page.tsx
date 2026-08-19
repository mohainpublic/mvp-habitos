import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ClockIcon } from "@/components/icons";

// TODO(feature 6 - ranking en tiempo real): sustituir por listener de Firestore.
const MEMBERS = [
  { name: "Sofía Rossi", points: 12450, you: false },
  { name: "Marco Silva", points: 11200, you: false },
  { name: "Elena Torres", points: 10850, you: false },
  { name: "Alex Chen", points: 9400, you: true },
  { name: "Julia Kim", points: 8950, you: false },
];

export default function RankingPage() {
  return (
    <AppShell>
      <Card className="flex items-center gap-3 border-none bg-accent text-white">
        <ClockIcon />
        <span className="text-sm font-semibold">
          Faltan 5 días para el fin de temporada
        </span>
      </Card>

      <div className="flex flex-col gap-2">
        {MEMBERS.map((m, i) => {
          const pos = i + 1;
          return (
            <Card
              key={m.name}
              className={`flex items-center gap-3 ${
                m.you ? "border-brand bg-brand/5" : ""
              }`}
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                  pos === 1
                    ? "bg-accent text-white"
                    : "bg-surface-muted text-muted-foreground"
                }`}
              >
                {pos}
              </span>
              <Avatar name={m.name} size={36} ring={pos === 1} />
              <span className="flex-1 text-sm font-semibold text-foreground">
                {m.you ? "Tú" : m.name}
              </span>
              <span className="text-sm font-bold text-foreground">
                {m.points.toLocaleString("es-ES")}
              </span>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
