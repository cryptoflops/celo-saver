'use client';

import { usePathname } from 'next/navigation';
import PublicHeader from './PublicHeader';
import AppHeader from './AppHeader';
import MobileNav from './MobileNav';
import Footer from './Footer';
import type { ReactNode } from 'react';

const publicRoutes = ['/', '/how-it-works', '/safety', '/faq', '/privacy', '/terms'];

export default function ModeLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPublic = publicRoutes.includes(pathname);

  return (
    <>
      {isPublic ? <PublicHeader /> : <AppHeader />}
      <main id="main-content">
        {children}
      </main>
      {isPublic ? <Footer /> : null}
      <MobileNav mode={isPublic ? 'public' : 'app'} />
    </>
  );
}
