'use client';

import ScrollReveal from '@/components/ScrollReveal';
import DoubleBezelCard from '@/components/DoubleBezelCard';
import ExplainerStep from '@/components/ExplainerStep';
import MagneticButton from '@/components/MagneticButton';
import FAQItem from '@/components/FAQItem';

export default function HowItWorks() {
  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0988F0]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <ScrollReveal>
          <section className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              Guide
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              How CeloSaver works
            </h1>
            <p className="font-sans text-[15px] text-white/40 mt-4 max-w-lg mx-auto">
              From your first deposit to earning compounded returns — here&apos;s everything you need to know.
            </p>
          </section>
        </ScrollReveal>

        {/* Steps */}
        <ExplainerStep
          number="01"
          title="Connect your wallet"
          description="CeloSaver works with any wallet on the Celo network — including MiniPay, which is built right into the Celo mobile wallet. No seed phrases to manage if you&apos;re using MiniPay. Just tap and connect."
        >
          <DoubleBezelCard>
            <div className="p-8 flex items-center justify-center h-48">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M12 10V14M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </DoubleBezelCard>
        </ExplainerStep>

        <ExplainerStep
          number="02"
          title="Deposit stablecoins"
          description="Deposit cUSD or cEUR into the CeloSaver vault. There are no minimum deposit requirements and no lock-up periods — your funds remain accessible. Each deposit resets your streak timer, so consistency matters."
          reversed
        >
          <DoubleBezelCard>
            <div className="p-8 flex items-center justify-center h-48">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
              </svg>
            </div>
          </DoubleBezelCard>
        </ExplainerStep>

        <ExplainerStep
          number="03"
          title="Earn yield automatically"
          description="Your deposited funds are deployed into audited yield strategies on Celo. The vault generates returns that are compounded automatically. The base APY is updated regularly based on market conditions and strategy performance."
        >
          <DoubleBezelCard>
            <div className="p-8 flex items-center justify-center h-48">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20">
                <path d="M2 12H4L6 8L10 16L14 6L18 14L20 10L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </DoubleBezelCard>
        </ExplainerStep>

        <ExplainerStep
          number="04"
          title="Build your streak"
          description="Make at least one deposit every 3 days to maintain your streak. Longer streaks unlock higher yield multipliers: 1.2x at 3 days, 1.5x at 7 days, 2x at 14 days, and 3x at 30 days. Miss a window and your streak resets."
          reversed
        >
          <DoubleBezelCard>
            <div className="p-8 flex items-center justify-center h-48">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20">
                <path d="M7 18L10 11H6L8 2L13 9H9.5L12 18H7Z" fill="currentColor"/>
              </svg>
            </div>
          </DoubleBezelCard>
        </ExplainerStep>

        <ExplainerStep
          number="05"
          title="Withdraw anytime"
          description="You can withdraw your deposited funds at any time — there are no lock-ups. Withdrawals are processed on-chain and sent directly to your wallet. Note that withdrawing reduces your active balance and may affect your streak."
        >
          <DoubleBezelCard>
            <div className="p-8 flex items-center justify-center h-48">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/20">
                <path d="M21 12H7M7 12L11 8M7 12L11 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </DoubleBezelCard>
        </ExplainerStep>

        {/* FAQs */}
        <ScrollReveal>
          <section className="mt-32 max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
                Common questions
              </span>
              <h2 className="font-sans text-3xl text-white tracking-tight">Frequently asked</h2>
            </div>
            <FAQItem question="What wallets are supported?" answer="CeloSaver works with any wallet on the Celo network, including MiniPay (built into the Celo mobile wallet), MetaMask, and any wallet that supports the Celo chain via WalletConnect or Reown AppKit." />
            <FAQItem question="How is the APY determined?" answer="The APY is generated through DeFi strategies managed by the vault contract. The rate is variable and updated periodically based on market conditions, strategy performance, and protocol yields." />
            <FAQItem question="What happens if my streak resets?" answer="If you don't make a deposit within the streak window (currently 3 days), your streak counter resets to zero. You'll need to rebuild it from day one. Your existing balance and earned yield are not affected." />
            <FAQItem question="Are my funds safe?" answer="The vault contracts are audited by third-party security firms. That said, all DeFi investments carry risk — including smart contract risk and market risk. Only deposit what you can afford to lose. See our Safety & Risk page for full details." />
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={100}>
          <section className="text-center py-24">
            <h2 className="font-sans text-3xl text-white tracking-tight mb-4">Ready to start?</h2>
            <p className="font-sans text-[15px] text-white/40 max-w-md mx-auto mb-8">
              Connect your wallet and make your first deposit in under a minute.
            </p>
            <MagneticButton href="/dashboard" arrow>Open app</MagneticButton>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
