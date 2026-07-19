'use client';

import { useMiniPay } from '@/hooks/useMiniPay';

/**
 * Floating stablecoin balance bar shown when the app is loaded inside MiniPay.
 */
export default function MiniPayBar() {
  const { isMiniPay, isLoading, cusdBalance, ceurBalance, address } = useMiniPay();

  if (isLoading || !isMiniPay || !address) return null;

  const formatBalance = (val: string) => {
    const num = parseFloat(val);
    if (num === 0) return '0.00';
    if (num < 0.01) return '<0.01';
    return num.toFixed(2);
  };

  return (
    <div className="w-full px-4 py-2 bg-surface-container-low border-b border-outline flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
        <span className="font-mono text-label-mono text-secondary uppercase">MiniPay</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-on-surface-variant">
          <span className="font-mono text-caption text-on-surface-variant/60 mr-1">cUSD</span>
          <span className="font-mono text-label-mono text-white">{formatBalance(cusdBalance)}</span>
        </span>
        <span className="text-on-surface-variant">
          <span className="font-mono text-caption text-on-surface-variant/60 mr-1">cEUR</span>
          <span className="font-mono text-label-mono text-white">{formatBalance(ceurBalance)}</span>
        </span>
      </div>
    </div>
  );
}
