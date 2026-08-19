import { SubHeader } from "@/components/nav/sub-header";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { InfoIcon, PhoneLockIcon } from "@/components/icons";

const APPS = [
  { name: "Instagram", category: "Redes sociales", color: "#e1306c", on: true },
  { name: "TikTok", category: "Vídeo corto", color: "#111827", on: true },
  { name: "YouTube", category: "Vídeo", color: "#ff0000", on: false },
  { name: "X", category: "Redes sociales", color: "#0f172a", on: true },
];

// TODO(feature futura - bloqueo real): requiere permisos nativos del sistema operativo
// (p. ej. Screen Time / DND / App Blocking) — solo viable en la app móvil (Expo), no en web.
export default function BloqueoMovilesPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-sm flex-col gap-5 bg-background px-5 pb-8">
      <SubHeader
        title="Bloqueo de móviles"
        subtitle="Evita distracciones durante tus sesiones"
        backHref="/settings"
      />

      <Card className="flex items-center gap-4 bg-brand/5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
          <PhoneLockIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-bold text-foreground">
            Bloqueo automático
          </span>
          <span className="text-xs text-muted-foreground">
            Se activa durante tus sesiones de estudio y deporte registradas.
          </span>
        </div>
        <Switch defaultChecked />
      </Card>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold text-foreground">Apps bloqueadas</h2>
        <Card className="flex flex-col divide-y divide-border p-0">
          {APPS.map((app) => (
            <div key={app.name} className="flex items-center gap-3 px-4 py-3.5">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
                style={{ backgroundColor: app.color }}
              >
                {app.name.charAt(0)}
              </span>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-semibold text-foreground">
                  {app.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {app.category}
                </span>
              </div>
              <Switch defaultChecked={app.on} />
            </div>
          ))}
        </Card>
      </div>

      <Card className="flex items-start gap-3 border-border bg-surface-muted">
        <InfoIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted-foreground" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          Esta función necesita permisos del sistema operativo (control de
          tiempo de pantalla / bloqueo de apps) y solo estará disponible en
          la app móvil. En la versión web solo puedes configurar tus
          preferencias.
        </p>
      </Card>
    </div>
  );
}
