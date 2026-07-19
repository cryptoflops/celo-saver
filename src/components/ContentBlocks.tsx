'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="card--elevated rounded-xl p-6 flex gap-5 items-start">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-mono text-label-mono text-secondary mb-1">{number}</div>
        <h3 className="font-sans text-heading-md text-white mb-2">{title}</h3>
        <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface TrustBadgeProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function TrustBadge({ icon, title, description }: TrustBadgeProps) {
  return (
    <div className="bg-surface-container-low border border-outline rounded-xl p-5 flex flex-col gap-3">
      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
        {icon}
      </div>
      <h4 className="font-sans text-heading-sm text-white">{title}</h4>
      <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="border-b border-outline pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
      <h3 className="font-sans text-heading-sm text-white mb-3">{question}</h3>
      <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">{answer}</p>
    </div>
  );
}

interface CtaBandProps {
  heading: string;
  description: string;
  href: string;
  label: string;
}

export function CtaBand({ heading, description, href, label }: CtaBandProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-banner border border-outline p-8 md:p-12 flex flex-col items-center text-center gap-5">
      <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/5 blur-[80px] rounded-full pointer-events-none" />
      <h2 className="font-sans text-heading-lg md:text-heading-xl text-white max-w-xl">{heading}</h2>
      <p className="font-sans text-body-sm text-on-surface-variant max-w-lg">{description}</p>
      <Link href={href} className="button button--default theme--blue mt-2">
        {label}
      </Link>
    </div>
  );
}
