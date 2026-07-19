'use client';

import type { ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  arrow?: boolean;
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  arrow = false,
  disabled = false,
}: MagneticButtonProps) {
  const base =
    'group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-btn-mono tracking-tight transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50';

  const variants = {
    primary: 'bg-white text-[#050505] hover:bg-white/90',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    ghost: 'text-white/60 hover:text-white hover:bg-white/5',
  };

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="inline-flex w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 shrink-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
