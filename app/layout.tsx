import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'CeloSaver | Smart Saving Habits on MiniPay',
  description: 'Automate your savings and build on-chain streaks with CeloSaver.',
  other: {
    'talentapp:project_verification': '2a8f74653e33a535639514d4b4b623692c63085536770b7a9688392ff64bd776eef2d6c868751f3b7f7bf9a5dcc3f2b5b4313d5acba0e40a2e049dd3a8e341e5',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className={`bg-background text-on-background min-h-screen relative overflow-x-hidden pb-[100px] md:pb-0`}>
        <div className="fixed inset-0 z-0 geometric-bg pointer-events-none"></div>
        <div className="fixed inset-0 z-0 bg-noise pointer-events-none"></div>
        
        <header className="flex justify-between items-center w-full px-6 py-4 bg-surface-container-highest/90 backdrop-blur-xl border-b-2 border-surface-variant z-40 relative md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="CeloSaver Logo" width={32} height={32} className="rounded-md object-contain" />
            <h1 className="font-headline-md text-headline-md text-primary-container tracking-tighter uppercase font-black">CELOSAVER</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link className="font-label-caps text-label-caps text-primary-container border-b-2 border-primary-container pb-1" href="/">HOME</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors pb-1" href="/">DEPOSIT</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors pb-1" href="/vault">VAULT</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors pb-1" href="/">STREAK</Link>
          </nav>
          
          <div className="flex items-center">
            <span className="material-symbols-outlined text-primary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
          </div>
        </header>

        <ClientWrapper>{children}</ClientWrapper>

        <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-6 bg-surface-container-highest/90 backdrop-blur-xl border-t-2 border-surface-variant z-50 shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
          <Link href="/" className="flex flex-col items-center justify-center text-primary-container bg-surface-container-low shadow-[4px_4px_0px_0px_#d6ef35] border border-primary-container p-2">
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
            <span className="font-label-caps text-[10px] uppercase tracking-wider">Home</span>
          </Link>
          
          <Link href="/" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-secondary transition-colors">
            <span className="material-symbols-outlined mb-1">add_circle</span>
            <span className="font-label-caps text-[10px] uppercase tracking-wider">Deposit</span>
          </Link>
          
          <Link href="/vault" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-secondary transition-colors">
            <span className="material-symbols-outlined mb-1">lock</span>
            <span className="font-label-caps text-[10px] uppercase tracking-wider">Vault</span>
          </Link>
          
          <Link href="/" className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-secondary transition-colors">
            <span className="material-symbols-outlined mb-1">workspace_premium</span>
            <span className="font-label-caps text-[10px] uppercase tracking-wider">Streak</span>
          </Link>
        </nav>
      </body>
    </html>
  );
}