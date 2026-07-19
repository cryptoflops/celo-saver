import ScrollReveal from './ScrollReveal';

interface TrustModuleProps {
  title?: string;
  items: { label: string; description: string; icon: 'shield' | 'audit' | 'key' | 'chart' | 'lock' | 'globe' }[];
  className?: string;
}

const icons = {
  shield: <><path d="M12 3L4 7V12C4 17 7.5 21.5 12 23C16.5 21.5 20 17 20 12V7L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></>,
  audit: <><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></>,
  key: <><path d="M21 2L15 8M17 10L11 16M9 13L7 15L9 17L5 21L3 19L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/></>,
  chart: <><path d="M3 17L7 13L11 17L17 9M17 9H13M17 9V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 11V7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7V11" stroke="currentColor" strokeWidth="1.5" fill="none"/></>,
  globe: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M2 12H22M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></>,
};

export default function TrustModule({ title = 'Trust & security', items, className = '' }: TrustModuleProps) {
  return (
    <ScrollReveal className={className}>
      <div className="py-24">
        {title && (
          <div className="mb-16 text-center">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              Trust
            </span>
            <h2 className="font-sans text-3xl md:text-4xl text-white tracking-tight">{title}</h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="p-[1px] rounded-2xl bg-gradient-to-b from-white/8 to-transparent">
              <div className="rounded-[calc(2rem-1px)] bg-[#0A0A0A] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/60">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {icons[item.icon]}
                  </svg>
                </div>
                <h3 className="font-sans text-sm font-medium text-white mb-2">{item.label}</h3>
                <p className="font-sans text-sm text-white/40 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
