'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  mobile?: boolean;
}

export default function NavLink({ href, children, mobile }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (mobile) {
    return (
      <Link
        href={href}
        className={`flex flex-col items-center justify-center gap-0.5 px-4 py-2 rounded-xl transition-colors font-mono text-btn-mono ${
          isActive
            ? 'text-white bg-surface-container-high'
            : 'text-on-surface-variant hover:text-white hover:bg-surface-container-low'
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`button button--large ${
        isActive ? 'theme--white' : 'theme--blue'
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary`}
    >
      {children}
    </Link>
  );
}
