import { createFileRoute } from "@tanstack/react-router";
import { Hero, Experience, Why, Pillars, Impact, LegacyKit, Testimonials } from "@/components/landing/SectionsTop";
import {
  Platform,
  BetterWay,
  FourWays,
  ImpactStats,
  KitInvite,
  RealStories,
  FaqBlog,
  Articles,
  CtaFooter,
} from "@/components/landing/SectionsBottom";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KinnectAI — Your family's story deserves a place to live" },
      { name: "description", content: "A private space to discover, connect, capture, and preserve the moments that bring generations together." },
      { property: "og:title", content: "KinnectAI — Your family's story deserves a place to live" },
      { property: "og:description", content: "A private, ad-free home for your family's photos, stories and history." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Hero />
      <Experience />
      <Why />
      <Pillars />
      <Impact />
      <LegacyKit />
      <Testimonials />
      <Platform />
      <BetterWay />
      <FourWays />
      <ImpactStats />
      <KitInvite />
      <RealStories />
      <FaqBlog />
      <Articles />
      <CtaFooter />
    </main>
  );
}
