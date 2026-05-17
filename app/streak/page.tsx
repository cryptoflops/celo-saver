'use client';

import { useUserData } from '@/hooks/useVault';
import { Flame, Trophy, Share2, Award, Zap } from 'lucide-react';

export default function StreakPage() {
  const { data: userData } = useUserData();
  const currentStreak = (userData as any[])?.[1] ? Number((userData as any[])[1]) : 0;

  // Mock milestones for UI demonstration
  const milestones = [
    { days: 3, multiplier: '1.2x', achieved: currentStreak >= 3 },
    { days: 7, multiplier: '1.5x', achieved: currentStreak >= 7 },
    { days: 14, multiplier: '2.0x', achieved: currentStreak >= 14 },
    { days: 30, multiplier: '3.0x', achieved: currentStreak >= 30 },
  ];

  // Calculate next milestone
  const nextMilestone = milestones.find(m => !m.achieved) || milestones[milestones.length - 1];
  const daysUntilNext = Math.max(0, nextMilestone.days - currentStreak);
  const progressPercentage = Math.min(100, (currentStreak / nextMilestone.days) * 100);

  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-lg mt-8">
      <div className="flex flex-col gap-2 relative z-10">
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Your Streak</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-xl">
          Build your saving habits. Longer streaks unlock higher yield multipliers and exclusive rewards.
        </p>
      </div>

      <div className="bg-surface-container border border-surface-variant p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-4 right-4 text-orange-500/20">
          <Flame className="w-32 h-32" />
        </div>
        
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 border-4 ${currentStreak > 0 ? 'bg-orange-500/10 border-orange-500 text-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.3)]' : 'bg-surface-variant border-outline text-on-surface-variant'}`}>
          <Flame className="w-12 h-12" />
        </div>
        
        <h3 className="font-display-xl text-primary mb-2">
          {currentStreak} <span className="text-headline-md text-on-surface-variant">Days</span>
        </h3>
        
        {currentStreak > 0 ? (
          <span className="bg-orange-500/20 text-orange-500 border border-orange-500/50 px-4 py-1.5 font-label-caps text-sm rounded-full flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Active Streak
          </span>
        ) : (
          <span className="bg-surface-variant text-on-surface-variant border border-outline px-4 py-1.5 font-label-caps text-sm rounded-full">
            No Active Streak
          </span>
        )}
      </div>

      <div className="bg-surface-container border border-surface-variant p-6 rounded-xl shadow-lg">
        <h3 className="font-headline-md text-primary mb-6 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          Next Milestone
        </h3>
        
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="font-body-md text-on-surface-variant">
              {daysUntilNext > 0 ? `${daysUntilNext} more days to unlock ${nextMilestone.multiplier} multiplier` : `Max multiplier reached!`}
            </span>
            <span className="font-headline-sm text-primary">{currentStreak} / {nextMilestone.days}</span>
          </div>
          <div className="w-full h-4 bg-surface-variant rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {milestones.map((milestone, i) => (
            <div key={i} className={`flex flex-col items-center p-3 rounded-lg border ${milestone.achieved ? 'bg-primary-container/10 border-primary-container/30' : 'bg-surface-bright border-outline-variant opacity-50'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${milestone.achieved ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant'}`}>
                {milestone.achieved ? <CheckCircle2 className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
              </div>
              <span className="font-headline-sm text-primary mb-1">{milestone.multiplier}</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant text-center">{milestone.days} Days</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4">
        <button className="flex-1 bg-surface-container text-primary font-label-caps py-4 rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
          Share Streak
        </button>
        <button className="flex-1 bg-surface-container text-primary font-label-caps py-4 rounded-lg border border-outline-variant hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
          <Award className="w-5 h-5" />
          Recover Streak
        </button>
      </div>
    </main>
  );
}

// Simple icons not imported above
function CheckCircle2(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
}
function Lock(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}
