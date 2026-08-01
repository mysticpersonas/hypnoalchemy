import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import WaitlistForm from '../../components/WaitlistForm';

export const metadata = {
  title: 'MindPersonas Waitlist — HypnoAlchemy®',
  description: 'Join the waitlist for MindPersonas™: The Hidden Operating System.',
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen text-foreground antialiased selection:bg-accent/20 selection:text-foreground" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <SiteHeader />

      <main className="relative z-10 px-6 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[hsl(var(--accent))]/10 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-2xl mx-auto relative">
          <Link href="/books" className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Books
          </Link>

          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--accent))] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">
              <Clock className="w-3.5 h-3.5" /> Coming Soon
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Join the MindPersonas™ Waitlist
            </h1>
            <p className="text-lg text-[hsl(var(--muted-foreground))] font-normal leading-relaxed">
              Leave your details and you’ll be the first to know the moment the book is available.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-4 sm:p-6">
            <WaitlistForm />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
