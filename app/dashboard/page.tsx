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
  const hasDeposited = vaultBalance > 0;

  const savingsGoal = 500;
  const goalProgress = Math.min(100, (vaultBalance / savingsGoal) * 100);

  const currentMultiplier = currentStreak >= 7 ? 1.5 : 1.0;
  const baseYield = vaultBalance * 0.124;
  const projectedMonthly = (baseYield * currentMultiplier) / 12;

  // Determine user state
  const state = !isConnected ? 'disconnected' : !hasDeposited ? 'new-user' : 'active';

  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-[#0988F0]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-28">
        {/* Header - adapts to state */}
        <ScrollReveal>
          <section className="text-center mb-10">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              {state === 'disconnected' && 'Get started'}
              {state === 'new-user' && 'Make your first deposit'}
              {state === 'active' && 'Dashboard'}
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              {state === 'disconnected' && 'Your savings dashboard'}
              {state === 'new-user' && 'Ready to start saving?'}
              {state === 'active' && <>${vaultBalance.toFixed(2)}</>}
            </h1>
            <p className="font-sans text-[15px] text-white/40 mt-2 max-w-md mx-auto">
              {state === 'disconnected' && 'Connect your wallet to access your savings vault, track your streak, and earn yield on stablecoin deposits.'}
              {state === 'new-user' && 'Your wallet is connected. Make your first deposit to start earning yield and building your savings streak.'}
              {state === 'active' && <>Total savings in {SUPPORTED_TOKEN.symbol}</>}
            </p>
          </section>
        </ScrollReveal>

        {/* === DISCONNECTED STATE === */}
        {state === 'disconnected' && (
          <div className="max-w-lg mx-auto">
            <ScrollReveal delay={100}>
              <DoubleBezelCard>
                <div className="p-8">
                  {/* Step-by-step onboarding */}
                  <div className="space-y-6 mb-8">
                    {[
                      { step: '1', label: 'Connect wallet', desc: 'Use MiniPay, MetaMask, or any Celo wallet via WalletConnect' },
                      { step: '2', label: 'Deposit stablecoins', desc: 'Start with any amount of cUSD or cEUR — no minimums' },
                      { step: '3', label: 'Earn yield & build streaks', desc: 'Your savings earn 12.4% APY. Maintain deposits to multiply returns' },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <div className="w-7 h-7 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                          <span className="font-mono text-[11px] text-secondary">{item.step}</span>
                        </div>
                        <div>
                          <h3 className="font-sans text-[14px] text-white mb-1">{item.label}</h3>
                          <p className="font-sans text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <AppKitButton />
                  <p className="font-sans text-[11px] text-white/20 text-center mt-4">
                    Learn more about <Link href="/how-it-works" className="underline hover:text-white/40 transition-colors">how CeloSaver works</Link>
                  </p>
                </div>
              </DoubleBezelCard>
            </ScrollReveal>

            {/* Preview cards - show what they'll see after connecting */}
            <ScrollReveal delay={200}>
              <div className="mt-6 grid grid-cols-3 gap-3 opacity-40">
                {[
                  { icon: 'M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z', label: 'Savings' },
                  { icon: 'M7 18L10 11H6L8 2L13 9H9.5L12 18H7Z', label: 'Streak' },
                  { icon: 'M2 12H4L6 8L10 16L14 6L18 14L20 10L22 12', label: 'Yield' },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 text-white/20">
                      <path d={item.icon} stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                    <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/30">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* === NEW USER STATE (connected, no deposits) === */}
        {state === 'new-user' && (
          <div className="max-w-lg mx-auto">
            <ScrollReveal delay={100}>
              <DoubleBezelCard>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-6">
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" className="text-secondary">
                      <path d="M10 2C8.34 2 7 3.34 7 5V7H5C3.89 7 3 7.89 3 9V17C3 18.11 3.89 19 5 19H15C16.11 19 17 18.11 17 17V9C17 7.89 16.11 7 15 7H13V5C13 3.34 11.66 2 10 2ZM10 4C10.55 4 11 4.45 11 5V7H9V5C9 4.45 9.45 4 10 4Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h2 className="font-sans text-xl text-white mb-3">No deposits yet</h2>
                  <p className="font-sans text-[14px] text-white/40 mb-8 leading-relaxed max-w-sm mx-auto">
                    Your vault is empty. Make a deposit to start earning yield and building your savings streak. There are no minimums and no lock-ups.
                  </p>
                  <Link href="/deposit">
                    <MagneticButton arrow>Make first deposit</MagneticButton>
                  </Link>
                </div>
              </DoubleBezelCard>
            </ScrollReveal>
          </div>
        )}

        {/* === ACTIVE STATE === */}
        {state === 'active' && (
          <>
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
