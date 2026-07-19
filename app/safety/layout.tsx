import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safety & Risk | CeloSaver',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
