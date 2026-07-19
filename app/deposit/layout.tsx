import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deposit | CeloSaver',
};

export default function DepositLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
