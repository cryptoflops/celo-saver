'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function Privacy() {
  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-24">
        <ScrollReveal>
          <section className="mb-16">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              Legal
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              Privacy policy
            </h1>
            <p className="font-sans text-[15px] text-white/40 mt-4">Last updated: July 2026</p>
          </section>
        </ScrollReveal>

        <div className="space-y-8 font-sans text-[14px] text-white/50 leading-relaxed">
          <p>CeloSaver (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains how we handle your information when you use our save-to-earn application.</p>

          <h2 className="text-white text-lg mt-8 mb-3">Information we collect</h2>
          <p>We collect minimal information necessary to provide the service:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Your wallet address (public on the blockchain)</li>
            <li>Transaction data related to deposits and withdrawals (public on-chain)</li>
            <li>Basic usage analytics to improve the application</li>
          </ul>
          <p className="mt-3">We do not collect personal identifying information such as your name, email address, IP address, or device identifiers.</p>

          <h2 className="text-white text-lg mt-8 mb-3">How we use your information</h2>
          <p>Your wallet address and transaction data are used solely to operate the application — processing deposits, calculating yields, and managing streak mechanics. Analytics data helps us understand usage patterns and improve the user experience.</p>

          <h2 className="text-white text-lg mt-8 mb-3">Data storage and security</h2>
          <p>All transaction data exists on the Celo blockchain and is publicly verifiable. CeloSaver does not store private keys, seed phrases, or any sensitive wallet information. Smart contract interactions are processed entirely on-chain.</p>

          <h2 className="text-white text-lg mt-8 mb-3">Third-party services</h2>
          <p>CeloSaver integrates with Reown AppKit for wallet connections. Please refer to Reown&apos;s privacy policy for information on how they handle connection data. We also use Cloudflare for hosting and content delivery.</p>

          <h2 className="text-white text-lg mt-8 mb-3">Changes to this policy</h2>
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.</p>

          <h2 className="text-white text-lg mt-8 mb-3">Contact</h2>
          <p>Questions about this privacy policy can be directed to the project repository on GitHub.</p>
        </div>
      </div>
    </div>
  );
}
