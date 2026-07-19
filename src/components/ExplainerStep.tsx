import ScrollReveal from './ScrollReveal';
import type { ReactNode } from 'react';

interface ExplainerStepProps {
  number: string;
  title: string;
  description: string;
  children?: ReactNode;
  reversed?: boolean;
}

export default function ExplainerStep({ number, title, description, children, reversed }: ExplainerStepProps) {
  return (
    <ScrollReveal>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-16 ${reversed ? '' : ''}`}>
        <div className={`${reversed ? 'md:order-2' : ''}`}>
          <span className="font-mono text-[11px] tracking-[0.15em] text-white/20">{number}</span>
          <h3 className="font-sans text-2xl md:text-3xl text-white tracking-tight mt-3 mb-4">{title}</h3>
          <p className="font-sans text-[15px] text-white/40 leading-relaxed max-w-md">{description}</p>
        </div>
        <div className={`${reversed ? 'md:order-1' : ''}`}>
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
}
