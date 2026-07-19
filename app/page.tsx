'use client';

import ScrollReveal from '@/components/ScrollReveal';
import DoubleBezelCard from '@/components/DoubleBezelCard';
import MagneticButton from '@/components/MagneticButton';
import TrustModule from '@/components/TrustModule';

export default function Home() {
  return (
    <div className="min-h-dvh bg-[#050505]">
      {/* Subtle background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#0988F0]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#379DEF]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
        <ScrollReveal>
          <section className="text-center max-w-3xl mx-auto">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-6">
              Save-to-earn on Celo MiniPay
            </span>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] font-[400]">
              Your savings,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#379DEF] via-[#0988F0] to-[#379DEF]/60">
                building on-chain
              </span>
            </h1>
            <p className="font-sans text-[15px] md:text-[17px] text-white/40 max-w-xl mx-auto mt-6 leading-relaxed">
              Deposit stablecoins, earn yield, and unlock higher returns the longer you save.
              Built on Celo and powered by Reown — no gas fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <MagneticButton href="/dashboard" arrow>Start saving</MagneticButton>
              <MagneticButton href="/how-it-works" variant="outline">How it works</MagneticButton>
            </div>
          </section>
        </ScrollReveal>

        {/* Trusted by / Stats */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-24 opacity-40">
            {['Celo', 'MiniPay', 'Reown', 'WalletConnect'].map((name) => (
              <span key={name} className="font-mono text-xs tracking-[0.15em] text-white/60 uppercase">{name}</span>
            ))}
          </div>
        </ScrollReveal>

        {/* How it works preview */}
        <ScrollReveal delay={200}>
          <section className="mt-32">
            <div className="text-center mb-16">
              <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
                How it works
              </span>
              <h2 className="font-sans text-3xl md:text-4xl text-white tracking-tight">Save. Earn. Grow.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: '01', title: 'Deposit', desc: 'Connect your wallet and deposit cUSD or cEUR into the vault. No minimums, no lock-ups.' },
                { step: '02', title: 'Earn yield', desc: 'Your deposited funds generate returns through proven DeFi strategies. APY is updated weekly.' },
                { step: '03', title: 'Build streaks', desc: 'The longer you save without skipping, the higher your yield multiplier grows — up to 3x.' },
              ].map((item) => (
                <DoubleBezelCard key={item.step}>
                  <div className="p-8">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-[#379DEF]">{item.step}</span>
                    <h3 className="font-sans text-xl text-white mt-3 mb-3">{item.title}</h3>
                    <p className="font-sans text-[14px] text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </DoubleBezelCard>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Trust Module */}
        <TrustModule
          items={[
            { label: 'Non-custodial', description: 'You retain full control of your funds at all times. The vault contract manages yield strategies.', icon: 'key' },
            { label: 'Audited contracts', description: 'All smart contracts are audited by third-party security firms. Reports are publicly available.', icon: 'audit' },
            { label: 'Celo ecosystem', description: 'Built on Celo — a carbon-negative, mobile-first blockchain with near-zero transaction fees.', icon: 'globe' },
          ]}
        />

        {/* Final CTA */}
        <ScrollReveal delay={100}>
          <section className="text-center py-24">
            <h2 className="font-sans text-3xl md:text-4xl text-white tracking-tight mb-4">
              Ready to start saving?
            </h2>
            <p className="font-sans text-[15px] text-white/40 max-w-md mx-auto mb-8">
              Connect your MiniPay or any wallet and make your first deposit in under a minute.
            </p>
            <MagneticButton href="/dashboard" arrow>Open app</MagneticButton>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
