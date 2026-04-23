'use client';

import { useState } from 'react';
import AppKitButton from '@/components/AppKitButton';
import { SUPPORTED_TOKEN } from '@/contracts';
import { trackEvent } from '@/utils/analytics';
import { useDeposit, useUserData, useApproveVault } from '@/hooks/useVault';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isConnected } = useAccount();
  const { data: userData } = useUserData();
  const { deposit, isPending: isDepositing, isSuccess: isDepositSuccess } = useDeposit();
  const { approve, isPending: isApproving } = useApproveVault();

  const [depositAmount, setDepositAmount] = useState<string>('');

  const currentStreak = (userData as any[])?.[1] ? Number((userData as any[])[1]) : 0;
  const vaultBalance = (userData as any[])?.[0] ? Number((userData as any[])[0]) / 1e18 : 0;

  const handleDeposit = () => {
    if (!depositAmount || isNaN(Number(depositAmount))) return;
    
    trackEvent('deposit_initiated', { amount: depositAmount, token: SUPPORTED_TOKEN.symbol });
    
    // In a real flow, we'd wait for approve success before deposit, 
    // but for this PoC UX, we can trigger approve first, then deposit.
    // For simplicity of UI in this demo:
    deposit(depositAmount);
  };

  const handlePreset = (amount: string) => {
    setDepositAmount(amount);
    trackEvent('preset_selected', { amount });
  };

  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-lg">
      <section className="flex flex-col items-center justify-center py-8">
        <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-stack-sm">Total Savings</h2>
        <div className="relative">
          <h1 className="font-display-xl text-display-xl text-primary text-center">
            <span className="text-secondary">$</span>{vaultBalance > 0 ? vaultBalance.toFixed(2) : '0.00'}
          </h1>
          <div className="absolute -right-12 -top-4 w-16 h-16 bg-primary-container rounded-full blur-[40px] opacity-20"></div>
        </div>
        <div className="mt-stack-md flex gap-4">
          <span className="bg-secondary-container/10 text-secondary border border-secondary/30 px-3 py-1 font-label-caps text-label-caps rounded-DEFAULT flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +5.2% APY
          </span>
          <span className="bg-surface-variant text-on-surface-variant px-3 py-1 font-label-caps text-label-caps rounded-DEFAULT border border-outline-variant">
            {SUPPORTED_TOKEN.symbol}
          </span>
        </div>
        <div className="mt-8 flex justify-center">
          <AppKitButton />
        </div>
      </section>

      {/* Streak moved up for MiniPay mobile view immediate impact */}
      <div className="bg-surface-container border border-surface-variant p-6 rounded-DEFAULT neo-shadow-dark flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <span className="material-symbols-outlined text-outline-variant text-sm">info</span>
        </div>
        <div className="w-16 h-16 bg-surface-bright rounded-full flex items-center justify-center mb-4 border border-outline-variant neo-shadow-dark">
          <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
        </div>
        <h3 className="font-headline-lg text-headline-lg text-primary mb-1">{currentStreak} <span className="text-headline-md text-on-surface-variant">Days</span></h3>
        <p className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">Saving Streak</p>
      </div>

      <div className="bg-surface-container border border-surface-variant p-6 rounded-DEFAULT neo-shadow-dark flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container rounded-full blur-[80px] opacity-10"></div>
        <div className="flex flex-col gap-2 relative z-10">
          <h3 className="font-headline-md text-headline-md text-primary">Grow Your Wealth</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Deposit {SUPPORTED_TOKEN.symbol} into your high-yield vault and maintain your streak.</p>
        </div>

        {isDepositSuccess ? (
          <div className="flex flex-col items-center gap-4 py-4 z-10">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center border border-secondary/50">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
            </div>
            <p className="text-primary font-headline-md">Deposit Successful!</p>
            <button 
              onClick={() => {
                // Reset flow
                window.location.reload(); 
              }}
              className="bg-surface-bright text-on-surface border border-outline px-6 py-2 uppercase font-label-caps text-label-caps hover:bg-surface-variant transition-colors"
            >
              Save Again
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 z-10">
            <div className="flex gap-2">
              {['1', '5', '10'].map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePreset(preset)}
                  className={`flex-1 py-2 font-label-caps text-label-caps border ${depositAmount === preset ? 'bg-primary-container text-on-primary-container border-primary-container' : 'bg-surface-bright text-on-surface border-outline-variant hover:bg-surface-variant'}`}
                >
                  ${preset}
                </button>
              ))}
            </div>
            
            <input 
              type="number" 
              placeholder={`Amount in ${SUPPORTED_TOKEN.symbol}`}
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className="bg-surface-bright border border-outline-variant text-primary p-3 rounded-none font-body-lg focus:outline-none focus:border-primary-container"
            />
            
            <button 
              onClick={handleDeposit}
              disabled={!isConnected || isDepositing || !depositAmount}
              className="relative bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-4 uppercase flex justify-center items-center gap-2 neo-shadow-dark hover:bg-secondary hover:neo-shadow-primary transition-all active:translate-y-1 active:translate-x-1 active:shadow-none disabled:opacity-50 disabled:pointer-events-none w-full"
            >
              {isDepositing ? (
                <span className="material-symbols-outlined animate-spin">sync</span>
              ) : (
                <span className="material-symbols-outlined">add_circle</span>
              )}
              {isDepositing ? 'Depositing...' : `Deposit ${SUPPORTED_TOKEN.symbol}`}
            </button>
          </div>
        )}
      </div>

    </main>
  );
}
