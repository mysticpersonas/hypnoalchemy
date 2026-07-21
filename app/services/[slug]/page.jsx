import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check, Clock, Star, Sparkles } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { SERVICES, SERVICE_SLUGS } from '../services-data';

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = SERVICES[params.slug];
  if (!service) return { title: 'Service — HypnoAlchemy®' };
  return {
    title: `${service.name} — HypnoAlchemy®`,
    description: service.tagline,
  };
}

export default function ServicePage({ params }) {
  const service = SERVICES[params.slug];
  if (!service) notFound();

  const { name, kind, featured, isFree, metaPrimary, price, format, delivery, tagline, body, includes, outcome, booking, payment } = service;

  const chips = [
    { icon: Clock, label: metaPrimary },
    { label: price },
    { label: format },
    { label: delivery },
  ];

  return (
    <div className="min-h-screen text-foreground antialiased selection:bg-accent/20 selection:text-foreground" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <SiteHeader />

      <main className="relative z-10 px-6 pt-28 md:pt-36 pb-16 md:pb-24">
        {/* Soft ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[hsl(var(--accent))]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>

          {/* Header */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-widest uppercase text-[hsl(var(--accent))] font-semibold">{kind}</span>
              {featured && (
                <span className="bg-[hsl(var(--accent))] text-white text-[11px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" /> Featured
                </span>
              )}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-5">{name}</h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">{tagline}</p>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {chips.map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <span key={i} className="glass-panel inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-foreground/90 font-medium">
                    {Icon && <Icon className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />}
                    {chip.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Two-column: details + booking/payment */}
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 mt-14 items-start">
            {/* Details */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-6 pb-4 border-b border-foreground/10">Details</h2>
              <div className="space-y-6 text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
                {body.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para.replace('HypnoAlchemy®', 'HypnoAlchemy<sup class="text-xs">®</sup>') }} />
                ))}
              </div>

              {includes.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-foreground font-medium text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[hsl(var(--accent))]" /> Includes
                  </h3>
                  <ul className="space-y-3">
                    {includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/90">
                        <Check className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                        <span className="font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="glass-panel rounded-2xl p-6 md:p-8 mt-10">
                <div className="text-xs tracking-widest uppercase text-[hsl(var(--accent))] font-semibold mb-2">Outcome</div>
                <p className="text-foreground text-lg font-normal leading-relaxed">{outcome}</p>
              </div>
            </div>

            {/* Booking card — sticky again now that it holds a button, not a calendar. */}
            <div className="lg:sticky lg:top-28">
              <div className="glass-panel rounded-3xl p-6 md:p-8">
                <h2 className="font-display text-2xl text-foreground mb-1">
                  {isFree ? 'Book Your Free Call' : 'Book Your Session'}
                </h2>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl text-[hsl(var(--accent))]">{price}</span>
                  <span className="text-sm text-[hsl(var(--muted-foreground))]">· {metaPrimary}</span>
                </div>

                {/* What happens next — sets expectations before leaving the site. */}
                <ul className="space-y-2.5 mb-7">
                  {[
                    'Choose a time that works for you',
                    isFree ? 'Get instant 7-day audio access' : 'Confirm and complete payment securely',
                    'Receive your confirmation by email',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))]">
                      <Check className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                {/* Forwards to GHL's hosted booking page — scheduling AND payment
                    run on their domain, which an embedded iframe can't do reliably. */}
                {booking.url ? (
                  <a
                    href={booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass rounded-full w-full px-8 py-4 text-base font-medium text-foreground flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    Book Now <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="rounded-full w-full px-8 py-4 text-base font-medium text-foreground/40 bg-foreground/[0.03] border border-foreground/10 cursor-not-allowed"
                  >
                    Booking link coming soon
                  </button>
                )}

                {/* Optional separate checkout, only if a payment link is provided. */}
                {!isFree && payment.url && (
                  <a
                    href={payment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 rounded-full w-full px-8 py-3.5 text-sm font-medium text-[hsl(var(--accent))] border border-[hsl(var(--accent))]/30 flex items-center justify-center gap-2 hover:bg-[hsl(var(--accent))]/5 transition-colors"
                  >
                    Pay Separately · {price}
                  </a>
                )}

                <p className="text-[hsl(var(--muted-foreground))] text-xs font-normal text-center mt-4">
                  {isFree
                    ? 'Opens our secure scheduler. Your 7-day audio access is sent automatically once booked.'
                    : 'Opens our secure scheduler, where you’ll pick your time and complete payment.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
