'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function Terms() {
  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-24">
        <ScrollReveal>
          <section className="mb-16">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              Legal
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              Terms of service
            </h1>
            <p className="font-sans text-[15px] text-white/40 mt-4">Last updated: July 2026</p>
          </section>
        </ScrollReveal>

        <div className="space-y-8 font-sans text-[14px] text-white/50 leading-relaxed">
          <p>By using CeloSaver (&ldquo;the application&rdquo;), you agree to these terms of service. If you do not agree, do not use the application.</p>

          <h2 className="text-white text-lg mt-8 mb-3">Use of service</h2>
          <p>CeloSaver is a non-custodial save-to-earn application built on the Celo blockchain. You retain full control of your funds at all times. The application provides a user interface for interacting with smart contracts that manage deposit vaults, yield strategies, and streak tracking.</p>

          <h2 className="text-white text-lg mt-8 mb-3">Risks</h2>
          <p>Using CeloSaver involves risks inherent to decentralized finance, including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Smart contract vulnerabilities or exploits</li>
            <li>Stablecoin de-pegging events</li>
            <li>Variable yield rates and potential loss of expected returns</li>
            <li>Network congestion or blockchain re-organizations</li>
            <li>Regulatory uncertainty in your jurisdiction</li>
          </ul>
          <p className="mt-3">You acknowledge these risks and accept that you use the application at your own risk.</p>

          <h2 className="text-white text-lg mt-8 mb-3">No financial advice</h2>
          <p>CeloSaver does not provide financial advice. Any APY projections, yield estimates, or savings goals displayed in the application are for informational purposes only and do not constitute a guarantee of returns.</p>

          <h2 className="text-white text-lg mt-8 mb-3">User responsibilities</h2>
          <p>You are solely responsible for:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Securing your wallet credentials and private keys</li>
            <li>Verifying all transaction details before signing</li>
            <li>Complying with applicable laws in your jurisdiction</li>
            <li>Paying network transaction fees (gas) for all on-chain operations</li>
          </ul>

          <h2 className="text-white text-lg mt-8 mb-3">Limitation of liability</h2>
          <p>CeloSaver is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any losses, damages, or claims arising from your use of the application, including but not limited to losses from smart contract failures, user error, or market conditions.</p>

          <h2 className="text-white text-lg mt-8 mb-3">Changes to terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the application after changes constitutes acceptance of the new terms.</p>
        </div>
      </div>
    </div>
  );
}
