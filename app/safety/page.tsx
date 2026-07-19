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
              Trust & transparency
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              Safety & risk
            </h1>
            <p className="font-sans text-[15px] text-white/40 mt-4 max-w-lg mx-auto">
              We believe trust is earned through transparency — not claims. Here&apos;s exactly how your funds are handled and what risks you should know.
            </p>
          </section>
        </ScrollReveal>

        {/* Trust evidence section */}
        <ScrollReveal>
          <DoubleBezelCard>
            <div className="p-8 space-y-8">
              <h2 className="font-sans text-xl text-white">Protocol details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    label: 'Vault contract',
                    value: '0xddBe...324B',
                    full: '0xddBe6c3a59F21E964f26B0EBF617EA579146324B',
                    link: 'https://celoscan.io/address/0xddBe6c3a59F21E964f26B0EBF617EA579146324B',
                  },
                  {
                    label: 'Token contract',
                    value: '0x765D...282a',
                    full: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
                    link: 'https://celoscan.io/address/0x765DE816845861e75A25fCA122bb6898B8B1282a',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group"
                  >
                    <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/40 block mb-1">{item.label}</span>
                    <span className="font-mono text-[13px] text-white/60 group-hover:text-white transition-colors">{item.value}</span>
                    <span className="font-sans text-[11px] text-secondary block mt-1">View on Celo Explorer →</span>
                    <p className="font-mono text-[10px] text-white/10 mt-2 break-all">{item.full}</p>
                  </a>
                ))}
              </div>
            </div>
          </DoubleBezelCard>
        </ScrollReveal>

        {/* Risk categories */}
        <div className="mt-6 space-y-4">
          {[
            {
              title: 'Smart contract risk',
              body: 'All CeloSaver smart contracts are deployed on the Celo mainnet and are fully audited. However, no smart contract can be guaranteed to be free of vulnerabilities. We follow responsible disclosure practices — if you discover a vulnerability, please report it via our GitHub repository.',
              extra: 'View contracts: celoscan.io/address/0xddBe...324B',
            },
            {
              title: 'Yield variability',
              body: 'The displayed APY (currently 12.4%) is based on current DeFi market conditions and strategy performance. This rate is variable and can go up or down. The yield is generated through automated DeFi strategies managed by the vault contract. Past performance is not indicative of future returns.',
              extra: null,
            },
            {
              title: 'Non-custodial architecture',
              body: 'CeloSaver is fully non-custodial. You retain complete control of your wallet and funds at all times. The vault contract cannot move your funds without your explicit signed transaction. You can withdraw at any time — there are no lock-up periods.',
              extra: null,
            },
            {
              title: 'Stablecoin risk',
              body: 'The vault accepts cUSD and cEUR — stablecoins pegged to the US Dollar and Euro respectively. These are maintained by the Celo protocol through the Mento stability mechanism. While these pegs have historically held, they can depeg under extreme market conditions.',
              extra: 'Learn about Celo stablecoins: docs.celo.org/protocol/stability',
            },
            {
              title: 'Your responsibilities',
              body: 'You are responsible for securing your wallet credentials, verifying transaction details before signing, and complying with applicable laws in your jurisdiction. CeloSaver cannot recover lost keys, reverse transactions, or refund gas fees.',
              extra: null,
            },
          ].map((item) => (
            <ScrollReveal key={item.title}>
              <DoubleBezelCard>
                <div className="p-6">
                  <h3 className="font-sans text-[15px] text-white mb-3">{item.title}</h3>
                  <p className="font-sans text-[14px] text-white/40 leading-relaxed">{item.body}</p>
                  {item.extra && (
                    <p className="font-sans text-[12px] text-white/20 mt-3 italic">{item.extra}</p>
                  )}
                </div>
              </DoubleBezelCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <section className="text-center py-24">
            <h2 className="font-sans text-2xl text-white tracking-tight mb-2">Still have questions?</h2>
            <p className="font-sans text-[14px] text-white/40 mb-8">Check our FAQ or reach out on GitHub.</p>
            <div className="flex gap-4 justify-center">
              <MagneticButton href="/faq" variant="outline">View FAQ</MagneticButton>
              <MagneticButton href="https://github.com/cryptoflops/celo-saver" variant="outline" arrow>GitHub</MagneticButton>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
