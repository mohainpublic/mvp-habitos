import { ReactNode } from "react";
import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  ArrowLeftIcon,
  BellIcon,
  ChevronRightIcon,
  GlobeIcon,
  InfoIcon,
  LockIcon,
  LogoutIcon,
  ProfileIcon,
} from "@/components/icons";

function SettingsSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="px-1 text-xs font-bold tracking-wide text-muted-foreground">
        {title.toUpperCase()}
      </h2>
      <Card className="flex flex-col divide-y divide-border p-0">{children}</Card>
    </div>
  );
}

function NavRow({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof ProfileIcon;
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="h-4.5 w-4.5 text-muted-foreground" />
      <span className="flex-1 text-sm font-medium text-foreground">{label}</span>
      <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex w-full items-center gap-3 px-4 py-3.5">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
    >
      {content}
    </button>
  );
}

function ToggleRow({
  icon: Icon,
  label,
  hint,
  defaultChecked,
}: {
  icon: typeof BellIcon;
  label: string;
  hint: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex w-full items-center gap-3 px-4 py-3.5">
      <Icon className="h-4.5 w-4.5 text-muted-foreground" />
      <div className="flex flex-1 flex-col">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-xs text-muted-foreground">{hint}</span>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="flex items-center gap-3">
        <Link
          href="/profile"
          aria-label="Volver al perfil"
          className="flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:bg-surface-muted"
        >
          <ArrowLeftIcon className="h-4.5 w-4.5" />
        </Link>
        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl font-bold text-foreground">Ajustes</h1>
          <p className="text-sm text-muted-foreground">Configura tu experiencia.</p>
        </div>
      </div>

      <SettingsSection title="Apariencia">
        <div className="p-3">
          <ThemeToggle />
        </div>
      </SettingsSection>

      <SettingsSection title="Cuenta">
        <NavRow icon={ProfileIcon} label="Perfil del atleta" />
        <NavRow icon={LockIcon} label="Seguridad y contraseña" />
      </SettingsSection>

      <SettingsSection title="Notificaciones">
        <ToggleRow
          icon={BellIcon}
          label="Recordatorios de estudio"
          hint="Alertas para sesiones programadas"
          defaultChecked
        />
        <ToggleRow
          icon={BellIcon}
          label="Metas deportivas"
          hint="Progreso y logros semanales"
        />
      </SettingsSection>

      <SettingsSection title="Sistema">
        <NavRow icon={GlobeIcon} label="Idioma · Español" />
        <NavRow icon={InfoIcon} label="Acerca de StudySport · v0.1.0" />
      </SettingsSection>

      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-2xl border border-danger/30 bg-danger/5 px-4 py-3.5 text-sm font-semibold text-danger"
      >
        <LogoutIcon />
        Salir del grupo
      </button>
    </AppShell>
  );
}
