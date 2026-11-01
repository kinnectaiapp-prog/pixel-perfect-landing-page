import {
  Check,
  CircleCheck,
  Heart,
  MessageCircle,
  MessageSquare,
  Play,
  Share2,
  ThumbsUp,
  TrendingUp,
  Users,
  X,
  ChevronDown,
} from "lucide-react";
import { Container, Logo, PillButton, SectionTitle, Avatar, AvatarStack } from "./primitives";
import { img, avatars } from "./assets";

const familyAvatars = [avatars.jennifer, avatars.david, avatars.maria];

/* 1 — Hero */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
        <img src={img.heroFamily} alt="Three generations of a family smiling at a tablet together" width={1408} height={1024} className="h-full w-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-hero md:block" />
      <Container className="relative grid min-h-[600px] items-center gap-10 py-10 md:grid-cols-[1fr_1fr] md:py-0">
        <div className="relative z-10 flex flex-col">
          <Logo className="mb-14 md:mb-16" />
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Your family's
            <br />
            story deserves
            <br />
            <span className="text-brand">a place to live.</span>
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/80">
            A private space to discover, connect, capture, and preserve the moments that bring generations together.
          </p>
          <div className="mt-9 mb-6">
            <PillButton size="lg">JOIN</PillButton>
          </div>
        </div>

        <div className="relative md:h-full">
          <img src={img.heroFamily} alt="" className="h-72 w-full rounded-2xl object-cover md:hidden" />
          {/* Floating post card */}
          <div className="float-slow absolute -bottom-6 left-4 z-10 w-56 rounded-2xl bg-card p-3 shadow-float md:bottom-auto md:left-[-4%] md:top-[20%] md:w-60 lg:left-[-12%]">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs font-bold text-ink">
                Our Family <ChevronDown className="size-3" />
              </span>
              <AvatarStack srcs={familyAvatars} />
            </div>
            <img src={img.sunsetDock} alt="Family on a dock at sunset" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <p className="mt-2 text-xs font-bold text-ink">
              Making memories together <Heart className="inline size-3 fill-love text-love" />
            </p>
            <p className="text-[10px] text-muted-foreground">2h ago</p>
            <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="flex items-center gap-2">
                <Heart className="size-3 fill-love text-love" />
                <MessageSquare className="size-3" /> 24
              </span>
              <MessageCircle className="size-3" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 2 — Experience */
export function Experience() {
  return (
    <section className="bg-gradient-band">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-[0.8fr_1.6fr]">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink">
            The KinnectAI
            <br />
            Experience
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/80">
            A modern, intuitive platform where your family's moments, stories, and connections come together — all in one private place.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center">
          {/* Timeline */}
          <div className="w-44 rounded-2xl bg-card p-3 shadow-card sm:mt-8">
            <p className="mb-3 text-xs font-bold text-ink">Family Timeline</p>
            <div className="relative space-y-3 pl-5">
              <span className="absolute left-1.5 top-1 bottom-1 w-px bg-brand/30" />
              {[img.generationsGrass, img.connectGroup, img.familyHill].map((s, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[18px] top-1/2 size-2 -translate-y-1/2 rounded-full bg-brand" />
                  <img src={s} alt="" loading="lazy" className="h-14 w-full rounded-md object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Feed post */}
          <div className="w-72 rounded-2xl bg-card p-3 shadow-float">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs font-bold text-ink">
                Our Family <ChevronDown className="size-3" />
              </span>
              <AvatarStack srcs={familyAvatars} />
            </div>
            <img src={img.generationsGrass} alt="Family sitting together on grass" loading="lazy" className="aspect-[16/10] w-full rounded-lg object-cover" />
            <p className="mt-3 text-sm font-bold text-ink">Generations Together</p>
            <p className="text-xs text-muted-foreground">
              A day to remember. <Heart className="inline size-3 fill-love text-love" />
            </p>
            <div className="mt-3 flex gap-4 border-t pt-2 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1"><ThumbsUp className="size-3" />Like</span>
              <span className="flex items-center gap-1"><MessageSquare className="size-3" />Comment</span>
              <span className="flex items-center gap-1"><Share2 className="size-3" />Share</span>
            </div>
          </div>

          {/* Voice story */}
          <div className="w-56 rounded-2xl bg-card p-3 shadow-card sm:mt-6">
            <p className="text-xs font-bold text-ink">Voice Story</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-brand text-primary-foreground">
                <Play className="size-3.5 fill-current" />
              </span>
              <div className="flex h-6 flex-1 items-center gap-[2px]">
                {[3, 6, 9, 5, 11, 7, 13, 6, 9, 4, 10, 6, 12, 5, 8, 3, 7, 10, 4, 6].map((h, i) => (
                  <span key={i} className="w-[3px] rounded-full bg-brand/70" style={{ height: h * 1.6 }} />
                ))}
              </div>
            </div>
            <p className="mt-1 pl-10 text-[10px] text-muted-foreground">0:00 / 1:24</p>
            <img src={img.girlDandelion} alt="Girl blowing a dandelion" loading="lazy" className="mt-3 aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 3 — Why */
export function Why() {
  return (
    <section className="bg-card">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={img.phoneFeed} alt="Phone showing an endless social feed" loading="lazy" className="aspect-[16/10] w-full object-cover" />
          <div className="absolute inset-0 bg-ink/25" />
          <span className="absolute right-[18%] top-[22%] grid size-14 place-items-center rounded-full bg-love text-primary-foreground shadow-float">
            <X className="size-7" strokeWidth={3} />
          </span>
          <p className="absolute bottom-6 left-6 text-xl font-bold leading-snug text-primary-foreground">
            Endless feeds.
            <br />
            Forgotten moments.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">Why KinnectAI?</h2>
          <p className="mt-2 font-semibold text-ink">Because family deserves more than a public feed.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-[1.3fr_auto_1fr]">
            <p className="text-sm leading-relaxed text-ink/80">
              Traditional social media is noisy, distracting, and forgetful. KinnectAI gives you a private, focused space to celebrate what matters most—your family.
            </p>
            <span className="hidden w-px bg-border sm:block" />
            <ul className="space-y-2 text-sm text-ink">
              {["Private & secure", "Family-centered", "Ad-free experience", "Built to last"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CircleCheck className="size-4 fill-brand text-card" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 4 — Pillars */
export function Pillars() {
  const items = [
    { t: "Discover", d: "Find and explore your family's rich history.", s: img.discoverGirl },
    { t: "Connect", d: "Strengthen bonds across generations.", s: img.connectGroup },
    { t: "Capture", d: "Save life's moments, big and small.", s: img.captureSunset },
    { t: "Preserve", d: "Keep your family's story for tomorrow.", s: img.preserveVintage },
  ];
  return (
    <section className="bg-background py-14">
      <Container>
        <SectionTitle>Discover, Connect, Capture, Preserve</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.t} className="group overflow-hidden rounded-xl bg-card p-2 shadow-card transition hover:-translate-y-1">
              <div className="overflow-hidden rounded-lg">
                <img src={it.s} alt={it.t} loading="lazy" className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="px-3 pb-3 pt-4">
                <h3 className="font-bold text-ink">{it.t}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink/75">{it.d}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* 5 — Impact */
export function Impact() {
  const items = [
    { i: Users, t: "A Growing Community", d: "Families everywhere are choosing KinnectAI." },
    { i: TrendingUp, t: "Real Engagement", d: "More meaningful connections across generations." },
    { i: Heart, t: "Lasting Impact", d: "Preserving memories for generations to come." },
  ];
  return (
    <section className="bg-background pb-14">
      <Container>
        <SectionTitle>Platform Impact</SectionTitle>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-xl bg-surface-strong/70 px-6 py-6 text-center">
              <Icon className={`mx-auto size-8 text-brand ${Icon === Heart ? "fill-brand" : ""}`} />
              <h3 className="mt-3 text-sm font-bold text-ink">{t}</h3>
              <p className="mx-auto mt-1 max-w-[200px] text-xs leading-relaxed text-ink/75">{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* Book graphic used in two kit sections */
export function LegacyBook({ variant = "tree" }: { variant?: "tree" | "photo" }) {
  return (
    <div className="relative mx-auto h-64 w-72">
      <div className="absolute left-24 top-4 h-56 w-40 rotate-6 rounded-md bg-card shadow-card">
        <div className="space-y-1.5 p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="block h-1 rounded bg-muted" style={{ width: `${60 + ((i * 17) % 35)}%` }} />
          ))}
        </div>
      </div>
      <div className="absolute left-14 top-2 h-56 w-40 rotate-3 rounded-md bg-card shadow-card" />
      <div className="absolute left-0 top-0 flex h-60 w-44 -rotate-6 flex-col rounded-md border-l-[6px] border-brand/60 bg-card p-4 shadow-float">
        <p className="text-sm font-bold text-brand">KinnectAI</p>
        <p className="mt-1 text-sm font-bold text-ink">Family Legacy {variant === "tree" ? "Kit" : ""}</p>
        {variant === "tree" ? (
          <img src={img.legacyTree} alt="" loading="lazy" className="mt-auto w-full" />
        ) : (
          <>
            <p className="text-[9px] text-muted-foreground">Discover · Connect · Belong</p>
            <img src={img.familyHill} alt="" loading="lazy" className="mt-auto aspect-[4/3] w-full rounded object-cover" />
          </>
        )}
      </div>
    </div>
  );
}

/* 6 — Legacy kit */
export function LegacyKit() {
  return (
    <section className="bg-background pb-14" id="kit">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-kit px-6 py-10 md:grid-cols-[1fr_1.2fr] md:px-12">
          <LegacyBook />
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink">The Family Legacy Kit</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/80">
              Get your free Family Legacy Kit — a curated collection of tools, tips, and templates to help you capture and preserve your family's story.
            </p>
            <PillButton className="mt-6" href="#kit">Download Free Kit</PillButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* 7 — Testimonials */
export function Testimonials() {
  const items = [
    { q: "KinnectAI has brought our family closer, even across distances.", n: "Sarah M.", a: avatars.sarah },
    { q: "Finally, a social platform that truly values family.", n: "David R.", a: avatars.david },
    { q: "A beautiful way to preserve our family's legacy.", n: "Maria T.", a: avatars.maria },
  ];
  return (
    <section className="bg-background pb-16">
      <Container>
        <SectionTitle>What Our Community Says</SectionTitle>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.n} className="rounded-xl bg-card p-6 shadow-card">
              <span className="text-3xl font-extrabold leading-none text-brand">“</span>
              <blockquote className="text-sm leading-relaxed text-ink">"{t.q}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm font-bold text-ink">
                <Avatar src={t.a} alt={t.n} /> {t.n}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Check };
