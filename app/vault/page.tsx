'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VaultPage() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  return (
    <div className="page-width flex flex-col gap-gutter pt-stack-md">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-stack-sm px-gutter">
        <div>
          <h2 className="font-sans text-heading-lg text-white tracking-tight">Savings vault</h2>
          <p className="font-sans text-body-sm text-on-surface-variant mt-2 max-w-xl">
            High-yield liquidity pool optimized for steady growth. Deep transparency, hard-coded security.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center font-mono text-label-mono text-secondary bg-secondary/10 border border-secondary/20 rounded-xl px-3 py-1.5">
            Status: active
          </span>
        </div>
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-gutter">
        {/* APR */}
        <div className="card--elevated rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/5 blur-2xl rounded-full group-hover:bg-secondary/10 transition-colors duration-500 pointer-events-none" />
          <span className="font-mono text-label-mono uppercase tracking-wider text-on-surface-variant block mb-4">
            Current APR
          </span>
          <div className="font-sans text-display text-secondary tracking-tight">
            12.4<span className="font-sans text-heading-md">%</span>
          </div>
          <div className="mt-3 font-mono text-label-mono text-success flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L9.05 5.05L13 5.5L10 8.5L10.9 13L7 10.8L3.1 13L4 8.5L1 5.5L4.95 5.05L7 1Z" fill="#18AC65"/>
            </svg>
            +0.2% 7d avg
          </div>
        </div>

        {/* TVL */}
        <div className="card--elevated rounded-xl p-6">
          <span className="font-mono text-label-mono uppercase tracking-wider text-on-surface-variant block mb-4">
            Protocol TVL
          </span>
          <div className="font-sans text-heading-md text-white tracking-tight">
            4,204,500
          </div>
          <div className="font-mono text-label-mono text-on-surface-variant mt-1">
            cUSD Equivalent
          </div>
        </div>

        {/* Liquidity */}
        <div className="card--elevated rounded-xl p-6 relative group">
          <span className="font-mono text-label-mono uppercase tracking-wider text-on-surface-variant block mb-4 flex items-center gap-2">
            Available liquidity
            <span className="relative inline-flex cursor-help">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-on-surface-variant/50 hover:text-on-surface-variant transition-colors">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M6.5 6.5C6.5 5.67 7.17 5 8 5C8.83 5 9.5 5.67 9.5 6.5C9.5 7.5 8 8 8 8V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <circle cx="8" cy="11.5" r="0.5" fill="currentColor"/>
              </svg>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-surface-container-high text-white font-sans text-body-sm rounded-xl border border-outline opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                Funds currently available for withdrawal. High utilization means more funds are generating yield.
              </div>
            </span>
          </span>
          <div className="font-sans text-heading-md text-white tracking-tight">
            $845,200
          </div>
          <div className="w-full h-1.5 bg-surface-container-high rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-secondary rounded-full" style={{ width: '78%' }} />
          </div>
          <div className="font-mono text-label-mono text-on-surface-variant text-right mt-1">
            78% utilization
          </div>
        </div>
      </div>

      {/* Actions + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter px-gutter">
        {/* Action Buttons */}
        <div className="flex flex-col gap-gutter">
          <Link
            href="/deposit"
            className="button button--default theme--blue w-full flex items-center justify-between"
          >
            <span>Deposit funds</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <button
            onClick={() => setShowWithdrawModal(true)}
            className="button button--default theme--outline w-full flex items-center justify-between"
          >
            <span>Withdraw</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-2 card--elevated rounded-xl max-h-[400px] flex flex-col">
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-outline">
            <h3 className="font-sans text-heading-md text-white">Recent activity</h3>
            <button className="font-mono text-label-mono text-secondary hover:text-white transition-colors">
              View all
            </button>
          </div>
          <div className="overflow-y-auto no-scrollbar flex-1 space-y-1 p-4">
            {[
              { icon: 'deposit', label: 'Deposit processed', time: 'Today, 14:32 UTC', amount: '+ 500 cUSD', amountColor: 'text-success', tx: '0x4a...f92' },
              { icon: 'streak', label: 'Streak multiplier active', time: 'Yesterday, 09:00 UTC', amount: '1.5x Boost', amountColor: 'text-streak', tx: 'Applied to yield' },
              { icon: 'deposit', label: 'Deposit processed', time: 'Oct 24, 11:15 UTC', amount: '+ 1,250 cUSD', amountColor: 'text-success', tx: '0x8b...2c1' },
              { icon: 'yield', label: 'Weekly yield distributed', time: 'Oct 21, 00:00 UTC', amount: '+ 42.80 cUSD', amountColor: 'text-success', tx: 'Auto-compounded' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-surface-container-low cursor-default">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    item.icon === 'streak'
                      ? 'bg-streak/10 border-streak/20 text-streak'
                      : 'bg-secondary/10 border-secondary/20 text-secondary'
                  }`}>
                    {item.icon === 'deposit' && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M3 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                    {item.icon === 'streak' && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M8 15L10 11H6L9 4L13 10H9.5L11 15H8Z" fill="currentColor"/>
                      </svg>
                    )}
                    {item.icon === 'yield' && (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M2 9H4L6 4L10 13L12 7L14 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="font-sans text-body-sm text-white leading-tight">{item.label}</div>
                    <div className="font-mono text-caption text-on-surface-variant">{item.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-mono text-label-mono ${item.amountColor}`}>{item.amount}</div>
                  <div className="font-mono text-caption text-on-surface-variant">{item.tx}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="withdraw-modal-title"
          onKeyDown={(e) => e.key === 'Escape' && setShowWithdrawModal(false)}
          tabIndex={-1}
          onClick={() => setShowWithdrawModal(false)}
        >
          <div className="card--elevated rounded-xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <h3 id="withdraw-modal-title" className="font-sans text-heading-md text-white mb-2">Withdraw funds</h3>
            <p className="font-sans text-body-sm text-on-surface-variant mb-6">
              Enter the amount of cUSD you want to withdraw to your wallet. You currently have ~500.00 cUSD available.
            </p>

            <input
              type="number"
              placeholder="0.00"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              className="w-full bg-surface-container-low border border-outline text-white font-sans text-heading-md p-4 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-on-surface-variant/50 mb-6"
              autoFocus
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowWithdrawModal(false)}
                className="button button--default theme--outline flex-1"
              >
                Cancel
              </button>
              <button
                className="button button--default theme--blue flex-1 disabled:opacity-30 disabled:pointer-events-none"
                disabled={!withdrawAmount || Number(withdrawAmount) <= 0}
                onClick={() => {
                  alert(`Withdrawal of ${withdrawAmount} requested! (Demo)`);
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
  );
}
