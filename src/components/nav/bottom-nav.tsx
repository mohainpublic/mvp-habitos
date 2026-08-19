"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChatIcon, HomeIcon, ProfileIcon, RankingIcon } from "@/components/icons";

const ITEMS = [
  { href: "/home", label: "Home", icon: HomeIcon },
  { href: "/ranking", label: "Ranking", icon: RankingIcon },
  { href: "/settings/chat-ia", label: "Chat IA", icon: ChatIcon },
  { href: "/profile", label: "Perfil", icon: ProfileIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 flex items-center justify-around border-t border-border bg-surface px-3 py-3">
      {ITEMS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-1 rounded-2xl px-4 py-1.5 text-[10px] font-semibold transition-colors ${
              active ? "bg-brand/10 text-brand" : "text-muted-foreground"
            }`}
          >
            <Icon />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
