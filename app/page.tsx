'use client';

import { SUPPORTED_TOKEN } from '@/contracts';
import { useUserData } from '@/hooks/useVault';
import { useAccount } from 'wagmi';
import AppKitButton from '@/components/AppKitButton';
import Link from 'next/link';
import { ArrowRight, Flame, Target, TrendingUp, Wallet } from 'lucide-react';

export default function Home() {
  const { isConnected } = useAccount();
  const { data: userData } = useUserData();

  const currentStreak = (userData as any[])?.[1] ? Number((userData as any[])[1]) : 0;
  const vaultBalance = (userData as any[])?.[0] ? Number((userData as any[])[0]) / 1e18 : 0;

  // Mock savings goal
  const savingsGoal = 500;
  const goalProgress = Math.min(100, (vaultBalance / savingsGoal) * 100);
  
  // Yield projection (mock 12.4% APY, 1.5x streak multiplier)
  const currentMultiplier = currentStreak >= 7 ? 1.5 : 1.0;
  const baseYield = vaultBalance * 0.124;
  const projectedMonthly = (baseYield * currentMultiplier) / 12;

  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-container-padding py-stack-lg flex flex-col gap-6">
      
      {/* Balance Overview */}
      <section className="flex flex-col items-center justify-center py-8">
        <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-stack-sm flex items-center gap-2">
          <Wallet className="w-4 h-4" />
          Total Savings
        </h2>
        <div className="relative">
          <h1 className="font-display-xl text-display-xl text-primary text-center">
            <span className="text-secondary">$</span>{vaultBalance > 0 ? vaultBalance.toFixed(2) : '0.00'}
          </h1>
          <div className="absolute -right-12 -top-4 w-16 h-16 bg-primary-container rounded-full blur-[40px] opacity-20"></div>
        </div>
        <div className="mt-stack-md flex gap-4">
          <span className="bg-secondary-container/10 text-secondary border border-secondary/30 px-3 py-1 font-label-caps text-label-caps rounded-DEFAULT flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            +12.4% APY
          </span>
          <span className="bg-surface-variant text-on-surface-variant px-3 py-1 font-label-caps text-label-caps rounded-DEFAULT border border-outline-variant">
            {SUPPORTED_TOKEN.symbol}
          </span>
        </div>
        {!isConnected && (
          <div className="mt-8 flex justify-center">
            <AppKitButton />
          </div>
        )}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Streak Quick View */}
        <Link href="/streak" className="block group">
          <div className="bg-surface-container border border-surface-variant p-6 rounded-xl shadow-lg flex items-center gap-4 transition-colors hover:bg-surface-container-high h-full">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-inner ${currentStreak > 0 ? 'bg-orange-500/20 text-orange-500 border border-orange-500/30' : 'bg-surface-variant text-on-surface-variant border border-outline'}`}>
              <Flame className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-1">Active Streak</h3>
              <div className="font-headline-lg text-primary">
                {currentStreak} <span className="text-body-md text-on-surface-variant font-normal">Days</span>
              </div>
              <p className="text-xs text-orange-500 mt-1 font-medium">{currentMultiplier}x Yield Multiplier</p>
            </div>
            <ArrowRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Goal Widget */}
        <div className="bg-surface-container border border-surface-variant p-6 rounded-xl shadow-lg flex flex-col justify-center h-full">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest flex items-center gap-2 mb-1">
                <Target className="w-4 h-4" />
                Emergency Fund
              </h3>
              <div className="font-headline-sm text-primary">
                ${vaultBalance.toFixed(0)} <span className="text-body-sm text-on-surface-variant">/ ${savingsGoal}</span>
              </div>
            </div>
            <span className="font-headline-sm text-secondary">{goalProgress.toFixed(0)}%</span>
          </div>
          <div className="w-full h-3 bg-surface-variant rounded-full overflow-hidden">
            <div 
              className="h-full bg-secondary transition-all duration-1000 ease-out"
              style={{ width: `${goalProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Yield Projection */}
      <div className="bg-surface-container-low border border-outline-variant p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden mt-2">
        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary-container to-secondary"></div>
        <div className="pl-4">
          <h3 className="font-headline-sm text-primary mb-1">Your Money is Working</h3>
          <p className="font-body-sm text-on-surface-variant max-w-sm">
            At your current streak multiplier, you're projected to earn <strong className="text-secondary">+${projectedMonthly.toFixed(2)}</strong> this month.
          </p>
        </div>
        <Link href="/deposit" className="w-full sm:w-auto bg-primary-container text-on-primary-container font-label-caps px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#c4dc30] transition-colors shadow-md shrink-0">
          Deposit More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </main>
  );
}
