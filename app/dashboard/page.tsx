'use client';

import { SUPPORTED_TOKEN, parseUserData } from '@/contracts';
import { useUserData } from '@/hooks/useVault';
import { useAccount } from 'wagmi';
import AppKitButton from '@/components/AppKitButton';
import ScrollReveal from '@/components/ScrollReveal';
import DoubleBezelCard from '@/components/DoubleBezelCard';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';

export default function Dashboard() {
  const { isConnected } = useAccount();
  const { data: userData } = useUserData();
  const parsed = parseUserData(userData);

  const currentStreak = parsed ? Number(parsed.streak) : 0;
  const vaultBalance = parsed ? Number(parsed.balance) / 1e18 : 0;

  const savingsGoal = 500;
  const goalProgress = Math.min(100, (vaultBalance / savingsGoal) * 100);

  const currentMultiplier = currentStreak >= 7 ? 1.5 : 1.0;
  const baseYield = vaultBalance * 0.124;
  const projectedMonthly = (baseYield * currentMultiplier) / 12;

  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-[#0988F0]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-28">
        {/* Account Stats */}
        <ScrollReveal>
          <section className="text-center mb-12">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              {isConnected ? 'Dashboard' : 'Welcome'}
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              {isConnected ? (
                <>${vaultBalance > 0 ? vaultBalance.toFixed(2) : '0.00'}</>
              ) : (
                <>Start saving today</>
              )}
            </h1>
            {isConnected && (
              <p className="font-sans text-[15px] text-white/40 mt-2">
                Total savings in {SUPPORTED_TOKEN.symbol}
              </p>
            )}
          </section>
        </ScrollReveal>

        {!isConnected ? (
          <ScrollReveal delay={100}>
            <div className="max-w-sm mx-auto text-center">
              <DoubleBezelCard>
                <div className="p-8 text-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 text-white/20">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M12 10V14M10 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <h2 className="font-sans text-lg text-white mb-2">Connect your wallet</h2>
                  <p className="font-sans text-[14px] text-white/40 mb-6">Connect to see your savings, track your streak, and manage your vault.</p>
                  <AppKitButton />
                </div>
              </DoubleBezelCard>
            </div>
          </ScrollReveal>
        ) : (
          <>
            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Streak */}
              <ScrollReveal delay={100}>
                <Link href="/streak" className="group block">
                  <DoubleBezelCard>
                    <div className="p-6 flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                        currentStreak > 0
                          ? 'bg-[#FFB800]/10 border-[#FFB800]/20 text-[#FFB800]'
                          : 'bg-white/5 border-white/10 text-white/30'
                      }`}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M7 18L10 11H6L8 2L13 9H9.5L12 18H7Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/30 block mb-1">Streak</span>
                        <div className="font-sans text-2xl text-white">
                          {currentStreak} <span className="text-sm text-white/40 font-normal">days</span>
                        </div>
                        <p className="font-sans text-[12px] text-[#FFB800] mt-0.5">{currentMultiplier}x yield multiplier</p>
                      </div>
                      <svg className="w-4 h-4 text-white/20 shrink-0 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none">
                        <path d="M9 5L14 10L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </DoubleBezelCard>
                </Link>
              </ScrollReveal>

              {/* Goal */}
              <ScrollReveal delay={150}>
                <DoubleBezelCard>
                  <div className="p-6">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/30 block mb-1">Emergency fund</span>
                        <div className="font-sans text-lg text-white">
                          ${vaultBalance.toFixed(0)} <span className="text-sm text-white/40">/ ${savingsGoal}</span>
                        </div>
                      </div>
                      <span className="font-sans text-lg text-white/60">{goalProgress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-white/30 rounded-full transition-all duration-1000 ease-out" style={{ width: `${goalProgress}%` }} />
                    </div>
                  </div>
                </DoubleBezelCard>
              </ScrollReveal>
            </div>

            {/* Yield Banner */}
            <ScrollReveal delay={200}>
              <div className="mt-4 p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
                <div className="rounded-[calc(2rem-1px)] bg-[#0A0A0A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-sans text-lg text-white">Your money is working</h3>
                    <p className="font-sans text-[14px] text-white/40 mt-1">
                      Projected to earn <strong className="text-white/80">+${projectedMonthly.toFixed(2)}</strong> this month
                    </p>
                  </div>
                  <Link href="/deposit">
                    <MagneticButton arrow>Deposit more</MagneticButton>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* APY */}
            <ScrollReveal delay={250}>
              <div className="mt-4 p-[1px] rounded-2xl bg-gradient-to-b from-white/8 to-transparent">
                <div className="rounded-[calc(2rem-1px)] bg-[#0A0A0A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/40">
                      <path d="M2 9H4L6 5L10 15L14 7L16 11H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/30 block mb-0.5">Current APY</span>
                    <span className="font-sans text-2xl text-white">12.4%</span>
                    <span className="font-sans text-[12px] text-white/30 ml-2">Variable — updated weekly</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </>
        )}
      </div>
    </div>
  );
}
