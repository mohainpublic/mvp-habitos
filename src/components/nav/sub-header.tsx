import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";

export function SubHeader({
  title,
  subtitle,
  backHref,
}: {
  title: string;
  subtitle?: string;
  backHref: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-border px-5 py-3.5">
      <Link
        href={backHref}
        aria-label="Volver"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-foreground hover:bg-surface-muted"
      >
        <ArrowLeftIcon className="h-4.5 w-4.5" />
      </Link>
      <div className="flex flex-col gap-0.5">
        <h1 className="text-base font-bold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
