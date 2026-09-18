import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";

export function SiteFooter() {
  return (
    <section className="relative flex flex-col justify-between gap-12 overflow-hidden bg-electric px-5 py-10 text-electric-foreground md:px-10 md:py-14">
      <div className="flex justify-between font-mono text-xs uppercase">
        <span>Have something in mind?</span>
        <span>Karachi / PK</span>
      </div>

      <div>
        <p className="mb-3 text-sm">Start a conversation</p>
        <a
          href="mailto:hello@nova.studio"
          className="group flex items-end justify-between border-b-2 border-current pb-4 font-display text-[14vw] font-semibold leading-none"
        >
          HELLO
          <span className="sr-only"> by email</span>
          <MoveRight className="mb-[1vw] size-[10vw] transition-transform duration-500 group-hover:translate-x-5" />
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase">
        <span>© 2026 NØVA Studio</span>
        <nav className="flex gap-4">
          <Link to="/about">About</Link>
          <Link to="/blog">Journal</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <span>Instagram / LinkedIn / Are.na</span>
      </div>
    </section>
  );
}
