import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Streak | CeloSaver',
};

export default function StreakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
