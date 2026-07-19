'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppHeader() {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/deposit', label: 'Deposit' },
    { href: '/vault', label: 'Vault' },
    { href: '/streak', label: 'Streak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pt-4 px-4">
      <nav className="flex items-center justify-between w-full max-w-5xl bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2" aria-label="App navigation">
        <Link href="/dashboard" className="flex items-center gap-2.5 font-mono text-sm text-white tracking-tight shrink-0">
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
              className={`button button--large hover:scale-[1.03] active:scale-[0.97] ${
                pathname === link.href ? 'theme--white' : 'theme--blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="button button--large theme--blue hidden md:inline-flex hover:scale-[1.03] active:scale-[0.97]"
        >
          Site
        </Link>
      </nav>
    </header>
  );
}
