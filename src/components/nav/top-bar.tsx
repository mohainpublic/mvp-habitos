import { Wordmark } from "@/components/brand/logo";
import { BellIcon } from "@/components/icons";

export function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface/90 px-5 py-3.5 backdrop-blur">
      <Wordmark size="sm" />
      <button
        type="button"
        aria-label="Notificaciones"
        className="text-muted-foreground hover:text-foreground"
      >
        <BellIcon />
      </button>
    </header>
  );
}
