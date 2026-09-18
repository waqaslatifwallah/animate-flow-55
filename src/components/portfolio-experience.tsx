import { ArrowDownRight, ArrowUpRight, Asterisk, MoveRight } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    number: "01",
    title: "Sonic Bloom",
    type: "IDENTITY / DIGITAL",
    year: "2026",
    tone: "bg-signal text-signal-foreground",
    visual: "S/B",
  },
  {
    number: "02",
    title: "FWD Motion",
    type: "EXPERIENCE / MOTION",
    year: "2025",
    tone: "bg-electric text-electric-foreground",
    visual: "FWD",
  },
  {
    number: "03",
    title: "Nocturne FM",
    type: "PLATFORM / ART DIRECTION",
    year: "2025",
    tone: "bg-ink-soft text-foreground",
    visual: "N—FM",
  },
];

export function PortfolioExperience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup = () => {};
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.from("[data-hero-line]", {
            yPercent: 115,
            rotate: 2,
            duration: 1.15,
            stagger: 0.12,
            ease: "power4.out",
          });
          gsap.from("[data-hero-meta]", {
            opacity: 0,
            y: 24,
            duration: 0.8,
            stagger: 0.08,
            delay: 0.55,
            ease: "power3.out",
          });

          gsap.to("[data-hero-word]", {
            xPercent: -18,
            scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 1 },
          });

          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.from(element, {
              y: 70,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 86%", once: true },
            });
          });

          const projectTrack = document.querySelector<HTMLElement>("[data-project-track]");
          if (projectTrack && window.innerWidth >= 768) {
            const distance = () => Math.max(0, projectTrack.scrollWidth - window.innerWidth + 64);
            gsap.to(projectTrack, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                trigger: "[data-projects]",
                start: "top top",
                end: () => `+=${distance() + window.innerHeight * 0.7}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
          }

          gsap.to("[data-orbit]", {
            rotate: 180,
            ease: "none",
            scrollTrigger: { trigger: "[data-about]", start: "top bottom", end: "bottom top", scrub: 1 },
          });
        }, rootRef);
        cleanup = () => context.revert();
      },
    );

    return () => cleanup();
  }, []);

  return (
    <div ref={rootRef} className="overflow-clip bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 md:px-10 md:py-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-normal" aria-label="Nova portfolio home">
          NØVA<span className="text-electric">*</span>
        </a>
        <div className="hidden items-center gap-2 text-xs font-medium uppercase tracking-normal md:flex">
          <span className="size-2 rounded-full bg-electric animate-pulse" /> Available for select projects
        </div>
        <Button asChild variant="outline" size="sm" className="rounded-full border-foreground/30 bg-transparent uppercase">
          <a href="mailto:hello@nova.studio">Let's talk <ArrowUpRight /></a>
        </Button>
      </header>

      <main id="top">
        <section data-hero className="relative flex min-h-[94svh] flex-col justify-end px-5 pb-8 pt-28 md:px-10 md:pb-12">
          <div className="pointer-events-none absolute right-[8%] top-[14%] h-28 w-28 border border-electric/50 md:h-52 md:w-52" data-orbit>
            <div className="absolute -right-2 -top-2 size-4 bg-signal" />
            <div className="absolute -bottom-2 -left-2 size-4 rounded-full bg-electric" />
          </div>
          <p data-hero-meta className="mb-4 max-w-xs font-mono text-xs uppercase leading-relaxed text-muted-foreground md:ml-[51%]">
            Independent creative developer<br />building digital experiences<br />from Karachi to everywhere.
          </p>
          <div className="overflow-hidden"><h1 data-hero-line data-hero-word className="whitespace-nowrap font-display text-[23vw] font-semibold leading-[0.76] tracking-normal md:text-[16vw]">CREATIVE</h1></div>
          <div className="overflow-hidden"><h1 data-hero-line className="ml-[7vw] whitespace-nowrap font-display text-[23vw] font-semibold leading-[0.82] tracking-normal text-outline md:text-[16vw]">DEVELOPER</h1></div>
          <div data-hero-meta className="mt-8 flex items-end justify-between border-t border-border pt-4 text-xs uppercase text-muted-foreground">
            <span>Scroll to explore</span>
            <ArrowDownRight className="size-5 text-electric" />
            <span className="hidden md:block">Portfolio / 2026</span>
          </div>
        </section>

        <section className="border-y border-border bg-foreground py-4 text-background">
          <div className="marquee flex w-max items-center gap-8 font-display text-3xl font-semibold uppercase md:text-5xl">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
                <span>Designing motion</span><Asterisk className="size-8 text-signal" /><span>Developing feeling</span><Asterisk className="size-8 text-electric" />
              </div>
            ))}
          </div>
        </section>

        <section data-projects className="min-h-screen bg-background py-20 md:flex md:h-screen md:items-center md:py-0">
          <div data-project-track className="flex flex-col gap-5 px-5 md:w-max md:flex-row md:items-center md:gap-6 md:px-10">
            <div className="w-full shrink-0 md:w-[28vw]" data-reveal>
              <p className="mb-8 font-mono text-xs uppercase text-electric">Selected work / 03</p>
              <h2 className="font-display text-6xl font-semibold leading-[0.9] md:text-8xl">MADE TO<br />MOVE.</h2>
              <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">A selection of identities and digital worlds built for culture-shapers.</p>
            </div>
            {projects.map((project) => (
              <article key={project.number} data-reveal className={`group relative flex aspect-[4/5] w-full shrink-0 flex-col justify-between overflow-hidden p-6 md:w-[38vw] md:p-8 ${project.tone}`}>
                <div className="flex justify-between font-mono text-xs"><span>{project.number}</span><span>{project.year}</span></div>
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <span className="project-glyph font-display text-[29vw] font-bold leading-none opacity-30 transition-transform duration-700 group-hover:scale-110 md:text-[13vw]">{project.visual}</span>
                </div>
                <div className="relative z-10 flex items-end justify-between border-t border-current/30 pt-5">
                  <div><p className="mb-2 font-mono text-[10px]">{project.type}</p><h3 className="font-display text-4xl font-semibold md:text-5xl">{project.title}</h3></div>
                  <ArrowUpRight className="size-8 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section data-about className="relative grid min-h-screen items-center gap-12 border-t border-border px-5 py-24 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4" data-reveal>
            <p className="font-mono text-xs uppercase text-signal">Approach / 001</p>
            <div data-orbit className="relative mt-14 aspect-square w-48 rounded-full border border-electric/50 md:w-64">
              <span className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 bg-electric" />
              <span className="absolute left-1/2 top-0 h-1/2 w-px bg-electric/50" />
            </div>
          </div>
          <div className="md:col-span-8" data-reveal>
            <h2 className="font-display text-5xl font-medium leading-[1.02] md:text-8xl">I turn complex ideas into <span className="text-electric">clear, kinetic</span> digital experiences.</h2>
            <div className="mt-12 grid gap-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
              <p>Strategy, visual systems, interaction and code—considered as one connected craft, not separate deliverables.</p>
              <p>Currently collaborating with founders, cultural teams and ambitious studios across time zones.</p>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[88svh] flex-col justify-between overflow-hidden bg-electric px-5 py-8 text-electric-foreground md:px-10 md:py-12">
          <div className="flex justify-between font-mono text-xs uppercase" data-reveal><span>Have something in mind?</span><span>Karachi / PK</span></div>
          <div data-reveal>
            <p className="mb-3 text-sm">Start a conversation</p>
            <a href="mailto:hello@nova.studio" className="group flex items-end justify-between border-b-2 border-current pb-4 font-display text-[14vw] font-semibold leading-none tracking-normal">
              HELLO<span className="sr-only"> by email</span><MoveRight className="mb-[1vw] size-[10vw] transition-transform duration-500 group-hover:translate-x-5" />
            </a>
          </div>
          <div className="flex flex-wrap justify-between gap-4 text-xs uppercase"><span>© 2026 NØVA Studio</span><span>Instagram / LinkedIn / Are.na</span></div>
        </section>
      </main>
    </div>
  );
}