'use client';

import { useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppKit, useAppKitAccount, useDisconnect } from '@reown/appkit/react';

export default function AppHeader() {
  const pathname = usePathname();
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleWalletClick = useCallback(() => {
    if (!isConnected) {
      open();
      return;
    }

    clickCount.current += 1;

    if (clickTimer.current) clearTimeout(clickTimer.current);

    if (clickCount.current >= 3) {
      clickCount.current = 0;
      disconnect();
      return;
    }

    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 600);
  }, [isConnected, open, disconnect]);

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/deposit', label: 'Deposit' },
    { href: '/vault', label: 'Vault' },
    { href: '/streak', label: 'Streak' },
  ];

  const walletLabel = isConnected && address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : 'Connect wallet';

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

        <button
          onClick={handleWalletClick}
          className={`button button--large hover:scale-[1.03] active:scale-[0.97] ${isConnected ? 'theme--white' : 'theme--blue'}`}
          title={isConnected ? 'Triple-click to disconnect' : 'Connect wallet'}
        >
          {walletLabel}
        </button>
      </nav>
    </header>
  );
}
