import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-foreground/10 bg-[hsl(var(--muted))]/50 pt-20 pb-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <Link href="/" className="font-display text-3xl tracking-tight text-foreground flex items-center mb-6">
            HypnoAlchemy<sup className="text-xs ml-0.5 mt-2">®</sup>
          </Link>
          <p className="text-[hsl(var(--muted-foreground))] text-sm max-w-sm font-normal">
            Identity-level reintegration and trauma care. Not mindset work. Not traditional therapy.
          </p>
        </div>
        <div className="flex md:justify-end gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-foreground text-sm font-medium tracking-widest uppercase mb-2">Explore</span>
            {[
              { label: 'Services', href: '/#services' },
              { label: 'Books', href: '/books' },
              { label: 'Reviews', href: '/#reviews' },
              { label: 'About', href: '/#about' },
              { label: 'Contact', href: '/#contact' },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="text-[hsl(var(--muted-foreground))] text-sm hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-foreground text-sm font-medium tracking-widest uppercase mb-2">Connect</span>
            <Link href="/#contact" className="text-[hsl(var(--muted-foreground))] text-sm hover:text-foreground transition-colors">Book Now</Link>
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
  );
}
