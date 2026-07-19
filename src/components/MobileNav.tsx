'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const publicLinks = [
  { href: '/', label: 'Home', icon: 'M10 2L2 9H4V18H9V13H11V18H16V9H18L10 2Z' },
  { href: '/how-it-works', label: 'How it works', icon: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 16V12M12 8H12.01' },
  { href: '/safety', label: 'Safety', icon: 'M12 3L4 7V12C4 17 7.5 21.5 12 23C16.5 21.5 20 17 20 12V7L12 3Z' },
  { href: '/faq', label: 'FAQ', icon: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 16V12M12 8H12.01' },
];

const appLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: 'M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z' },
  { href: '/deposit', label: 'Deposit', icon: 'M10 2C5.59 2 2 5.59 2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2ZM13 11H11V13H9V11H7V9H9V7H11V9H13V11Z' },
  { href: '/vault', label: 'Vault', icon: 'M3 7H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V7ZM7 7V5C7 3.34 8.34 2 10 2C11.66 2 13 3.34 13 5V7' },
  { href: '/streak', label: 'Streak', icon: 'M7 18L10 11H6L8 2L13 9H9.5L12 18H7Z' },
];

interface MobileNavProps {
  mode: 'public' | 'app';
}

export default function MobileNav({ mode }: MobileNavProps) {
  const pathname = usePathname();
  const links = mode === 'app' ? appLinks : publicLinks;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[1000] flex items-center justify-around px-2 py-1 pb-5 bg-[#050505]/90 backdrop-blur-2xl border-t border-white/5" aria-label={`${mode} navigation`}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-300 ${
              isActive
                ? 'text-white'
                : 'text-white/30 hover:text-white/60'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={link.icon} fill="currentColor"/>
            </svg>
            <span className="font-sans text-[9px] tracking-wider uppercase">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
