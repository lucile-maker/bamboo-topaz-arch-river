import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { APP_NAME, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ overlayHero = false }: { overlayHero?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!overlayHero);

  useEffect(() => {
    if (!overlayHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlayHero]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = overlayHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-300 ease-out",
        light
          ? "border-b border-transparent bg-transparent text-paper"
          : "border-b border-line/70 bg-paper/95 text-ink backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          to="/"
          className="font-display text-2xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          {APP_NAME}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm tracking-wide transition-colors duration-150",
                light ? "text-paper/80 hover:text-paper" : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant={light ? "inverse" : "primary"} size="sm">
            <Link to="/request">Request membership</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-paper text-ink lg:hidden">
          <nav className="flex h-full flex-col justify-between px-6 py-10">
            <div className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-display text-4xl tracking-tight"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button asChild size="lg" className="w-full">
              <Link to="/request" onClick={() => setOpen(false)}>
                Request membership
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
