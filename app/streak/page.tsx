'use client';

import { useUserData } from '@/hooks/useVault';
import { parseUserData } from '@/contracts';
import ScrollReveal from '@/components/ScrollReveal';
import DoubleBezelCard from '@/components/DoubleBezelCard';

export default function StreakPage() {
  const { data: userData } = useUserData();
  const parsed = parseUserData(userData);
  const currentStreak = parsed ? Number(parsed.streak) : 0;

  const milestones = [
    { days: 3, multiplier: '1.2x', achieved: currentStreak >= 3 },
    { days: 7, multiplier: '1.5x', achieved: currentStreak >= 7 },
    { days: 14, multiplier: '2.0x', achieved: currentStreak >= 14 },
    { days: 30, multiplier: '3.0x', achieved: currentStreak >= 30 },
  ];

  const nextMilestone = milestones.find(m => !m.achieved) || milestones[milestones.length - 1];
  const daysUntilNext = Math.max(0, nextMilestone.days - currentStreak);
  const progressPercentage = Math.min(100, (currentStreak / nextMilestone.days) * 100);

  return (
    <div className="min-h-dvh bg-[#050505]">
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-28">
        <ScrollReveal>
          <section className="mb-10">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/50 mb-4">
              Your progress
            </span>
            <h1 className="font-sans text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
              Savings streak
            </h1>
          </section>
        </ScrollReveal>

        {/* How it works */}
        <ScrollReveal delay={100}>
          <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h2 className="font-sans text-[15px] text-white mb-3">How it works</h2>
            <ul className="space-y-2">
              {[
                'Make at least one deposit every 3 days to keep your streak alive.',
                'Each deposit extends your streak by one day.',
                'Longer streaks unlock higher yield multipliers — up to 3x at 30 days.',
                'If you go more than 3 days without depositing, your streak resets to zero.',
                'Your saved balance and earned yield are never affected by a reset.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[13px] text-white/40">
                  <span className="text-white/20 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Streak hero */}
        <ScrollReveal delay={150}>
          <DoubleBezelCard>
            <div className="p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[#FFB800]/10 pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
                  <path d="M10 21L13 14H8L11 3L16 12H11.5L14 21H10Z" fill="currentColor"/>
                </svg>
              </div>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-5 border-2 ${
                currentStreak > 0
                  ? 'bg-[#FFB800]/10 border-[#FFB800]/30 text-[#FFB800]'
                  : 'bg-white/5 border-white/10 text-white/20'
              }`}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M10 21L13 14H8L11 3L16 12H11.5L14 21H10Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="font-sans text-4xl text-white mb-1">
                {currentStreak} <span className="text-xl text-white/40">days</span>
              </h2>
              {currentStreak > 0 ? (
                <span className="inline-flex items-center gap-1.5 font-sans text-[13px] text-[#FFB800] bg-[#FFB800]/10 border border-[#FFB800]/20 rounded-full px-3 py-1 mt-2">
                  Active streak
                </span>
              ) : (
                <span className="font-sans text-[13px] text-white/30 mt-2">No active streak. Make a deposit to start building one.</span>
              )}
            </div>
          </DoubleBezelCard>
        </ScrollReveal>

        {/* Milestones */}
        <ScrollReveal delay={200}>
          <DoubleBezelCard className="mt-4">
            <div className="p-6">
              <h3 className="font-sans text-[15px] text-white mb-6">Milestones</h3>
              {daysUntilNext > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-sans text-[13px] text-white/40">
                      {daysUntilNext} more days to unlock {nextMilestone.multiplier} multiplier
                    </span>
                    <span className="font-sans text-[13px] text-white/60">{currentStreak} / {nextMilestone.days}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FFB800] to-[#FFB800]/60 rounded-full transition-all duration-1000" style={{ width: `${progressPercentage}%` }} />
                  </div>
                </div>
              )}
              <div className="grid grid-cols-4 gap-2">
                {milestones.map((m, i) => (
                  <div key={i} className={`flex flex-col items-center p-3 rounded-xl border ${
                    m.achieved ? 'bg-secondary/10 border-secondary/20' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                      m.achieved ? 'bg-secondary text-on-primary' : 'bg-white/5 text-white/20'
                    }`}>
                      {m.achieved ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M5 7L6.5 8.5L9 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <span className="font-sans text-[10px]">{m.days}d</span>
                      )}
                    </div>
                    <span className="font-sans text-[14px] text-white mb-0.5">{m.multiplier}</span>
                    <span className="font-sans text-[10px] text-white/30">{m.days} days</span>
                  </div>
                ))}
              </div>
            </div>
          </DoubleBezelCard>
        </ScrollReveal>
      </div>
    </div>
  );
}
