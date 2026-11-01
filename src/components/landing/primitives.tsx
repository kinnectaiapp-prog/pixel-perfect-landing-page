import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("text-2xl font-bold tracking-tight text-brand", className)} aria-label="KinnectAI home">
      KinnectAI
    </a>
  );
}

type BtnProps = {
  children: ReactNode;
  variant?: "primary" | "light";
  size?: "md" | "lg";
  href?: string;
  className?: string;
};

export function PillButton({ children, variant = "primary", size = "md", href = "#join", className }: BtnProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5",
        size === "lg" ? "h-14 min-w-[200px] px-10 text-base tracking-wide" : "h-10 px-6 text-sm",
        variant === "primary" && "bg-primary text-primary-foreground shadow-brand hover:brightness-110",
        variant === "light" && "bg-card text-ink shadow-card hover:bg-surface",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn("text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl", className)}>{children}</h2>;
}

export function Avatar({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={256}
      height={256}
      className={cn("size-12 shrink-0 rounded-full object-cover ring-2 ring-card", className)}
    />
  );
}

export function AvatarStack({ srcs, className }: { srcs: string[]; className?: string }) {
  return (
    <div className={cn("flex -space-x-2", className)}>
      {srcs.map((s, i) => (
        <img key={i} src={s} alt="" loading="lazy" className="size-6 rounded-full object-cover ring-2 ring-card" />
      ))}
    </div>
  );
}
