const PALETTE = ["#6366f1", "#f97316", "#22c55e", "#3a8aff", "#d96d30"];

function colorFor(name: string) {
  const code = name.charCodeAt(0) + (name.charCodeAt(1) ?? 0);
  return PALETTE[code % PALETTE.length];
}

export function Avatar({
  name,
  size = 40,
  ring = false,
}: {
  name: string;
  size?: number;
  ring?: boolean;
}) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
        ring ? "ring-2 ring-accent ring-offset-2 ring-offset-surface" : ""
      }`}
      style={{
        width: size,
        height: size,
        backgroundColor: colorFor(name || "?"),
        fontSize: size * 0.4,
      }}
    >
      {initial || "?"}
    </div>
  );
}
