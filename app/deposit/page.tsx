'use client';

import { useState } from 'react';
import { SUPPORTED_TOKEN } from '@/contracts';
import { trackEvent } from '@/utils/analytics';
import { useDeposit, useUserData } from '@/hooks/useVault';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import AppKitButton from '@/components/AppKitButton';

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

  return (
    <div className="page-width flex flex-col gap-gutter pt-stack-md">
      <section className="px-gutter">
        <h2 className="font-sans text-heading-lg text-white tracking-tight">Add funds</h2>
        <p className="font-sans text-body-sm text-on-surface-variant mt-2 max-w-xl">
          Deposit {SUPPORTED_TOKEN.symbol} into your high-yield vault to maintain your streak and grow your wealth.
        </p>
      </section>

      <div className="mx-gutter card--elevated rounded-xl p-6 flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-5 pointer-events-none" />

        {!isConnected ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-on-surface-variant">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M12 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1" fill="currentColor"/>
            </svg>
            <h3 className="font-sans text-heading-md text-white">Connect wallet to deposit</h3>
            <p className="text-on-surface-variant font-sans text-body-sm max-w-sm mb-4">
              Please connect your MiniPay or Web3 wallet to start saving.
            </p>
            <AppKitButton />
          </div>
        ) : isDepositSuccess ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="w-16 h-16 rounded-xl bg-success/15 border border-success/30 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="#18AC65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-sans text-heading-md text-white">Deposit successful!</p>
            <Link
              href="/"
              className="button button--default theme--outline mt-4"
            >
              Back to dashboard
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {/* Preset amounts */}
            <div className="flex gap-3">
              {['1', '5', '10', '25'].map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePreset(preset)}
                  className={`flex-1 font-mono text-btn-mono rounded-xl border px-4 py-3 transition-all ${
                    depositAmount === preset
                      ? 'bg-secondary text-on-primary border-secondary'
                      : 'bg-surface-container-low text-on-surface-variant border-outline hover:bg-surface-container-high hover:text-white'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>

            {/* Custom amount input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center font-mono text-on-surface-variant text-lg pointer-events-none">$</span>
              <input
                type="number"
                placeholder="Custom amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="w-full bg-surface-container-low border border-outline text-white font-sans text-heading-md p-4 pl-8 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-on-surface-variant/50"
              />
              <span className="absolute inset-y-0 right-4 flex items-center font-mono text-label-mono text-on-surface-variant pointer-events-none">{SUPPORTED_TOKEN.symbol}</span>
            </div>

            {/* Submit button */}
            <button
              onClick={handleDeposit}
              disabled={isDepositing || !depositAmount || Number(depositAmount) <= 0}
              className="button button--default theme--blue w-full disabled:opacity-30 disabled:pointer-events-none"
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
                <span className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C5.59 2 2 5.59 2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2ZM13 11H11V13H9V11H7V9H9V7H11V9H13V11Z" fill="currentColor"/>
                  </svg>
                  Deposit funds
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
