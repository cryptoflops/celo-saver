import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vault | CeloSaver',
};

export default function VaultLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
