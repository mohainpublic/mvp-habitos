export function ProgressBar({
  value,
  color = "brand",
  className = "",
}: {
  value: number;
  color?: "brand" | "accent";
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-surface-muted ${className}`}
    >
      <div
        className={`h-full rounded-full ${
          color === "accent" ? "bg-accent" : "bg-brand"
        }`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
