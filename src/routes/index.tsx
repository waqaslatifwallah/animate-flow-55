import { createFileRoute } from "@tanstack/react-router";
import { PortfolioExperience } from "@/components/portfolio-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NØVA — Creative Developer" },
      { name: "description", content: "Independent creative developer crafting bold digital identities and kinetic web experiences." },
      { property: "og:title", content: "NØVA — Creative Developer" },
      { property: "og:description", content: "Independent creative developer crafting bold digital identities and kinetic web experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioExperience />;
}
