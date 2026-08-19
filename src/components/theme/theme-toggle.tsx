"use client";

import { Theme, useTheme } from "@/components/theme/theme-provider";

const OPTIONS: { id: Theme; label: string }[] = [
  { id: "system", label: "Sistema" },
  { id: "light", label: "Claro" },
  { id: "dark", label: "Oscuro" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-1 rounded-2xl bg-surface-muted p-1">
      {OPTIONS.map(({ id, label }) => {
        const active = theme === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setTheme(id)}
            className={`flex-1 rounded-xl py-2 text-xs font-semibold transition-colors ${
              active
                ? "bg-surface text-foreground shadow-sm"
                : "text-muted-foreground"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
