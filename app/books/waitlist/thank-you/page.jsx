import Link from 'next/link';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';

export const metadata = {
  title: 'You’re on the list — HypnoAlchemy®',
  description: 'Thank you for joining the MindPersonas™ waitlist.',
};

export default function WaitlistThankYouPage() {
  return (
    <div className="min-h-screen text-foreground antialiased selection:bg-accent/20 selection:text-foreground" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <SiteHeader />

      <main className="relative z-10 px-6 pt-28 md:pt-36 pb-16 md:pb-24 min-h-[70vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--accent))]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-xl mx-auto relative text-center">
          <div className="glass-panel rounded-3xl px-8 py-14 md:px-12">
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))]/12 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-[hsl(var(--accent))]" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-4">
              You’re on the list
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed mb-10">
              Thank you for joining the MindPersonas™ waitlist. We’ll email you the moment the book is available — keep an eye on your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/books"
                className="liquid-glass rounded-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Books
              </Link>
              <Link
                href="/"
                className="rounded-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[hsl(var(--accent))] border border-[hsl(var(--accent))]/30 hover:bg-[hsl(var(--accent))]/5 transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
