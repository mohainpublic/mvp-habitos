import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

export type Variant = "primary" | "outline" | "ghost" | "accent" | "success";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
}

export const buttonBase =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none";

export const buttonVariants: Record<Variant, string> = {
  primary: "bg-brand text-brand-foreground hover:bg-brand/90",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  success: "bg-success text-white hover:bg-success/90",
  outline:
    "border border-border bg-surface text-foreground hover:bg-surface-muted",
  ghost: "text-muted-foreground hover:text-foreground",
};

export function Button({
  variant = "primary",
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  icon?: ReactNode;
}

export function LinkButton({
  href,
  variant = "primary",
  icon,
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </Link>
  );
}
