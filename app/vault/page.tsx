'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import DoubleBezelCard from '@/components/DoubleBezelCard';
import MagneticButton from '@/components/MagneticButton';

export default function VaultPage() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-28">
        <ScrollReveal>
          <section className="mb-10">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              Your vault
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              Savings vault
            </h1>
            <p className="font-sans text-[15px] text-white/40 mt-3 max-w-xl">
              The vault holds your deposited stablecoins and deploys them into audited DeFi strategies on Celo. Funds remain liquid — you can withdraw at any time.
            </p>
          </section>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Current APY', value: '12.4%', sub: '+0.2% 7d avg', color: 'secondary', icon: 'M2 12H4L6 8L10 16L14 6L18 14L20 10L22 12' },
            { label: 'Protocol TVL', value: '$4.2M', sub: 'cUSD equivalent', color: 'white', icon: 'M3 7H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V7ZM7 7V5C7 3.34 8.34 2 10 2C11.66 2 13 3.34 13 5V7' },
            { label: 'Available liquidity', value: '$845K', sub: '78% utilization', color: 'white', icon: 'M12 3L4 7V12C4 17 7.5 21.5 12 23C16.5 21.5 20 17 20 12V7L12 3Z' },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 50}>
              <DoubleBezelCard>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/30">
                      <path d={item.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/30">{item.label}</span>
                  </div>
                  <div className={`font-sans text-3xl tracking-tight mb-1 ${item.color === 'secondary' ? 'text-secondary' : 'text-white'}`}>
                    {item.value}
                  </div>
                  <p className="font-sans text-[12px] text-white/30">{item.sub}</p>
                </div>
              </DoubleBezelCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Actions */}
        <ScrollReveal delay={100}>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/deposit" className="flex-1">
              <span className="button button--default theme--blue w-full hover:scale-[1.03] active:scale-[0.97] inline-flex justify-between">
                Deposit funds
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
            <button
              onClick={() => setShowWithdrawModal(true)}
              className="button button--default theme--outline flex-1 hover:scale-[1.03] active:scale-[0.97] inline-flex justify-between"
            >
              Withdraw
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </ScrollReveal>

        {/* Recent activity */}
        <ScrollReveal delay={200}>
          <DoubleBezelCard className="mt-6">
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5">
              <h3 className="font-sans text-[15px] text-white">Recent activity</h3>
              <button className="font-sans text-[12px] text-secondary hover:text-white transition-colors">View all</button>
            </div>
            <div className="overflow-y-auto no-scrollbar max-h-[300px] p-4">
              {[
                { label: 'Deposit processed', time: 'Today, 14:32 UTC', value: '+ 500 cUSD', type: 'deposit', tx: '0x4a...f92' },
                { label: 'Streak multiplier active', time: 'Yesterday, 09:00 UTC', value: '1.5x Boost', type: 'streak', tx: 'Applied to yield' },
                { label: 'Deposit processed', time: 'Oct 24, 11:15 UTC', value: '+ 1,250 cUSD', type: 'deposit', tx: '0x8b...2c1' },
                { label: 'Yield distributed', time: 'Oct 21, 00:00 UTC', value: '+ 42.80 cUSD', type: 'yield', tx: 'Auto-compounded' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-white/[0.03] cursor-default">
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      item.type === 'streak' ? 'bg-[#FFB800]/10 text-[#FFB800]' : 'bg-secondary/10 text-secondary'
                    }`}>
                      {item.type === 'deposit' && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 3V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                      {item.type === 'streak' && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M5 13L8 7H5L7 2L11 8H8.5L10 13H5Z" fill="currentColor"/>
                        </svg>
                      )}
                      {item.type === 'yield' && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M1 8H3L5 4L8 12L11 6L13 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="font-sans text-[13px] text-white leading-tight">{item.label}</div>
                      <div className="font-sans text-[11px] text-white/30">{item.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-sans text-[13px] text-white/80">{item.value}</div>
                    <div className="font-sans text-[10px] text-white/20">{item.tx}</div>
                  </div>
                </div>
              ))}
            </div>
          </DoubleBezelCard>
        </ScrollReveal>

        {/* Withdraw Modal */}
        {showWithdrawModal && (
          <div
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="withdraw-modal-title"
            onClick={() => setShowWithdrawModal(false)}
            onKeyDown={(e) => e.key === 'Escape' && setShowWithdrawModal(false)}
            tabIndex={-1}
          >
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
              <h3 id="withdraw-modal-title" className="font-sans text-lg text-white mb-2">Withdraw funds</h3>
              <p className="font-sans text-[13px] text-white/40 mb-6">
                Enter the amount to withdraw. Funds are sent directly to your connected wallet.
              </p>
              <input
                type="number"
                placeholder="0.00"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                className="w-full bg-white/5 border border-white/10 text-white font-sans text-lg p-4 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-white/10 mb-6"
                autoFocus
              />
              <div className="flex gap-3">
                <button
                  onClick={() => setShowWithdrawModal(false)}
                  className="button button--default theme--outline flex-1 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Cancel
                </button>
                <button
                  className="button button--default theme--blue flex-1 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-30 disabled:pointer-events-none"
                  disabled={!withdrawAmount || Number(withdrawAmount) <= 0}
                  onClick={() => {
                    alert(`Withdrawal of ${withdrawAmount} requested. (Demo)`);
                    setShowWithdrawModal(false);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
