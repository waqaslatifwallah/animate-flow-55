export type BlogBlock =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  accent: "electric" | "signal";
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "scroll-that-earns-its-keep",
    title: "Scroll that earns its keep",
    excerpt:
      "Pinned sections and scrubbed timelines are easy to build and easy to abuse. A short field guide to motion that carries meaning instead of noise.",
    date: "2026-08-21",
    readingTime: "6 min read",
    category: "Motion",
    accent: "electric",
    body: [
      {
        kind: "p",
        text: "Every studio site eventually reaches for a pinned section. The page stops, something slides sideways, and the visitor is asked to keep scrolling on faith. It works — right up until the motion stops answering a question the visitor actually has.",
      },
      { kind: "h", text: "Motion is a sentence, not a decoration" },
      {
        kind: "p",
        text: "Before writing a single timeline I write the sentence the section should say out loud. 'These three projects belong to one family.' 'This idea has two halves.' If the sentence is vague, the animation will be too, and no amount of easing rescues it.",
      },
      {
        kind: "list",
        items: [
          "One idea per pinned section — never two competing ones.",
          "Scrub distance should match reading time, not look impressive in a demo.",
          "If the content still reads with animation disabled, the motion is additive rather than load-bearing.",
        ],
      },
      { kind: "h", text: "Budget the attention, not the frames" },
      {
        kind: "p",
        text: "Sixty frames per second is table stakes. The scarcer resource is patience. I cap a long-form page at two pinned moments and let everything else move quietly: a fade, a small offset, a line that arrives a beat late.",
      },
      {
        kind: "quote",
        text: "The best compliment a scroll animation gets is that nobody mentions it — they only remember the work it framed.",
      },
      {
        kind: "p",
        text: "Practically, that means building the static page first, reading it end to end, and only then deciding where movement adds clarity. The order matters: motion layered onto a clear page sharpens it, motion layered onto a muddy page hides the problem.",
      },
    ],
  },
  {
    slug: "designing-a-portfolio-that-sells-work",
    title: "Designing a portfolio that sells the work, not the wrapper",
    excerpt:
      "A portfolio is a sales document wearing a design costume. Here is the structure I keep returning to after a decade of rebuilding my own.",
    date: "2026-07-04",
    readingTime: "5 min read",
    category: "Craft",
    accent: "signal",
    body: [
      {
        kind: "p",
        text: "The uncomfortable truth about portfolio sites is that the people hiring you skim them. They arrive with a question — can this person solve my problem — and they leave the moment the page stops answering it.",
      },
      { kind: "h", text: "Three screens, three answers" },
      {
        kind: "list",
        items: [
          "Screen one: what you do, in your own voice, in under ten words.",
          "Screen two: proof — a small number of projects with the outcome stated plainly.",
          "Screen three: how to start working with you, with no form gymnastics.",
        ],
      },
      {
        kind: "p",
        text: "Everything else is optional. Case studies, process diagrams, awards — useful for the visitors who go deep, invisible to the ones who do not. Build the shallow path first and the deep path second.",
      },
      { kind: "h", text: "Fewer projects, told properly" },
      {
        kind: "p",
        text: "Three well-told projects beat nine thumbnails. For each one I write the brief in a sentence, the decision that mattered, and what changed for the client. The visuals then have something to sit next to.",
      },
      {
        kind: "quote",
        text: "If a project needs a paragraph of apology, it belongs in the archive, not the homepage.",
      },
    ],
  },
  {
    slug: "type-as-interface",
    title: "Type as interface",
    excerpt:
      "Oversized type is not a trend, it is navigation. Notes on building layouts where the typography does the structural work.",
    date: "2026-05-16",
    readingTime: "4 min read",
    category: "Design",
    accent: "electric",
    body: [
      {
        kind: "p",
        text: "When a layout leans on huge display type, the type stops being decoration and starts behaving like architecture. It sets the rhythm, marks the sections, and tells the eye where to land next.",
      },
      { kind: "h", text: "Two sizes, one voice" },
      {
        kind: "p",
        text: "A broken-grid page survives on contrast. I keep the scale brutally simple: one enormous display size for section anchors, one comfortable body size for everything else, and a single mono voice for labels and metadata.",
      },
      {
        kind: "list",
        items: [
          "Set display type in viewport units so it stays confident on any screen.",
          "Let long words overflow deliberately rather than shrinking the whole system.",
          "Keep body measure under 70 characters even when the grid is chaotic.",
        ],
      },
      {
        kind: "p",
        text: "The result reads as art direction but behaves as an interface — which is exactly the trade you want on a portfolio.",
      },
    ],
  },
  {
    slug: "the-handover-nobody-plans-for",
    title: "The handover nobody plans for",
    excerpt:
      "Launch day is the easy part. What you leave behind decides whether the work survives the next six months without you.",
    date: "2026-03-02",
    readingTime: "7 min read",
    category: "Process",
    accent: "signal",
    body: [
      {
        kind: "p",
        text: "Most projects end with a deploy and a thank-you note. Six months later the site has drifted: new sections bolted on, the type scale broken, the motion stripped out because nobody knew why it was there.",
      },
      { kind: "h", text: "Write the why down" },
      {
        kind: "p",
        text: "A handover document that lists file names is inventory, not knowledge. The valuable page is short: the decisions, the constraints behind them, and the three things not to change without a conversation.",
      },
      {
        kind: "quote",
        text: "Design systems do not decay because people are careless. They decay because the reasoning left the building.",
      },
      { kind: "h", text: "Leave one worked example" },
      {
        kind: "p",
        text: "For every pattern, I leave one page built correctly end to end. Teams copy examples far more reliably than they read guidelines, so the example is the guideline.",
      },
      {
        kind: "list",
        items: [
          "A one-page rationale beats a forty-page manual.",
          "Name the three untouchables explicitly.",
          "Record a short screen walkthrough — it outlives every written doc.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
