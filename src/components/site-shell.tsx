import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({
  children,
  overlayHero = false,
}: {
  children: ReactNode;
  overlayHero?: boolean;
}) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader overlayHero={overlayHero} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
