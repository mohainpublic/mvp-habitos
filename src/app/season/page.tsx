import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { TrophyIcon } from "@/components/icons";

// TODO(feature 9 - temporadas real): sustituir por resultado final de Firestore.
const PODIUM = [
  { name: "Alex K.", points: 10250, place: 2 },
  { name: "María", points: 12480, place: 1 },
  { name: "David", points: 7920, place: 3 },
];

const HEIGHTS: Record<number, string> = { 1: "h-28", 2: "h-20", 3: "h-16" };

export default function SeasonEndPage() {
  return (
    <AppShell>
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <TrophyIcon className="h-8 w-8" />
        </span>
        <h1 className="text-2xl font-bold text-foreground">¡Temporada finalizada!</h1>
        <p className="max-w-xs text-sm text-muted-foreground">
          Increíble esfuerzo de todo el equipo. Aquí están los campeones de
          esta temporada.
        </p>
      </div>

      <div className="flex items-end justify-center gap-3">
        {[2, 1, 3].map((place) => {
          const member = PODIUM.find((m) => m.place === place)!;
          const isFirst = place === 1;
          return (
            <div key={place} className="flex flex-1 flex-col items-center gap-2">
              <Avatar name={member.name} size={isFirst ? 56 : 44} ring={isFirst} />
              <div
                className={`flex w-full flex-col items-center justify-start gap-1 rounded-t-xl pt-2 text-center ${HEIGHTS[place]} ${
                  isFirst ? "bg-accent text-white" : "bg-surface-muted text-foreground"
                }`}
              >
                <span className="text-lg font-extrabold">{place}</span>
                <span className="text-[11px] font-medium opacity-90">
                  {member.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold text-foreground">
          Estadísticas del grupo
        </h2>
        <Card className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Horas estudiadas</span>
          <span className="text-lg font-bold text-brand">1,240 hrs</span>
        </Card>
        <Card className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Kilómetros recorridos</span>
          <span className="text-lg font-bold text-accent">850 km</span>
        </Card>
      </div>

      <LinkButton href="/home">Nueva temporada</LinkButton>
    </AppShell>
  );
}
