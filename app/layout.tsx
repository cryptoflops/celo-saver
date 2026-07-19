import type { Metadata } from 'next';
import { Geist, JetBrains_Mono } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import { ThemeProvider } from '@/components/theme-provider';
import ModeLayout from '@/components/ModeLayout';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'CeloSaver | Save-to-Earn on MiniPay',
  description: 'Save stablecoins, earn yield, and build on-chain streaks with CeloSaver on Celo MiniPay.',
  icons: {
    icon: '/seo/favicon.svg',
    apple: '/seo/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050505] text-white min-h-dvh relative overflow-x-hidden antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-white focus:text-[#050505] focus:rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 font-sans text-sm"
        >
          Skip to content
        </a>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientWrapper>
            <ModeLayout>{children}</ModeLayout>
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
