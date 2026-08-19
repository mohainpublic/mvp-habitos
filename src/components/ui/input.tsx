import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label: string;
}

export function Input({ icon, label, id, className = "", ...props }: InputProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <span className="relative flex items-center">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 text-muted-foreground">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={`h-12 w-full rounded-xl border border-border bg-surface px-3.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-brand ${
            icon ? "pl-10" : ""
          } ${className}`}
          {...props}
        />
      </span>
    </label>
  );
}
