import { createFileRoute } from "@tanstack/react-router";
import { Asterisk } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NØVA Creative Developer" },
      {
        name: "description",
        content:
          "NØVA is an independent creative developer in Karachi building kinetic identities, motion systems and digital experiences for culture-shaping teams.",
      },
      { property: "og:title", content: "About — NØVA Creative Developer" },
      {
        property: "og:description",
        content: "Independent creative developer blending strategy, art direction, motion and code into one craft.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const capabilities = [
  { label: "Art direction", detail: "Visual systems, type scales, motion language." },
  { label: "Creative development", detail: "React, TanStack, GSAP, WebGL-lite interaction." },
  { label: "Brand identity", detail: "Naming, marks, editorial systems for digital-first brands." },
  { label: "Experience design", detail: "Narrative structure, scroll choreography, prototypes." },
];

const timeline = [
  { year: "2026", text: "Independent studio practice — selected collaborations with founders and cultural teams." },
  { year: "2024", text: "Lead creative developer on award-shortlisted music and festival platforms." },
  { year: "2021", text: "Design engineer inside a product team, owning the motion and design-system layer." },
  { year: "2018", text: "Started as a front-end developer who kept redrawing the comps." },
];

function AboutPage() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="overflow-clip bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
          <p data-reveal className="font-mono text-xs uppercase text-electric">
            About / NØVA
          </p>
          <h1
            data-reveal
            className="mt-6 max-w-5xl font-display text-[13vw] font-semibold leading-[0.88] md:text-[8vw]"
          >
            A studio of one, built for <span className="text-outline">momentum</span>.
          </h1>
          <div
            data-reveal
            className="mt-12 grid gap-8 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground md:grid-cols-3"
          >
            <p className="text-base text-foreground md:col-span-1">
              I&apos;m a creative developer working between design and engineering, from Karachi, with teams
              anywhere.
            </p>
            <p>
              For nine years I&apos;ve moved between the two chairs — art directing a brand in the morning and
              shipping its interaction layer in the afternoon. Keeping both jobs in one head means fewer
              translations, fewer compromises, and motion that was designed rather than retrofitted.
            </p>
            <p>
              Projects usually start with a question about clarity, not decoration: what should someone feel in
              the first five seconds, and what should they be able to do in the next thirty.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-foreground py-4 text-background">
          <div className="marquee flex w-max items-center gap-8 font-display text-3xl font-semibold uppercase md:text-5xl">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
                <span>Strategy</span>
                <Asterisk className="size-8 text-signal" />
                <span>Art direction</span>
                <Asterisk className="size-8 text-electric" />
                <span>Motion</span>
                <Asterisk className="size-8 text-signal" />
                <span>Code</span>
                <Asterisk className="size-8 text-electric" />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-4" data-reveal>
            <p className="font-mono text-xs uppercase text-signal">Capabilities / 004</p>
            <h2 className="mt-6 font-display text-5xl font-medium leading-[1] md:text-6xl">
              What I&apos;m hired for.
            </h2>
          </div>
          <ul className="md:col-span-8">
            {capabilities.map((item) => (
              <li
                key={item.label}
                data-reveal
                className="flex flex-col gap-2 border-t border-border py-6 md:flex-row md:items-baseline md:justify-between"
              >
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{item.label}</h3>
                <p className="max-w-sm text-sm text-muted-foreground">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-12 border-t border-border px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-4" data-reveal>
            <p className="font-mono text-xs uppercase text-electric">Path / 001</p>
            <h2 className="mt-6 font-display text-5xl font-medium leading-[1] md:text-6xl">How I got here.</h2>
          </div>
          <ol className="md:col-span-8">
            {timeline.map((entry) => (
              <li key={entry.year} data-reveal className="flex gap-6 border-t border-border py-6 md:gap-12">
                <span className="font-mono text-xs text-electric">{entry.year}</span>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{entry.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
