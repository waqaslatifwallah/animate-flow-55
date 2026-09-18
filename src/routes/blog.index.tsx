import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { blogPosts, formatPostDate } from "@/lib/blog-posts";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Notes on motion, type and craft | NØVA" },
      {
        name: "description",
        content:
          "Essays from an independent creative developer on scroll animation, portfolio structure, typography as interface and project handover.",
      },
      { property: "og:title", content: "Journal — Notes on motion, type and craft" },
      {
        property: "og:description",
        content: "Writing on scroll choreography, design systems and the craft of shipping creative work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const rootRef = useReveal();
  const [featured, ...rest] = blogPosts;

  return (
    <div ref={rootRef} className="overflow-clip bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="px-5 pb-14 pt-10 md:px-10 md:pt-16">
          <p data-reveal className="font-mono text-xs uppercase text-electric">
            Journal / {blogPosts.length.toString().padStart(2, "0")} entries
          </p>
          <h1 data-reveal className="mt-6 font-display text-[15vw] font-semibold leading-[0.85] md:text-[9vw]">
            NOTES &<br />
            <span className="text-outline">PROCESS</span>
          </h1>
          <p data-reveal className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Long-form thinking on motion, typography and the unglamorous parts of shipping creative work.
          </p>
        </section>

        <section className="px-5 md:px-10">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            data-reveal
            className="group grid gap-8 border-t border-border py-10 md:grid-cols-12"
          >
            <div className="md:col-span-5">
              <div
                className={`flex aspect-[4/3] items-center justify-center overflow-hidden ${
                  featured.accent === "electric"
                    ? "bg-electric text-electric-foreground"
                    : "bg-signal text-signal-foreground"
                }`}
              >
                <span className="font-display text-[22vw] font-bold leading-none opacity-30 transition-transform duration-700 group-hover:scale-110 md:text-[9vw]">
                  {featured.category.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between md:col-span-7">
              <div>
                <p className="font-mono text-xs uppercase text-electric">Latest / {featured.category}</p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] md:text-6xl">
                  {featured.title}
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-5 font-mono text-xs uppercase text-muted-foreground">
                <span>
                  {formatPostDate(featured.date)} — {featured.readingTime}
                </span>
                <ArrowUpRight className="size-6 text-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </section>

        <section className="px-5 pb-24 md:px-10">
          <ul>
            {rest.map((post) => (
              <li key={post.slug} data-reveal>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group grid gap-4 border-t border-border py-8 md:grid-cols-12 md:items-baseline"
                >
                  <span className="font-mono text-xs uppercase text-muted-foreground md:col-span-2">
                    {formatPostDate(post.date)}
                  </span>
                  <div className="md:col-span-7">
                    <h3 className="font-display text-2xl font-semibold leading-tight transition-colors group-hover:text-electric md:text-4xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between font-mono text-xs uppercase text-muted-foreground md:col-span-3 md:justify-end md:gap-6">
                    <span>{post.category}</span>
                    <ArrowUpRight className="size-5 text-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
