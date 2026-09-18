import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ absolute = false }: { absolute?: boolean }) {
  return (
    <header
      className={`${absolute ? "absolute" : "relative"} inset-x-0 top-0 z-30 flex items-center justify-between gap-4 px-5 py-5 md:px-10 md:py-8`}
    >
      <Link to="/" className="font-display text-lg font-semibold" aria-label="NØVA home">
        NØVA<span className="text-electric">*</span>
      </Link>

      <nav className="hidden items-center gap-6 font-mono text-xs uppercase text-muted-foreground md:flex">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="transition-colors hover:text-foreground"
            activeProps={{ className: "text-electric" }}
            activeOptions={{ exact: link.to === "/" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <nav className="flex items-center gap-4 font-mono text-[10px] uppercase text-muted-foreground md:hidden">
          {links.slice(1).map((link) => (
            <Link key={link.to} to={link.to} activeProps={{ className: "text-electric" }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="hidden rounded-full border-foreground/30 bg-transparent uppercase md:inline-flex"
        >
          <a href="mailto:hello@nova.studio">
            Let&apos;s talk <ArrowUpRight />
          </a>
        </Button>
      </div>
    </header>
  );
}
