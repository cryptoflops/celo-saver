'use client';

import { useUserData } from '@/hooks/useVault';
import { parseUserData } from '@/contracts';

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
    <div className="page-width flex flex-col gap-gutter pt-stack-md">
      {/* Header */}
      <section className="px-gutter animate-fade-up">
        <h2 className="font-sans text-heading-lg text-white tracking-tight">Your streak</h2>
        <p className="font-sans text-body-sm text-on-surface-variant mt-2 max-w-xl">
          Build your saving habits. Longer streaks unlock higher yield multipliers and exclusive rewards.
        </p>
      </section>

      {/* Streak Hero */}
      <div className="mx-gutter card--elevated rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden animate-fade-up delay-1">
        <div className="absolute top-4 right-4 text-streak/10 pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
            <path d="M10 21L13 14H8L11 3L16 12H11.5L14 21H10Z" fill="currentColor"/>
          </svg>
        </div>

        <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-6 border-2 ${
          currentStreak > 0
            ? 'bg-streak-muted border-streak/30 text-streak'
            : 'bg-surface-container-low border-outline text-on-surface-variant'
        }`}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M10 21L13 14H8L11 3L16 12H11.5L14 21H10Z" fill="currentColor"/>
          </svg>
        </div>

        <h3 className="font-sans text-display text-white mb-2">
          {currentStreak} <span className="font-sans text-heading-md text-on-surface-variant">days</span>
        </h3>

        {currentStreak > 0 ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-label-mono text-streak bg-streak-muted border border-streak/20 rounded-xl px-3 py-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L9.05 5.05L13 5.5L10 8.5L10.9 13L7 10.8L3.1 13L4 8.5L1 5.5L4.95 5.05L7 1Z" fill="#FFB800"/>
            </svg>
            Active streak
          </span>
        ) : (
          <span className="inline-flex font-mono text-label-mono text-on-surface-variant bg-surface-container-low border border-outline rounded-xl px-3 py-1.5">
            No active streak
          </span>
        )}
      </div>

      {/* Milestone Progress */}
      <div className="mx-gutter card--elevated rounded-xl p-6 animate-fade-up delay-2">
        <h3 className="font-sans text-heading-md text-white mb-6 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-streak">
            <path d="M10 1L12.5 7.5L19 8L14 12.5L15.5 19L10 15.5L4.5 19L6 12.5L1 8L7.5 7.5L10 1Z" fill="currentColor"/>
          </svg>
          Next milestone
        </h3>

        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="font-sans text-body-sm text-on-surface-variant">
              {daysUntilNext > 0
                ? `${daysUntilNext} more days to unlock ${nextMilestone.multiplier} multiplier`
                : 'Max multiplier reached!'}
            </span>
            <span className="font-mono text-label-mono text-white">{currentStreak} / {nextMilestone.days}</span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-streak to-streak/60 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-4 gap-2">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className={`flex flex-col items-center p-3 rounded-xl border ${
                milestone.achieved
                  ? 'bg-secondary/10 border-secondary/20'
                  : 'bg-surface-container-low border-outline-variant'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                milestone.achieved
                  ? 'bg-secondary text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}>
                {milestone.achieved ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 8L7.5 9.5L10 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="2" y="5.5" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    <path d="M5 5.5V3.5C5 2.4 5.9 1.5 7 1.5C8.1 1.5 9 2.4 9 3.5V5.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  </svg>
                )}
              </div>
              <span className="font-mono text-label-mono text-white mb-0.5">{milestone.multiplier}</span>
              <span className="font-mono text-caption text-on-surface-variant">{milestone.days} days</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-gutter px-gutter animate-fade-up delay-3">
        <button className="button button--default theme--outline flex-1 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M6 4H12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Share streak
        </button>
        <button className="button button--default theme--outline flex-1 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          Recover streak
        </button>
      </div>
    </div>
  );
}
