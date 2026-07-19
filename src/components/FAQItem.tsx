'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-lg group"
        aria-expanded={open}
      >
        <span className="font-sans text-[15px] text-white/80 group-hover:text-white transition-colors pr-4">
          {question}
        </span>
        <span className={`shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? 'rotate-45 bg-white/10' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/40"/>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? 'max-h-80 pb-5' : 'max-h-0'}`}
      >
        <p className="font-sans text-[14px] text-white/40 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
