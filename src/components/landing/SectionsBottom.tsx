import { useState } from "react";
import {
  ArrowRight,
  Bell,
  Check,
  Heart,
  HeartHandshake,
  MessageSquare,
  Play,
  Plus,
  Search,
  ShieldCheck,
  User,
  MapPin,
  BookOpen,
  X,
  Users,
} from "lucide-react";
import { Container, Logo, PillButton, Avatar } from "./primitives";
import { LegacyBook } from "./SectionsTop";
import { img, avatars } from "./assets";
import { cn } from "@/lib/utils";

function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

/* 8 — Platform */
export function Platform() {
  return (
    <section className="bg-background pb-16">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl bg-surface px-6 py-14 lg:grid-cols-[1.4fr_1fr] lg:px-12">
          <div className="relative mx-auto h-[360px] w-full max-w-[560px]">
            {/* Video story */}
            <div className="absolute left-0 top-12 z-10 w-36 -rotate-3 overflow-hidden rounded-xl bg-card shadow-float">
              <div className="relative">
                <img src={img.grandpaStory} alt="Grandfather telling a story" loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <span className="absolute inset-0 m-auto grid size-9 place-items-center rounded-full bg-card/80 text-ink">
                  <Play className="size-4 fill-current" />
                </span>
              </div>
              <div className="p-2">
                <p className="text-[11px] font-bold text-ink">Grandpa's Story</p>
                <p className="text-[9px] text-muted-foreground">2:14</p>
                <div className="mt-1 flex h-3 items-center gap-[2px]">
                  {[2, 4, 6, 3, 7, 4, 5, 2, 6, 3, 4, 2].map((h, i) => (
                    <span key={i} className="w-[2px] rounded bg-brand/60" style={{ height: h * 1.5 }} />
                  ))}
                </div>
              </div>
            </div>
            {/* Main app card */}
            <div className="absolute left-[22%] top-0 z-20 w-60 rounded-xl bg-card p-3 shadow-float">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-brand">KinnectAI</span>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Bell className="size-3" />
                  <img src={avatars.david} alt="" className="size-4 rounded-full object-cover" />
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <img src={avatars.jennifer} alt="" className="size-6 rounded-full object-cover" />
                <div>
                  <p className="text-[10px] font-bold text-ink">Sarah Miller</p>
                  <p className="text-[8px] text-muted-foreground">Family Reunion</p>
                </div>
              </div>
              <img src={img.connectGroup} alt="Family reunion photo" loading="lazy" className="mt-2 aspect-[4/3] w-full rounded-lg object-cover" />
              <p className="mt-2 text-[10px] text-ink">The best kind of moments… together.</p>
              <div className="mt-2 flex gap-3 text-[9px] text-muted-foreground">
                <span className="flex items-center gap-1"><Heart className="size-3 fill-love text-love" />24</span>
                <span className="flex items-center gap-1"><MessageSquare className="size-3" />6</span>
              </div>
            </div>
            {/* Timeline */}
            <div className="absolute left-[64%] top-6 z-10 w-40 rounded-xl bg-card p-3 shadow-card">
              <p className="text-[10px] font-bold text-ink">Family Timeline</p>
              <ul className="relative mt-3 space-y-3 pl-6">
                <span className="absolute left-2 top-1 bottom-1 w-px bg-brand/30" />
                {[
                  ["The Early Years", "1940s – 1970s"],
                  ["Growing Together", "1980s – 2000s"],
                  ["Today", "2010s – Present"],
                ].map(([t, d]) => (
                  <li key={t} className="relative">
                    <span className="absolute -left-6 top-0 grid size-4 place-items-center rounded-full bg-brand text-[7px] text-primary-foreground">●</span>
                    <p className="text-[9px] font-semibold text-ink">{t}</p>
                    <p className="text-[8px] text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Shared photos */}
            <div className="absolute left-[60%] top-[56%] z-30 w-40 rounded-xl bg-card p-2.5 shadow-float">
              <p className="mb-2 text-[10px] font-bold text-ink">Shared Photos</p>
              <div className="grid grid-cols-2 gap-1">
                <img src={img.womenGenerations} alt="" loading="lazy" className="aspect-square rounded object-cover" />
                <img src={img.grandmaCall} alt="" loading="lazy" className="aspect-square rounded object-cover" />
                <img src={img.generationsGrass} alt="" loading="lazy" className="aspect-square rounded object-cover" />
                <div className="relative">
                  <img src={img.familyHill} alt="" loading="lazy" className="aspect-square rounded object-cover" />
                  <span className="absolute inset-0 grid place-items-center rounded bg-ink/60 text-xs font-bold text-primary-foreground">+12</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>The Platform</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink">
              Real connections.
              <br />
              Lasting memories.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              KinnectAI brings your family together in one private, secure space — where you can share photos, stories, and milestones across generations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 9 — Better way */
export function BetterWay() {
  return (
    <section className="bg-background pb-16">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl bg-surface px-6 py-14 lg:grid-cols-[1.1fr_1fr] lg:px-12">
          <div>
            <Eyebrow>Why KinnectAI</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink">
              A better way to
              <br />
              share, connect and
              <br />
              keep your family close.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-card/60 p-5">
                <p className="text-xs font-bold text-ink">Traditional Social Media</p>
                <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
                  {["Public feeds", "Strangers and noise", "Short-lived moments", "No real ownership"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><X className="size-3.5" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-brand/40 bg-card p-5 shadow-card">
                <p className="text-xs font-bold text-ink">KinnectAI</p>
                <ul className="mt-4 space-y-3 text-xs text-ink">
                  {["Private & secure", "Family only", "Lasting memories", "Your stories, your legacy"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><Check className="size-3.5 text-brand" strokeWidth={3} />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={img.womenGenerations} alt="Mother, grandmother and daughters hugging" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
            <p className="absolute -top-4 right-2 rotate-[-4deg] font-script text-3xl leading-tight text-brand sm:-top-8">
              Less noise.
              <br />
              <span className="pl-6">More family.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 10 — Four ways */
export function FourWays() {
  return (
    <section className="bg-background pb-16">
      <Container className="px-5 sm:px-14">
        <Eyebrow>Features</Eyebrow>
        <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-ink">
          Four simple ways to
          <br />
          keep your family connected.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Discover */}
          <FeatureCard title="Discover" desc="Explore family history, reconnect with lost relatives, and uncover your roots." active>
            <img src={img.preserveVintage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover sepia" />
            <div className="absolute inset-x-4 bottom-3 rounded-lg bg-card/95 p-2 shadow-card">
              <p className="flex items-center gap-1.5 border-b pb-1.5 text-[10px] font-semibold text-ink"><Search className="size-3" />Search your family…</p>
              <ul className="mt-1.5 space-y-1 text-[9px] text-muted-foreground">
                <li className="flex items-center gap-1.5"><User className="size-2.5" />People</li>
                <li className="flex items-center gap-1.5"><MapPin className="size-2.5" />Places</li>
                <li className="flex items-center gap-1.5"><BookOpen className="size-2.5" />Stories</li>
              </ul>
            </div>
          </FeatureCard>
          {/* Connect */}
          <FeatureCard title="Connect" desc="Build deeper relationships with the people who matter most.">
            <img src={img.grandmaCall} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-3 left-3 right-6 flex items-center gap-1.5 rounded-lg bg-card/95 p-2 shadow-card">
              <img src={avatars.jennifer} alt="" className="size-5 rounded-full object-cover" />
              <p className="text-[9px] text-ink">So good to see you all!</p>
            </div>
          </FeatureCard>
          {/* Capture */}
          <FeatureCard title="Capture" desc="Share photos, videos and voice stories in the moment — or from the past.">
            <div className="absolute inset-0 bg-gradient-band" />
            <div className="absolute inset-x-[18%] top-4 bottom-0 overflow-hidden rounded-t-2xl border-4 border-b-0 border-brand/80 bg-card">
              <img src={img.beachToddler} alt="Toddler running on a beach" loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute bottom-3 left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-card bg-love" />
            </div>
          </FeatureCard>
          {/* Preserve */}
          <FeatureCard title="Preserve" desc="Keep your family's history safe for future generations.">
            <div className="absolute inset-0 bg-muted" />
            <div className="absolute inset-x-5 top-4 bottom-3 rounded-lg bg-card p-2 shadow-card">
              <div className="flex gap-2">
                <div className="flex flex-col items-center pt-2">
                  <span className="size-2 rounded-full bg-brand" />
                  <span className="h-10 w-px bg-brand/30" />
                  <span className="size-2 rounded-full bg-brand" />
                </div>
                <div className="flex-1">
                  <img src={img.familyHill} alt="" loading="lazy" className="aspect-[16/9] w-full rounded object-cover" />
                  <p className="mt-1.5 text-[10px] font-bold text-ink">Our Family Story</p>
                  <p className="text-[8px] text-muted-foreground">A legacy album</p>
                  <p className="mt-1 flex items-center gap-1 text-[8px] text-muted-foreground"><ShieldCheck className="size-2.5" />Saved forever</p>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({ title, desc, active, children }: { title: string; desc: string; active?: boolean; children: React.ReactNode }) {
  return (
    <article className="overflow-hidden rounded-xl bg-surface shadow-card">
      <div className="relative aspect-[5/4] overflow-hidden">{children}</div>
      <div className="p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold text-ink">
          {active && <span className="size-1.5 rounded-full bg-brand" />}
          {title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </article>
  );
}

/* 11 — Impact v2 */
export function ImpactStats() {
  const items = [
    { i: Users, t: "A growing family community", d: "More families joining every day." },
    { i: Heart, t: "Meaningful connections", d: "Real relationships across generations." },
    { i: ShieldCheck, t: "Stories preserved", d: "Because every memory matters." },
  ];
  return (
    <section className="bg-background pb-16">
      <Container>
        <div className="grid items-center gap-8 rounded-3xl bg-surface px-6 py-12 lg:grid-cols-[1fr_1.3fr] lg:px-12">
          <div>
            <Eyebrow>Platform Impact</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold leading-snug tracking-tight text-ink">
              Real people. Growing communities.
              <br />
              Lasting impact.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {items.map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-xl bg-card p-5 shadow-card">
                <span className="grid size-10 place-items-center rounded-full bg-brand-soft text-brand"><Icon className="size-4" /></span>
                <h3 className="mt-4 text-xs font-bold text-ink">{t}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 12 — Kit v2 */
export function KitInvite() {
  return (
    <section className="bg-background pb-16">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl bg-gradient-kit px-6 py-14 md:grid-cols-2 lg:px-16">
          <LegacyBook variant="photo" />
          <div>
            <Eyebrow>The Legacy Kit</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink">
              Get your free
              <br />
              Family Legacy Kit.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A simple, powerful guide to help you capture, organize, and preserve your family's most important stories.
            </p>
            <PillButton className="mt-6" href="#kit">Download Free Kit</PillButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 13 — Real stories */
export function RealStories() {
  const items = [
    { q: "KinnectAI has brought our family closer than ever. We're finally all in one place.", n: "Jennifer L.", r: "Daughter & Aunt", a: avatars.jennifer },
    { q: "I found cousins I never knew I had. It's been a gift for our whole family.", n: "Michael T.", r: "Grandson", a: avatars.michael },
    { q: "Being able to save my dad's stories means the world to our kids and grandkids.", n: "Lisa M.", r: "Daughter", a: avatars.lisa },
  ];
  return (
    <section className="bg-background pb-16">
      <Container className="px-5 sm:px-14">
        <Eyebrow>Community</Eyebrow>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">Real stories. Real people.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.n} className="flex gap-4 rounded-xl bg-card p-5 shadow-card">
              <Avatar src={t.a} alt={t.n} className="size-11" />
              <div>
                <blockquote className="text-xs leading-relaxed text-ink/80">"{t.q}"</blockquote>
                <figcaption className="mt-5">
                  <p className="text-xs font-bold text-ink">{t.n}</p>
                  <p className="text-[10px] text-muted-foreground">{t.r}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* 14 — FAQ + blog teaser */
const faqs = [
  { q: "Is KinnectAI really private and secure?", a: "Yes. Your space is visible only to family members you invite — no public profiles, no ads, and your memories are never sold." },
  { q: "Can I invite family members who aren't tech-savvy?", a: "Absolutely. Invitations work by simple link or text message, and the experience is designed to be easy for every generation." },
  { q: "Is there a cost to use KinnectAI?", a: "You can join and start building your family space for free." },
  { q: "Can I upload photos and videos from my phone?", a: "Yes — upload photos, videos and voice recordings straight from your phone or computer." },
  { q: "What happens to my data if I decide to leave?", a: "Your stories are yours. You can download everything you've shared at any time." },
];

export function FaqBlog() {
  const [open, setOpen] = useState<number | null>(null);
  const posts = [
    { t: "5 Ways to Preserve Your Family's History", s: img.discoverGirl },
    { t: "Reconnecting with Distant Relatives", s: img.connectGroup },
    { t: "The Power of Shared Memories", s: img.familyHill },
  ];
  return (
    <section className="bg-background pb-16">
      <Container>
        <div className="grid gap-10 rounded-3xl bg-surface px-6 py-12 lg:grid-cols-[1fr_1.3fr] lg:px-12">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-2 text-lg font-extrabold tracking-tight text-ink">Common questions, simple answers.</h2>
            <ul className="mt-5 overflow-hidden rounded-xl bg-card shadow-card">
              {faqs.map((f, i) => (
                <li key={f.q} className="border-b last:border-b-0">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-xs text-ink transition hover:bg-surface"
                    aria-expanded={open === i}
                  >
                    {f.q}
                    <Plus className={cn("size-3.5 shrink-0 text-brand transition-transform", open === i && "rotate-45")} />
                  </button>
                  {open === i && <p className="px-4 pb-4 text-xs leading-relaxed text-muted-foreground animate-in fade-in">{f.a}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>From the Blog</Eyebrow>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">Stories, tips and inspiration.</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {posts.map((p) => (
                <a key={p.t} href="#blog" className="group overflow-hidden rounded-xl bg-card shadow-card">
                  <img src={p.s} alt={p.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-3">
                    <p className="text-xs font-semibold leading-snug text-ink">{p.t}</p>
                    <p className="mt-4 flex items-center gap-1 text-[10px] font-semibold text-brand">Read more <ArrowRight className="size-3" /></p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 15 — Articles */
export function Articles() {
  const items = [
    { t: "Building Stronger Family Connections in a Digital World", s: img.blogSunsetWalk },
    { t: "Tips for Preserving Your Family History with Technology", s: img.blogOldPhoto },
    { t: "Why Family Matters More Than Ever", s: img.blogLoneTree },
  ];
  return (
    <section className="bg-background pb-12" id="blog">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((p) => (
            <a key={p.t} href="#blog" className="group overflow-hidden rounded-xl bg-card p-1.5 shadow-card">
              <div className="overflow-hidden rounded-lg">
                <img src={p.s} alt={p.t} loading="lazy" className="aspect-[2.2/1] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="px-3 pb-3 pt-4">
                <h3 className="min-h-[2.5rem] text-sm font-bold leading-snug text-ink">{p.t}</h3>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand">Read More <ArrowRight className="size-3.5" /></p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* CTA + Footer */
export function CtaFooter() {
  return (
    <>
      <section className="bg-background pb-12" id="join">
        <Container>
          <div className="rounded-2xl bg-gradient-cta px-6 py-10 text-center shadow-float">
            <h2 className="text-2xl font-extrabold tracking-tight text-primary-foreground sm:text-3xl">
              Bring your family closer. Keep your stories forever.
            </h2>
            <PillButton variant="light" className="mt-6 h-12 min-w-[170px] text-brand" href="#join">JOIN</PillButton>
          </div>
        </Container>
      </section>
      <footer className="bg-background pb-12">
        <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo />
          <nav className="flex flex-wrap items-center justify-center gap-x-1 text-xs text-ink">
            {["For Advertisers", "For Community", "For Genealogist", "Legal", "Help"].map((l, i, arr) => (
              <span key={l} className="flex items-center">
                <a href="#" className="px-4 transition hover:text-brand">{l}</a>
                {i < arr.length - 1 && <span className="text-border">|</span>}
              </span>
            ))}
          </nav>
        </Container>
      </footer>
    </>
  );
}

export { HeartHandshake };
