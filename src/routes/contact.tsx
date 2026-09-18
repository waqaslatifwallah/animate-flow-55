import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NØVA Creative Developer" },
      {
        name: "description",
        content:
          "Start a project with NØVA: creative development, brand identity and motion work for founders, studios and cultural teams.",
      },
      { property: "og:title", content: "Contact — NØVA Creative Developer" },
      { property: "og:description", content: "Tell me about the project. Replies within two working days." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const budgets = ["Under $5k", "$5k — $15k", "$15k — $40k", "$40k +"];

function ContactPage() {
  const rootRef = useReveal();
  const [budget, setBudget] = useState(budgets[1]);

  return (
    <div ref={rootRef} className="overflow-clip bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="grid gap-14 px-5 pb-20 pt-10 md:grid-cols-12 md:px-10 md:pb-28 md:pt-16">
          <div className="md:col-span-5" data-reveal>
            <p className="font-mono text-xs uppercase text-signal">Contact / 001</p>
            <h1 className="mt-6 font-display text-[14vw] font-semibold leading-[0.85] md:text-[7vw]">
              LET&apos;S
              <br />
              <span className="text-electric">BUILD.</span>
            </h1>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              I take on a small number of projects at a time. Share the shape of yours and I&apos;ll reply within
              two working days with honest thoughts on fit, timing and budget.
            </p>

            <dl className="mt-12 space-y-6 border-t border-border pt-8 font-mono text-xs uppercase">
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="mt-2 normal-case">
                  <a href="mailto:hello@nova.studio" className="text-base text-electric hover:underline">
                    hello@nova.studio
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="mt-2">Karachi, PK — UTC+5</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Availability</dt>
                <dd className="mt-2 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-electric" /> Booking from Nov 2026
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7" data-reveal>
            <form
              className="border border-border bg-card p-6 md:p-10"
              onSubmit={(event) => {
                event.preventDefault();
                toast("Form preview only", {
                  description: "Messages aren't being delivered yet — email hello@nova.studio in the meantime.",
                });
              }}
            >
              <p className="font-mono text-xs uppercase text-muted-foreground">Project enquiry</p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@studio.com" required />
                </div>
              </div>

              <div className="mt-6 grid gap-2">
                <Label htmlFor="company">Company / project</Label>
                <Input id="company" name="company" placeholder="What are we naming this?" />
              </div>

              <fieldset className="mt-8">
                <legend className="font-mono text-xs uppercase text-muted-foreground">Budget range</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {budgets.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setBudget(option)}
                      aria-pressed={budget === option}
                      className={`rounded-full border px-4 py-2 font-mono text-xs uppercase transition-colors ${
                        budget === option
                          ? "border-electric bg-electric text-electric-foreground"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 grid gap-2">
                <Label htmlFor="brief">The brief</Label>
                <Textarea
                  id="brief"
                  name="brief"
                  rows={6}
                  placeholder="Goals, timeline, anything already decided."
                  required
                />
              </div>

              <Button type="submit" size="lg" className="mt-8 w-full rounded-full uppercase md:w-auto">
                Send enquiry <ArrowUpRight />
              </Button>
              <p className="mt-4 font-mono text-[10px] uppercase text-muted-foreground">
                Preview form — no messages are stored yet.
              </p>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
