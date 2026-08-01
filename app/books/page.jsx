import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Books — HypnoAlchemy®',
  description:
    'Books by Dr. Travis Fox and Michelle Fox — Mystic Personas, and the forthcoming MindPersonas: The Hidden Operating System.',
};

export default function BooksPage() {
  return (
    <div className="min-h-screen text-foreground antialiased selection:bg-accent/20 selection:text-foreground" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <SiteHeader />

      <main className="relative z-10 px-6 pt-28 md:pt-36 pb-16 md:pb-24">
        {/* Soft ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[hsl(var(--accent))]/10 rounded-full blur-[130px] pointer-events-none"></div>

        {/* Page header */}
        <div className="relative text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs tracking-widest uppercase text-[hsl(var(--accent))] font-semibold">Publications</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mt-4 mb-5">
            The intellectual foundation of the work
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
            Written by Dr. Travis &amp; Michelle Fox.
          </p>
        </div>

        {/* ── Book 1 — Mystic Personas (sticky cover + buy, scrolling copy) ── */}
        <section className="relative max-w-5xl mx-auto grid lg:grid-cols-[0.82fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: cover + buy — sticks while the copy scrolls on desktop */}
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto w-fit mb-8">
              <div className="absolute -inset-6 bg-[hsl(var(--accent))]/15 rounded-[2rem] blur-3xl pointer-events-none"></div>
              <Image
                src="/books/mystic-personas.jpg"
                alt="Mystic Personas book cover"
                width={1000}
                height={1514}
                priority
                className="relative w-auto h-auto max-h-[360px] sm:max-h-[440px] lg:max-h-[480px] rounded-xl shadow-2xl mx-auto"
              />
            </div>

            {/* Buy block — visible on desktop only (mobile version sits after the copy) */}
            <div className="hidden lg:flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--accent))]/12 text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-wider px-3 py-1.5 mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" /> Available Now
              </span>
              <a
                href="https://www.amazon.com/dp/B0F3W6521T"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-9 py-4 text-base font-semibold text-white shadow-lg shadow-[hsl(var(--accent))]/25 hover:scale-[1.03] active:scale-[0.98] transition-transform"
              >
                Buy on Amazon <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-[hsl(var(--muted-foreground))] font-normal mt-4">
                Paperback &amp; Kindle · Ships worldwide
              </p>
            </div>
          </div>

          {/* Right: the story of the book */}
          <div>
            <span className="inline-flex lg:hidden items-center gap-1.5 rounded-full bg-[hsl(var(--accent))]/12 text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-wider px-3 py-1.5 mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" /> Available Now
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-3">
              The Mystic Personas
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mb-8">
              Unlock your power, transform your shadows, and master your destiny.
            </p>

            <div className="space-y-8">
              <blockquote className="border-l-2 border-[hsl(var(--accent))] pl-6 text-foreground font-display italic text-xl md:text-2xl leading-relaxed">
                “A living blueprint for mastery that shows you not just who you are, but who you are becoming.”
              </blockquote>

              <div>
                <h3 className="text-xs tracking-widest uppercase text-[hsl(var(--accent))] font-semibold mb-2">The Framework</h3>
                <p className="text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                  Discover the hidden energies guiding your decisions, uncover the unseen forces that sabotage success, and ascend to your Oracle, where clarity and intuition merge.
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-[hsl(var(--accent))] font-semibold mb-2">The Application</h3>
                <p className="text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                  Predict moves in business, decode emotions in relationships, and shift personas at will to unlock your full potential.
                </p>
              </div>

              <p className="font-display italic text-2xl text-foreground pt-2">
                The question is no longer whether the world is ready.<br />
                <span className="text-[hsl(var(--accent))]">Are you?</span>
              </p>
            </div>

            {/* Buy block — mobile only, after the reader has the full picture */}
            <div className="lg:hidden flex flex-col items-center text-center mt-12 pt-10 border-t border-foreground/10">
              <a
                href="https://www.amazon.com/dp/B0F3W6521T"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--accent))] px-9 py-4 text-base font-semibold text-white shadow-lg shadow-[hsl(var(--accent))]/25 active:scale-[0.98] transition-transform"
              >
                Buy on Amazon <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-[hsl(var(--muted-foreground))] font-normal mt-4">
                Paperback &amp; Kindle · Ships worldwide
              </p>
            </div>
          </div>
        </section>

        {/* ── On the Horizon — MindPersonas ───────────────────────────── */}
        <section className="relative max-w-3xl mx-auto mt-24 md:mt-32">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs tracking-widest uppercase text-[hsl(var(--muted-foreground))] font-semibold whitespace-nowrap">On the Horizon</span>
            <div className="h-px flex-1 bg-foreground/10"></div>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-center">
            {/* Cover */}
            <Image
              src="/books/mindpersonas.jpg"
              alt="MindPersonas book cover"
              width={1024}
              height={1535}
              className="w-40 sm:w-44 h-auto rounded-lg shadow-xl shrink-0"
            />

            {/* Content */}
            <div className="text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--accent))] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-3">
                <Clock className="w-3.5 h-3.5" /> Coming Soon
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-foreground leading-tight mb-2">
                MindPersonas™
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mb-6">
                The Hidden Operating System — behind behavior, patterns, and performance. The new science of hidden identity architecture.
              </p>
              <Link
                href="/books/waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--accent))]/40 px-7 py-3 text-sm font-semibold text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/8 transition-colors"
              >
                Join the Waitlist <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
