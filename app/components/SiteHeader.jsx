'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: 'Services', href: '/#services' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between rounded-full px-6 py-3 liquid-glass">
            <Link href="/" className="font-display text-2xl tracking-tight text-foreground flex items-center">
              HypnoAlchemy<sup className="text-[10px] ml-0.5 mt-2">®</sup>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAV.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link href="/services/discovery-call" className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground hover:scale-[1.02] active:scale-[0.98] inline-block">
                Book a Free Call
              </Link>
            </div>

            <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[hsl(var(--background))] pt-24 px-6 md:hidden flex flex-col gap-6">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="font-display text-4xl text-foreground border-b border-foreground/10 pb-4">
              {item.label}
            </Link>
          ))}
          <Link href="/services/discovery-call" onClick={() => setOpen(false)} className="liquid-glass rounded-full px-6 py-4 text-lg font-medium text-foreground mt-4 text-center">
            Book a Free Call
          </Link>
        </div>
      )}
    </>
  );
}
