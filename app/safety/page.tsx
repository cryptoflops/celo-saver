'use client';

import ScrollReveal from '@/components/ScrollReveal';
import DoubleBezelCard from '@/components/DoubleBezelCard';
import MagneticButton from '@/components/MagneticButton';

export default function Safety() {
  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#0988F0]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        <ScrollReveal>
          <section className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              Trust
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              Safety & risk
            </h1>
            <p className="font-sans text-[15px] text-white/40 mt-4 max-w-lg mx-auto">
              Transparency about how we handle your funds, the risks involved, and the measures we take to protect you.
            </p>
          </section>
        </ScrollReveal>

        <div className="space-y-6">
          {[
            {
              title: 'Smart contract risk',
              body: 'CeloSaver uses smart contracts to manage deposits, withdrawals, and yield strategies. While all contracts are audited by third-party firms, smart contracts can contain undiscovered vulnerabilities. No audit can guarantee 100% security. We recommend only depositing what you can afford to lose.',
            },
            {
              title: 'Yield variability',
              body: 'The APY displayed on the dashboard is variable and based on current DeFi market conditions. Past performance does not guarantee future returns. Yield rates can go up or down based on protocol performance, market demand, and strategy adjustments.',
            },
            {
              title: 'Non-custodial architecture',
              body: 'CeloSaver never takes custody of your funds. You retain full control of your wallet and your deposited assets at all times. The vault contract allows you to withdraw your funds at any time, subject to on-chain transaction fees.',
            },
            {
              title: 'Stablecoin risks',
              body: 'The vault accepts cUSD and cEUR — Celo-based stablecoins pegged to the US Dollar and Euro respectively. These pegs are maintained by the Celo protocol and can depeg under extreme market conditions. CeloSaver does not guarantee stablecoin peg stability.',
            },
            {
              title: 'Audits & security',
              body: 'All CeloSaver smart contracts have undergone third-party security audits. Audit reports are publicly available for review. We follow responsible disclosure practices for any vulnerabilities discovered after deployment.',
            },
            {
              title: 'Your responsibilities',
              body: 'You are responsible for securing your wallet credentials and private keys. CeloSaver cannot recover lost keys or reverse transactions. Always verify contract addresses and transaction details before signing.',
            },
          ].map((item) => (
            <ScrollReveal key={item.title}>
              <DoubleBezelCard>
                <div className="p-8">
                  <h3 className="font-sans text-lg text-white mb-3">{item.title}</h3>
                  <p className="font-sans text-[14px] text-white/40 leading-relaxed">{item.body}</p>
                </div>
              </DoubleBezelCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <section className="text-center py-24">
            <p className="font-sans text-[13px] text-white/30 max-w-lg mx-auto mb-6">
              This page provides a summary of key risks. It is not exhaustive. Always do your own research before depositing funds into any DeFi protocol.
            </p>
            <MagneticButton href="/faq" variant="outline">View FAQ</MagneticButton>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
