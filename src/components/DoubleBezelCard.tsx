import type { ReactNode } from 'react';

interface DoubleBezelCardProps {
  children: ReactNode;
  className?: string;
  outerClass?: string;
}

export default function DoubleBezelCard({ children, className = '', outerClass = '' }: DoubleBezelCardProps) {
  return (
    <div className={`p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 ${outerClass}`}>
      <div className={`rounded-[calc(2rem-1px)] bg-[#0A0A0A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${className}`}>
        {children}
      </div>
    </div>
  );
}
