'use client';

import { useState } from 'react';
import { SUPPORTED_TOKEN } from '@/contracts';
import { trackEvent } from '@/utils/analytics';
import { useDeposit, useUserData } from '@/hooks/useVault';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import AppKitButton from '@/components/AppKitButton';
import ScrollReveal from '@/components/ScrollReveal';
import DoubleBezelCard from '@/components/DoubleBezelCard';

export default function DepositPage() {
  const { isConnected } = useAccount();
  const { deposit, isPending: isDepositing, isSuccess: isDepositSuccess } = useDeposit();
  const [depositAmount, setDepositAmount] = useState<string>('');

  const handleDeposit = () => {
    if (!depositAmount || isNaN(Number(depositAmount))) return;
    trackEvent('deposit_initiated', { amount: depositAmount, token: SUPPORTED_TOKEN.symbol });
    deposit(depositAmount);
  };

  const handlePreset = (amount: string) => {
    setDepositAmount(amount);
    trackEvent('preset_selected', { amount });
  };

  const state = !isConnected ? 'disconnected' : isDepositSuccess ? 'success' : 'ready';

  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-28 pb-28">
        <ScrollReveal>
          <section className="mb-10">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              Add funds
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              Make a deposit
            </h1>
            <p className="font-sans text-[15px] text-white/40 mt-3 max-w-md">
              Deposit {SUPPORTED_TOKEN.symbol} into your vault to start earning yield and building your savings streak.
            </p>
          </section>
        </ScrollReveal>

        {state === 'disconnected' && (
          <ScrollReveal delay={100}>
            <DoubleBezelCard>
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/30">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M12 10V14M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h2 className="font-sans text-lg text-white mb-2">Connect your wallet first</h2>
                <p className="font-sans text-[14px] text-white/40 mb-6 max-w-sm mx-auto">
                  You need to connect a wallet before you can deposit funds into your vault.
                </p>
                <AppKitButton />
              </div>
            </DoubleBezelCard>
          </ScrollReveal>
        )}

        {state === 'success' && (
          <ScrollReveal delay={100}>
            <DoubleBezelCard>
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-success/15 border border-success/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-success">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="font-sans text-xl text-white mb-2">Deposit confirmed</h2>
                <p className="font-sans text-[14px] text-white/40 mb-8 max-w-sm mx-auto">
                  Your deposit has been processed and will appear in your vault shortly. Your savings streak has been updated.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/dashboard">
                    <span className="button button--default theme--blue hover:scale-[1.03] active:scale-[0.97] inline-flex">View dashboard</span>
                  </Link>
                  <button
                    onClick={() => { setDepositAmount(''); window.location.reload(); }}
                    className="button button--default theme--outline hover:scale-[1.03] active:scale-[0.97]"
                  >
                    Deposit again
                  </button>
                </div>
              </div>
            </DoubleBezelCard>
          </ScrollReveal>
        )}

        {state === 'ready' && (
          <ScrollReveal delay={100}>
            <DoubleBezelCard>
              <div className="p-6 space-y-6">
                {/* What happens */}
                <div className="text-center border-b border-white/5 pb-5">
                  <p className="font-sans text-[13px] text-white/40 leading-relaxed max-w-sm mx-auto">
                    Your deposit goes into the <strong className="text-white/60">CeloSaver vault</strong> — a smart contract that deploys funds into yield strategies on Celo. You can withdraw anytime.
                  </p>
                </div>

                {/* Preset amounts */}
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/30 block mb-3">Quick amount</span>
                  <div className="flex gap-2">
                    {['1', '5', '10', '25'].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => handlePreset(preset)}
                        className={`flex-1 py-3 rounded-xl border font-mono text-[14px] transition-all duration-300 ${
                          depositAmount === preset
                            ? 'bg-secondary text-on-primary border-secondary'
                            : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom amount */}
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/30 block mb-3">Custom amount</span>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-4 flex items-center font-sans text-white/30 text-lg pointer-events-none">$</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-white font-sans text-xl p-4 pl-8 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-white/10"
                    />
                    <span className="absolute inset-y-0 right-4 flex items-center font-sans text-[13px] text-white/30 pointer-events-none">{SUPPORTED_TOKEN.symbol}</span>
                  </div>
                  <p className="font-sans text-[11px] text-white/20 mt-2">
                    No minimum. Network fee: ~$0.001 on Celo.
                  </p>
                </div>

                {/* Submit */}
                <button
                  onClick={handleDeposit}
                  disabled={isDepositing || !depositAmount || Number(depositAmount) <= 0}
                  className="button button--default theme--blue w-full hover:scale-[1.03] active:scale-[0.97] disabled:opacity-30 disabled:pointer-events-none justify-center"
                >
                  {isDepositing ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                        <path d="M12 2C6.477 2 2 6.477 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Confirm deposit'
                  )}
                </button>
              </div>
            </DoubleBezelCard>
          </ScrollReveal>
        )}

        {/* Explanation cards below */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            {[
              { label: 'No lock-up', desc: 'Withdraw your funds at any time with no penalties.' },
              { label: 'Transparent', desc: 'All transactions are on-chain and fully verifiable.' },
              { label: 'Streak bonus', desc: 'Maintain regular deposits to multiply your yield.' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-sans text-[13px] text-white mb-1">{item.label}</h3>
                <p className="font-sans text-[12px] text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
