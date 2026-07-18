'use client';

import { useState } from 'react';
import { SUPPORTED_TOKEN } from '@/contracts';
import { trackEvent } from '@/utils/analytics';
import { useDeposit, useUserData } from '@/hooks/useVault';
import { useAccount } from 'wagmi';
import { CheckCircle2, Loader2, PlusCircle, Target } from 'lucide-react';
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
    <main className="relative z-10 w-full max-w-7xl mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-lg mt-8">
      <div className="flex flex-col gap-2 relative z-10">
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Add Funds</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-xl">
          Deposit {SUPPORTED_TOKEN.symbol} into your high-yield vault to maintain your streak and grow your wealth.
        </p>
      </div>

      <div className="bg-surface-container border border-surface-variant p-6 rounded-xl shadow-lg flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container rounded-full blur-[80px] opacity-10"></div>
        
        {!isConnected ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4 text-center z-10">
            <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-on-surface-variant" />
            </div>
            <h3 className="font-headline-md text-primary">Connect Wallet to Deposit</h3>
            <p className="text-on-surface-variant font-body-md max-w-sm mb-4">
              Please connect your MiniPay or Web3 wallet to start saving.
            </p>
            <AppKitButton />
          </div>
        ) : isDepositSuccess ? (
          <div className="flex flex-col items-center gap-4 py-8 z-10">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center border border-success/50">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <p className="text-primary font-headline-md text-2xl">Deposit Successful!</p>
            <Link 
              href="/"
              className="mt-4 bg-surface-bright text-on-surface border border-outline px-8 py-3 uppercase font-label-caps tracking-widest hover:bg-surface-variant transition-colors rounded-lg"
            >
              Back to Dashboard
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6 z-10">
            <div className="flex gap-3">
              {['1', '5', '10'].map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePreset(preset)}
                  className={`flex-1 py-3 font-label-caps text-label-caps border rounded-lg transition-all ${
                    depositAmount === preset 
                      ? 'bg-primary-container text-on-primary-container border-primary-container ring-2 ring-primary-container/30' 
                      : 'bg-surface-bright text-on-surface border-outline-variant hover:bg-surface-variant'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-on-surface-variant font-display-sm">$</span>
              </div>
              <input 
                type="number" 
                placeholder="Custom Amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="w-full bg-surface-bright border border-outline-variant text-primary p-4 pl-10 rounded-lg font-display-sm focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-shadow"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <span className="text-on-surface-variant font-label-caps">{SUPPORTED_TOKEN.symbol}</span>
              </div>
            </div>
            
            <button 
              onClick={handleDeposit}
              disabled={isDepositing || !depositAmount || Number(depositAmount) <= 0}
              className="mt-2 relative bg-primary-container text-on-primary-container font-headline-sm px-8 py-4 uppercase flex justify-center items-center gap-3 rounded-lg shadow-[0_4px_14px_0_rgba(214,239,53,0.39)] hover:shadow-[0_6px_20px_rgba(214,239,53,0.23)] hover:bg-[#c4dc30] transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none w-full font-bold"
            >
              {isDepositing ? (
                <>
                  <Loader2 className="animate-spin w-6 h-6" />
                  Processing...
                </>
              ) : (
                <>
                  <PlusCircle className="w-6 h-6" />
                  Deposit Funds
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
