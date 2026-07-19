'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/how-it-works', label: 'How it works' },
    { href: '/safety', label: 'Safety' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pt-4 px-4">
      <nav className="flex items-center justify-between w-full max-w-5xl bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2" aria-label="Public navigation">
        <Link href="/" className="flex items-center gap-2.5 font-mono text-sm text-white tracking-tight shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#379DEF" strokeWidth="1.5" fill="none"/>
            <path d="M5 8L7.5 10.5L11.5 6" stroke="#379DEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-mono text-nav-mono text-white">CELOSAVER</span>
        </Link>

        {/* Desktop: reown-style pill buttons */}
        <div className="hidden md:flex items-center gap-1.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="button button--large theme--blue"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="button button--large theme--white ml-1"
          >
            Open app
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-full"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-5 h-4">
            <span className={`absolute left-0 top-0 w-5 h-[1.5px] bg-white/60 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? 'rotate-45 top-1.5' : ''}`} />
            <span className={`absolute left-0 top-1.5 w-5 h-[1.5px] bg-white/60 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 w-5 h-[1.5px] bg-white/60 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? '-rotate-45 top-1.5' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center gap-4"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="button button--large !text-[18px] theme--blue"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="button button--large theme--white"
              >
                Open app
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
