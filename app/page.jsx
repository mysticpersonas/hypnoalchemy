'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Star, ArrowRight, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react';

function useOnScreen(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // observer.unobserve(entry.target); // Uncomment to animate only once
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
}

// Press logos rendered in the hero marquee.
const PRESS = [
  { name: 'Emmy Award Winner', src: '/logos/emmy.webp' },
  { name: 'ABC News', src: '/logos/abc.png' },
  { name: 'The Telly Awards', src: '/logos/telly.png' },
  { name: 'National Physique Committee USA', src: '/logos/usa.png' },
  { name: 'Fox News', src: '/logos/fox.png' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [section2Ref, section2Visible] = useOnScreen({ threshold: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground antialiased selection:bg-accent/20 selection:text-foreground" style={{ backgroundColor: 'hsl(var(--background))' }}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${isScrolled ? 'liquid-glass' : 'bg-transparent'}`}>
            <a href="#" className="font-display text-2xl tracking-tight text-foreground flex items-center">
              HypnoAlchemy<sup className="text-[10px] ml-0.5 mt-2">®</sup>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {['Services', 'Reviews', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link href="/services/discovery-call" className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground hover:scale-[1.02] active:scale-[0.98] inline-block">
                Book a Free Call
              </Link>
            </div>

            <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(var(--background))] pt-24 px-6 md:hidden flex flex-col gap-6">
          {['Services', 'Reviews', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl text-foreground border-b border-foreground/10 pb-4">
              {item}
            </a>
          ))}
          <Link href="/services/discovery-call" onClick={() => setMobileMenuOpen(false)} className="liquid-glass rounded-full px-6 py-4 text-lg font-medium text-foreground mt-4 text-center">
            Book a Free Call
          </Link>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-36 md:pt-32 md:pb-32">
        {/* Pearl-toned hero artwork — serene portrait dissolving into birds. */}
        <Image
          src="/hero_bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Light pearl wash — subtle, so the artwork stays visible. Only the
            bottom fades fully into the base so the "As Seen On" marquee is clean. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/25 via-[hsl(var(--background))]/15 to-[hsl(var(--background))] z-0" />
        {/* Soft glow behind the headline so the navy text stays readable. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--background)/0.5)_0%,transparent_68%)] z-0" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mb-12 sm:mb-16">
          <h1 className="animate-fade-rise font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-foreground max-w-3xl">
            Trauma doesn't heal in isolation.<br className="hidden md:block" /> It heals when you are <br className="hidden md:block" /><em className="not-italic text-[hsl(var(--accent))]">safely supported.</em>
          </h1>
          <p className="animate-fade-rise-delay text-[hsl(var(--muted-foreground))] text-lg sm:text-xl max-w-2xl mt-8 leading-relaxed font-normal">
            Trauma isn't always about what happened — it's about how your nervous system learned to protect you. We offer steady, 1:1 support to help you feel safer in your body and your life so you can reconnect with your own story and shape what comes next, in your way.
          </p>
          <Link href="/services/discovery-call" className="animate-fade-rise-delay-2 liquid-glass rounded-full w-full sm:w-auto px-12 py-4 text-base font-medium text-foreground mt-8 sm:mt-12 hover:scale-[1.03] transition-transform text-center">
            Book a Free Call
          </Link>
        </div>

        {/* Marquee Social Proof Strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 animate-fade-rise-delay-3 w-full overflow-hidden border-t border-b border-foreground/10 bg-[hsl(var(--background))]/50 backdrop-blur-sm py-5 sm:py-6">
          <p className="text-center text-foreground text-[0.6875rem] sm:text-xs tracking-[0.25em] uppercase font-medium mb-4">
            As Seen On
          </p>
          <div className="marquee-container items-center">
            {/* Two identical halves → seamless -50% loop. Each half repeats the
                logos enough times to always exceed the viewport width, so the
                trailing edge never pulls in and exposes a gap. */}
            {[0, 1].map((set) => (
              <div key={set} className="flex shrink-0 items-center gap-6 sm:gap-10 px-3 sm:px-5" aria-hidden={set === 1}>
                {Array.from({ length: 6 }).flatMap(() => PRESS).map((logo, i) => (
                  <div key={i} className="flex items-center justify-center h-11 sm:h-14 px-4 sm:px-5 rounded-xl bg-white border border-foreground/10 shadow-sm">
                    <img src={logo.src} alt={logo.name} className="h-6 sm:h-8 w-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section ref={section2Ref} className="relative z-10 py-16 md:py-32 lg:py-40 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--accent))]/5 rounded-full blur-[120px] pointer-events-none transition-opacity duration-1000 ${section2Visible ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-16 reveal-up ${section2Visible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            Not mindset work.<br /> Not traditional therapy.<br />
            <span className="text-[hsl(var(--accent))] italic">Identity-level reintegration.</span>
          </h2>

          <div className="relative">
            {/* Subtle structural lines */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[hsl(var(--accent))]/20 to-transparent hidden md:block"></div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[hsl(var(--accent))]/20 to-transparent hidden md:block"></div>

            <div className="space-y-10 text-lg md:text-xl lg:text-2xl text-[hsl(var(--muted-foreground))] text-[1.0625rem] font-normal leading-relaxed md:px-12">
              <p className={`reveal-up ${section2Visible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
                We combine clinical hypnotherapy, subconscious pattern work, and the Mystic Personas® Identity Architecture system to gently uncover the root patterns shaping your reactions — without forcing change or bypassing your lived experience.
              </p>

              <div className={`glass-panel p-8 rounded-2xl my-12 reveal-up ${section2Visible ? 'is-visible' : ''}`} style={{ transitionDelay: '500ms' }}>
                <p className="text-foreground font-normal mb-4">
                  This work isn't about managing symptoms or pushing yourself to "be better."
                </p>
                <p className="text-[hsl(var(--muted-foreground))] text-base md:text-lg">
                  It's about reconnecting with the parts of you that adapted to survive and helping them release what they no longer need to carry. You don't just recognize the pattern.
                </p>
              </div>

              <p className={`text-foreground font-display text-4xl md:text-5xl italic reveal-up ${section2Visible ? 'is-visible' : ''}`} style={{ transitionDelay: '700ms' }}>
                You gain the freedom to respond differently — without losing yourself.
              </p>

              <div className={`pt-12 reveal-up ${section2Visible ? 'is-visible' : ''}`} style={{ transitionDelay: '900ms' }}>
                <button className="text-[hsl(var(--accent))] hover:text-foreground transition-colors flex items-center justify-center gap-2 mx-auto uppercase tracking-widest text-sm font-semibold">
                  View Our Services <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Place */}
      <section className="relative z-10 py-16 md:py-24 px-6 bg-[hsl(var(--muted))]/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">You're In the Right Place If…</h2>
            <p className="text-[hsl(var(--muted-foreground))] text-lg mb-8 leading-relaxed">
              You may not think of your experience as "trauma." Many people don't. This work is for people who feel:
            </p>
            <ul className="space-y-4">
              {[
                "Stuck in patterns they understand but can't shift",
                "Emotionally reactive, shut down, or chronically overwhelmed",
                "Disconnected from their body, voice, or sense of self",
                "High-functioning on the outside, exhausted on the inside",
                "Aware that something deeper is asking for attention"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-foreground/90">
                  <CheckCircle2 className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-lg font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--accent))]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 space-y-6 text-lg text-[hsl(var(--muted-foreground))] font-normal">
              <p>You don't need a diagnosis.</p>
              <p>You don't need a clear story.</p>
              <p>You don't need to know what kind of support you need yet.</p>
              <p className="text-foreground text-xl font-normal pt-4 border-t border-foreground/10">
                You just need a willingness to be supported at your own pace. With a customized blueprint for the change you have been searching for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deeper Than Insight */}
      <section className="relative z-10 py-16 md:py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Why This Work Goes Deeper Than Insight</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-normal">
            Understanding your patterns is important. But lasting change happens when the part of you creating the pattern feels safe enough to shift.
          </p>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-normal">
            This work focuses on the subconscious identity structures beneath your emotions, reactions, and choices — not just surface behaviors. Rather than managing symptoms, we support change at the root.
          </p>
          <div className="py-8">
            <p className="font-display text-4xl md:text-5xl text-foreground mb-2">You don't think your way into change.</p>
            <p className="text-xl text-[hsl(var(--accent))]">You shift the underlying patterns shaping how you respond to life.</p>
          </div>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-normal">
            When the subconscious identity reorganizes, the pattern no longer needs to be forced, fixed, or managed. It resolves naturally.
          </p>
          <div className="glass-panel inline-block px-8 py-6 rounded-2xl mt-8">
            <p className="text-foreground font-medium mb-2">That's the difference between insight and integration.</p>
            <p className="text-[hsl(var(--muted-foreground))] text-sm">Insight explains the pattern.<br />Identity-level work allows it to change.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-16 md:py-24 px-6 bg-[hsl(var(--muted))]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">How Identity-Level Healing Works</h2>
            <p className="text-[hsl(var(--accent))] text-lg mb-6">One Session. Three Layers. Lasting Integration.</p>
            <p className="text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto font-normal leading-relaxed">
              This work isn't about becoming someone new. It's about releasing what no longer fits and reconnecting with who you've always been beneath the adaptations. Every session follows a clear, supportive structure designed to create safety first, insight second, and integration last.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                label: "De-Trance",
                title: "See the Pattern",
                desc: "We reveal the Core, Shadow, and archetypal personas running your current reality. You finally understand why you keep repeating the same emotional loops — with clarity, compassion, and zero judgment. This is the moment the unconscious becomes visible."
              },
              {
                step: "02",
                label: "Un-Hypnotize",
                title: "Rewrite the Origin",
                desc: "Through deep subconscious hypnotherapy, we enter the moment the story was first formed. Here, we recode the emotional imprint at its origin point — where your old narrative dissolves for good. This is the breakthrough your mind has been waiting for."
              },
              {
                step: "03",
                label: "Re-Author",
                title: "Anchor the New Self",
                desc: "You receive somatic guidance and subconscious integration tools to lock in the transformation. Your body, mind, and identity align into a new baseline of clarity and calm. Your life begins responding to the new version of you, immediately."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl relative group hover:bg-foreground/[0.03] transition-colors">
                <div className="text-[hsl(var(--accent))]/30 font-display text-6xl absolute top-6 right-6 pointer-events-none">
                  {item.step}
                </div>
                <div className="text-xs tracking-widest uppercase text-[hsl(var(--accent))] mb-4 font-semibold">{item.label}</div>
                <h3 className="font-display text-3xl text-foreground mb-4">{item.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] text-[1.0625rem] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-16 md:py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Featured Paths</h2>
            <p className="text-[hsl(var(--muted-foreground))] font-normal">Tailored containers for identity-level reorganization.</p>
          </div>

          {/* Services Grid */}
          {/* Standalone free offer — sits above the grid so the card structure below is untouched. */}
          <Link
            href="/services/discovery-call"
            className="glass-panel group mb-16 flex flex-col gap-6 rounded-3xl border border-[hsl(var(--accent))]/30 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-8"
          >
            <div className="flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[hsl(var(--accent))] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Free
                </span>
                <span className="text-sm font-medium text-[hsl(var(--muted-foreground))]">15 minutes • Virtual</span>
              </div>
              <h4 className="mb-2 font-display text-2xl text-foreground md:text-3xl">
                Free Discovery Call &amp; 7 Day Free Hypno Audios Access
              </h4>
              <p className="text-[1.0625rem] font-normal leading-relaxed text-[hsl(var(--muted-foreground))]">
                A gentle doorway into your transformation. No pressure — just clarity, insight, and your next step.
              </p>
            </div>
            <span className="liquid-glass inline-flex shrink-0 items-center justify-center gap-1 rounded-full px-8 py-3.5 text-base font-medium text-foreground transition-transform group-hover:scale-[1.03]">
              Book Free Call <ChevronRight className="h-4 w-4" />
            </span>
          </Link>

          <h3 className="text-foreground text-2xl font-display mb-8 border-b border-foreground/10 pb-4">Single Sessions</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                slug: "awareness-session",
                name: "Awareness Session",
                duration: "30 minutes",
                price: "$95",
                format: "Virtual",
                featured: true,
                desc: "See the pattern clearly — maybe for the first time. A focused session with your choice of Dr. Travis or Michelle."
              },
              {
                slug: "dual-guidance",
                name: "Dual Guidance (Duo)",
                duration: "60 minutes",
                price: "$195",
                format: "Virtual",
                featured: false,
                desc: "Two practitioners. One subconscious breakthrough. A full-hour session with both Dr. Travis and Michelle simultaneously."
              },
              {
                slug: "constellation-code",
                name: "Constellation Code",
                duration: "90 minutes",
                price: "$395",
                format: "Virtual",
                featured: true,
                desc: "The complete identity recode. Our deepest session combining subconscious rewiring, somatic release, and persona constellation."
              }
            ].map((srv, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl flex flex-col h-full relative">
                {srv.featured && (
                  <div className="absolute -top-3 right-6 bg-[hsl(var(--accent))] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-white" /> Featured
                  </div>
                )}
                <h4 className="font-display text-2xl text-foreground mb-2">{srv.name}</h4>
                <div className="flex gap-4 text-sm text-[hsl(var(--muted-foreground))] mb-6 font-medium">
                  <span>{srv.duration}</span>
                  <span>•</span>
                  <span>{srv.format}</span>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] text-[1.0625rem] font-normal leading-relaxed flex-grow mb-8">
                  {srv.desc}
                </p>
                <div className="flex items-end justify-between mt-auto">
                  <span className="text-2xl font-display text-foreground">{srv.price}</span>
                  <Link href={`/services/${srv.slug}`} className="text-[hsl(var(--accent))] text-sm font-medium hover:text-foreground flex items-center gap-1 transition-colors">
                    Details <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Packages Grid */}
          <h3 className="text-foreground text-2xl font-display mb-8 border-b border-foreground/10 pb-4">Transformational Containers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                slug: "identity-realignment",
                name: "Identity Realignment",
                price: "$1,200",
                sessions: "4 sessions × 60 minutes",
                desc: "A focused transformation container designed to stabilize and reorganize your internal identity."
              },
              {
                slug: "identity-reconstruction",
                name: "Identity Reconstruction",
                price: "$3,000",
                sessions: "10 sessions × 60 minutes",
                desc: "A comprehensive identity-level reconstruction for complex or long-standing patterns."
              }
            ].map((pkg, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-[hsl(var(--accent))]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--accent))]/5 rounded-full blur-2xl transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <h4 className="font-display text-3xl text-foreground mb-2">{pkg.name}</h4>
                  <div className="text-sm text-[hsl(var(--accent))] mb-6 font-medium">{pkg.sessions}</div>
                  <p className="text-[hsl(var(--muted-foreground))] text-[1.0625rem] font-normal leading-relaxed mb-8">
                    {pkg.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-display text-foreground">{pkg.price}</span>
                    <Link href={`/services/${pkg.slug}`} className="liquid-glass px-6 py-2 rounded-full text-foreground text-sm hover:scale-105 transition-transform inline-block">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="relative z-10 py-16 md:py-24 px-6 bg-[hsl(var(--muted))]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Client Experiences</h2>
              <div className="flex items-center gap-3">
                <div className="flex text-[hsl(var(--accent))]">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-foreground text-sm font-medium">5.0 on Heal.me (Verified)</span>
              </div>
            </div>
            <button className="text-[hsl(var(--muted-foreground))] hover:text-foreground transition-colors flex items-center gap-2 text-sm">
              View all reviews <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "My regular doctor prescribed medication for stress and sleep problems for many years, but we never got to the root of the issue. Working with the Foxes has been a completely different experience. In a short time, I've been able to reduce my need for medication and finally feel…",
                author: "Steve H.",
                date: "February 27, 2026"
              },
              {
                text: "After more than 50 years of taking medication for sleep, it stopped being effective — I was waking up often throughout the night and feeling exhausted. While praying for help, my wife and I crossed paths with Travis... That meeting truly changed…",
                author: "Steve H.",
                date: "January 29, 2026"
              },
              {
                text: "There hasn't been a single day that I haven't thought about Dr. Travis and Michelle Fox, or the impact they've had on my life. I am so deeply grateful for everything they've taught me. I truly see their teachings as gifts. My partner almost left me because of my…",
                author: "Laura P.",
                date: "January 6, 2026"
              }
            ].map((review, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl flex flex-col">
                <div className="flex text-[hsl(var(--accent))]/50 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground/90 font-normal leading-relaxed italic mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="mt-auto">
                  <div className="text-foreground font-medium">{review.author}</div>
                  <div className="text-[hsl(var(--muted-foreground))] text-xs mt-1">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-16 md:py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">

          {/* Dr. Travis Fox */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div className="md:sticky md:top-32">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Dr. Travis Fox</h2>
              <p className="text-[hsl(var(--accent))] text-sm font-medium mb-6 leading-relaxed">
                Co-Creator, HypnoAlchemy™<br />
                Doctor of Clinical Hypnotherapy<br />
                PhD, Psychology
              </p>
              <div className="relative w-full h-[22.5rem] sm:h-[26.25rem] md:h-[23.75rem] lg:h-[25rem] bg-[hsl(var(--muted))]/50 rounded-2xl border border-foreground/10 overflow-hidden">
                <Image
                  src="/tf.jpg"
                  alt="Dr. Travis Fox"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="space-y-6 text-[hsl(var(--muted-foreground))] text-[1.0625rem] font-normal leading-relaxed text-lg pt-2">
              <p>
                Dr. Travis Fox has worked with high-profile individuals, elite performers, athletes, couples, and high-stress professionals for over 25 years, specializing in how the human nervous system, identity, and decision-making function under sustained pressure and life complexity.
              </p>
              <p>
                With more than 30 years of experience and over one million individuals guided through subconscious transformation, Travis is recognized for his mastery of:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Hypnotic depth work</li>
                <li>Narrative recoding and cognitive reframing</li>
                <li>Archetypal and identity-based pattern decoding</li>
                <li>Nervous system regulation under prolonged stress</li>
              </ul>
              <p>
                His work focuses on how stress, trauma, and relational or performance pressure collapse cognition into survival-based patterns — and how those patterns can be recognized and shifted without therapy framing, emotional excavation, or loss of personal or professional composure.
              </p>
              <p className="text-foreground italic border-l-2 border-[hsl(var(--accent))] pl-6 my-8">
                "As the lead architect behind the MindPersonas® Human Identity Architecture, Dr. Fox helped develop a system that explains why individuals and couples behave the way they do under pressure — and how those patterns can be anticipated, stabilized, and redirected in real time."
              </p>
              <h4 className="text-foreground font-medium text-xl mt-8 mb-4">Within HypnoAlchemy™, Dr. Fox is responsible for:</h4>
              <ul className="space-y-3">
                {[
                  "System architecture and identity-based behavioral modeling",
                  "Translating trauma and subconscious science into precise, private applications",
                  "Designing state-recognition and intervention frameworks",
                  "Ensuring discretion, credibility, and effectiveness for high-level personal and relational work"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] mt-2.5 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Michelle Fox */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div className="md:sticky md:top-32">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">Michelle Fox</h2>
              <p className="text-[hsl(var(--accent))] text-sm font-medium mb-6 leading-relaxed">
                Co-Creator, HypnoAlchemy™<br />
                Somatic Hypnotherapist<br />
                Trauma & Identity Integration Guide
              </p>
              <div className="relative w-full h-[22.5rem] sm:h-[26.25rem] md:h-[23.75rem] lg:h-[25rem] bg-[hsl(var(--muted))]/50 rounded-2xl border border-foreground/10 overflow-hidden">
                <Image
                  src="/mf.jpg"
                  alt="Michelle Fox"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="space-y-6 text-[hsl(var(--muted-foreground))] text-[1.0625rem] font-normal leading-relaxed text-lg pt-2">
              <p>
                Michelle Fox is the Lead Alchemist behind the MindPersonas® Human Identity Architecture and a co-creator of HypnoAlchemy™ — a system designed for individuals and families navigating complex emotional patterns, identity fractures, and the long-term effects of unresolved trauma.
              </p>
              <p>Her work is grounded in a rare and powerful combination:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Deep lived insight into trauma and survival-based adaptation</li>
                <li>Somatic and subconscious pattern work (how trauma imprints in the body)</li>
                <li>Real-world trauma-state decoding across relationships and families</li>
              </ul>
              <p className="text-foreground font-medium text-xl mt-8">
                Michelle's focus centers on a critical truth often missed in traditional approaches:
              </p>
              <p className="text-[hsl(var(--accent))] text-xl font-display">
                Trauma does not present as a personality. It presents as state shifts.
              </p>
              <p>
                Fight, flight, freeze, fawn, shutdown, looping, and collapse — especially within intimate relationships and family systems.
              </p>
              <h4 className="text-foreground font-medium text-xl mt-8 mb-4">Michelle specializes in identifying trauma-driven patterns including:</h4>
              <ul className="space-y-3">
                {[
                  "Emotional flooding misread as overreaction",
                  "Dissociation mistaken for withdrawal, defiance, or apathy",
                  "Hypervigilance that shows up as control, anger, or perfectionism",
                  "Over-compliance that masks exhaustion or collapse"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] mt-2.5 shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                She is widely recognized for her work decoding complex trauma — particularly among women, teens, and family systems — translating it into clear, compassionate frameworks that support safety without forcing disclosure or re-experiencing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 py-16 md:py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 md:p-20 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--accent))]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              When you're ready to explore a different way of changing patterns.
            </h2>
            <p className="text-xl text-[hsl(var(--muted-foreground))] font-normal mb-12 max-w-2xl mx-auto">
              A supportive conversation to see what will help at your pace.
            </p>
            <button className="liquid-glass rounded-full w-full sm:w-auto px-12 py-5 text-lg font-medium text-foreground hover:scale-[1.03] transition-transform">
              Book Your Session
            </button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-foreground/10 bg-[hsl(var(--muted))]/50 pt-20 pb-10 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <a href="#" className="font-display text-3xl tracking-tight text-foreground flex items-center mb-6">
              HypnoAlchemy<sup className="text-xs ml-0.5 mt-2">®</sup>
            </a>
            <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-sm font-normal">
              Identity-level reintegration and trauma care. Not mindset work. Not traditional therapy.
            </p>
          </div>
          <div className="flex md:justify-end gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-foreground text-sm font-medium tracking-widest uppercase mb-2">Explore</span>
              {['Services', 'Reviews', 'About', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-[hsl(var(--muted-foreground))] text-sm hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-foreground text-sm font-medium tracking-widest uppercase mb-2">Connect</span>
              <a href="#" className="text-[hsl(var(--muted-foreground))] text-sm hover:text-foreground transition-colors">Book Now</a>
              <a href="#" className="text-[hsl(var(--muted-foreground))] text-sm hover:text-foreground transition-colors">Client Portal</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[hsl(var(--muted-foreground))]/60 font-normal">
          <p>Copyright 1995-2026 MDPP, LLC — ALL RIGHTS RESERVED</p>
          <p className="text-center md:text-right max-w-xl">
            Unauthorized distribution, copying or other use of these audio programs without express written consent from MDPP, LLC is prohibited and unlawful.
          </p>
        </div>
      </footer>
    </div>
  );
}
