import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import MiniPayBar from '@/components/MiniPayBar';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { LayoutDashboard, PlusCircle, Lock, Trophy, User } from 'lucide-react';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'CeloSaver | Smart Saving Habits on MiniPay',
  description: 'Automate your savings and build on-chain streaks with CeloSaver.',
  other: {
    'talentapp:project_verification': '1e81a44b6bd503de1bd655a02f5725561c97f58b090b0d2b108e1795c6a2630c03be5541275d91a5229ff0257ad21e14a30e16a6016c7ee78b1a2a5c0cf45b40',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-on-background min-h-screen relative overflow-x-hidden pb-[100px] md:pb-0">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="fixed inset-0 z-0 geometric-bg pointer-events-none"></div>
        <div className="fixed inset-0 z-0 bg-noise pointer-events-none"></div>
        
        <header className="flex justify-between items-center w-full px-6 py-4 bg-surface-container-highest/90 backdrop-blur-xl border-b-2 border-surface-variant z-40 relative md:shadow-neo-dark">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="CeloSaver Logo" width={32} height={32} className="rounded-md object-contain" />
            <h1 className="font-headline-md text-headline-md text-primary-container tracking-tighter uppercase font-black">CELOSAVER</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link className="font-label-caps text-label-caps text-primary-container border-b-2 border-primary-container pb-1 focus-visible:outline-2 focus-visible:outline-primary-container" href="/">HOME</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors pb-1 focus-visible:outline-2 focus-visible:outline-primary-container" href="/deposit">DEPOSIT</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors pb-1 focus-visible:outline-2 focus-visible:outline-primary-container" href="/vault">VAULT</Link>
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors pb-1 focus-visible:outline-2 focus-visible:outline-primary-container" href="/streak">STREAK</Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="w-10 h-10 rounded-full bg-surface-variant border border-outline flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors cursor-pointer" role="button" aria-label="User profile">
              <User className="h-5 w-5" />
            </div>
          </div>
        </header>

        <ClientWrapper>{children}</ClientWrapper>

        <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 pb-6 bg-surface-container-highest/90 backdrop-blur-xl border-t-2 border-surface-variant z-50 shadow-neo-dark-bottom">
          <Link href="/" className="flex flex-col items-center justify-center text-primary-container bg-surface-container-low shadow-[4px_4px_0px_0px_#d6ef35] border border-primary-container p-3 min-w-[64px]">
            <LayoutDashboard className="h-5 w-5 mb-1" />
            <span className="font-label-caps text-[10px] uppercase tracking-wider">Home</span>
          </Link>
          
          <Link href="/deposit" className="flex flex-col items-center justify-center text-on-surface-variant p-3 min-w-[64px] hover:text-secondary transition-colors">
            <PlusCircle className="h-5 w-5 mb-1" />
            <span className="font-label-caps text-[10px] uppercase tracking-wider">Deposit</span>
          </Link>
          
          <Link href="/vault" className="flex flex-col items-center justify-center text-on-surface-variant p-3 min-w-[64px] hover:text-secondary transition-colors">
            <Lock className="h-5 w-5 mb-1" />
            <span className="font-label-caps text-[10px] uppercase tracking-wider">Vault</span>
          </Link>
          
          <Link href="/streak" className="flex flex-col items-center justify-center text-on-surface-variant p-3 min-w-[64px] hover:text-secondary transition-colors">
            <Trophy className="h-5 w-5 mb-1" />
            <span className="font-label-caps text-[10px] uppercase tracking-wider">Streak</span>
          </Link>
        </nav>
        </ThemeProvider>
      </body>
    </html>
  );
}