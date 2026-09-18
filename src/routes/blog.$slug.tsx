import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, MoveRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { blogPosts, formatPostDate, getPost } from "@/lib/blog-posts";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Entry not found — NØVA Journal" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — NØVA Journal` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 py-32 md:px-10">
        <p className="font-mono text-xs uppercase text-signal">404 / Journal</p>
        <h1 className="mt-6 font-display text-5xl font-semibold md:text-7xl">That entry isn&apos;t here.</h1>
        <Link to="/blog" className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase text-electric">
          Back to the journal <MoveRight className="size-4" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const rootRef = useReveal();
  const others = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 2);

  return (
    <div ref={rootRef} className="overflow-clip bg-background text-foreground">
      <SiteHeader />

      <main>
        <article>
          <header className="px-5 pb-12 pt-10 md:px-10 md:pt-16">
            <Link to="/blog" className="font-mono text-xs uppercase text-electric hover:underline">
              ← Journal
            </Link>
            <h1
              data-reveal
              className="mt-8 max-w-4xl font-display text-[10vw] font-semibold leading-[0.92] md:text-[5.5vw]"
            >
              {post.title}
            </h1>
            <div
              data-reveal
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-border pt-5 font-mono text-xs uppercase text-muted-foreground"
            >
              <span className="text-electric">{post.category}</span>
              <span>{formatPostDate(post.date)}</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          <div
            className={`h-[28vh] w-full ${
              post.accent === "electric" ? "bg-electric" : "bg-signal"
            } flex items-center justify-center overflow-hidden`}
          >
            <span className="font-display text-[26vw] font-bold leading-none text-background/30 md:text-[12vw]">
              NØVA
            </span>
          </div>

          <div className="mx-auto max-w-2xl px-5 py-16 md:px-0 md:py-24">
            {post.body.map((block, index) => {
              if (block.kind === "h") {
                return (
                  <h2 key={index} data-reveal className="mt-14 font-display text-3xl font-semibold md:text-4xl">
                    {block.text}
                  </h2>
                );
              }
              if (block.kind === "quote") {
                return (
                  <blockquote
                    key={index}
                    data-reveal
                    className="my-12 border-l-2 border-electric pl-6 font-display text-2xl font-medium leading-snug md:text-3xl"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              if (block.kind === "list") {
                return (
                  <ul key={index} data-reveal className="mt-8 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-4 text-base leading-relaxed text-muted-foreground">
                        <span className="mt-2 size-2 shrink-0 bg-signal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} data-reveal className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              );
            })}
          </div>
        </article>

        <section className="border-t border-border px-5 py-16 md:px-10 md:py-20">
          <p className="font-mono text-xs uppercase text-electric">Keep reading</p>
          <ul className="mt-8">
            {others.map((entry) => (
              <li key={entry.slug} data-reveal>
                <Link
                  to="/blog/$slug"
                  params={{ slug: entry.slug }}
                  className="group flex items-center justify-between gap-6 border-t border-border py-6"
                >
                  <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-electric md:text-4xl">
                    {entry.title}
                  </h3>
                  <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
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
