export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <rect width="40" height="40" rx="12" fill="var(--brand)" />
      <path
        d="M20 9c-1.3 3-4.5 5.6-4.5 10a4.5 4.5 0 0 0 9 0c0-.9-.2-1.7-.5-2.4.9.9 1.5 2.2 1.5 3.7A6 6 0 1 1 13.5 19c0-4.3 3.6-7.2 6.5-10Z"
        fill="var(--accent)"
      />
    </svg>
  );
}

export function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { mark: "h-7 w-7", text: "text-base" },
    md: { mark: "h-9 w-9", text: "text-xl" },
    lg: { mark: "h-12 w-12", text: "text-2xl" },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={sizes.mark} />
      <span
        className={`font-headline ${sizes.text} font-bold tracking-tight text-foreground`}
      >
        Study<span className="text-brand">Sport</span>
      </span>
    </div>
  );
}
