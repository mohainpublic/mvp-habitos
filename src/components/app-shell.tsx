import { ReactNode } from "react";
import { TopBar } from "@/components/nav/top-bar";
import { BottomNav } from "@/components/nav/bottom-nav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-sm flex-col bg-background">
      <TopBar />
      <main className="flex flex-1 flex-col gap-5 px-5 py-5">{children}</main>
      <BottomNav />
    </div>
  );
}
