export default function VaultPage() {
  return (
    <main className="pt-[88px] pb-[104px] px-4 md:px-8 max-w-7xl mx-auto space-y-stack-lg relative z-10 w-full">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md pt-stack-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Savings Vault</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-xl">
            High-yield liquidity pool optimized for steady growth. Deep transparency, hard-coded security.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block px-3 py-1 bg-secondary-fixed/20 text-secondary border border-secondary font-label-caps text-label-caps">
            STATUS: ACTIVE
          </span>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 bg-surface-container-high border border-outline-variant p-6 shadow-[8px_8px_0px_0px_#000000] relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-container/10 blur-2xl rounded-full group-hover:bg-primary-container/20 transition-colors duration-500"></div>
          <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-[16px]">monitoring</span>
            Current APR
          </h3>
          <div className="font-display-xl text-display-xl text-primary-container tabular-nums tracking-tighter">
            12.4<span className="text-headline-md">%</span>
          </div>
          <div className="mt-4 font-body-md text-body-md text-secondary flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            +0.2% 7d avg
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container border border-outline-variant p-6 shadow-[8px_8px_0px_0px_#000000]">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-[16px]">database</span>
            Total Pooled Value
          </h3>
          <div className="font-headline-md text-headline-md text-primary tabular-nums">
            4,204,500
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant">
            cUSD Equivalent
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container border border-outline-variant p-6 shadow-[8px_8px_0px_0px_#000000]">
          <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[16px]">water_drop</span>
            Available Liquidity
          </h3>
          <div className="font-headline-md text-headline-md text-primary tabular-nums">
            $845,200
          </div>
          <div className="w-full bg-surface-container-highest h-2 mt-4 rounded-none overflow-hidden">
            <div className="bg-secondary h-full w-[78%]"></div>
          </div>
          <div className="mt-2 font-body-md text-body-md text-on-surface-variant text-right text-sm">
            78% Utilization
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <button className="w-full bg-primary-container text-on-primary-container font-label-caps text-label-caps py-4 px-6 border border-transparent shadow-[4px_4px_0px_0px_#000000] hover:bg-secondary-container hover:shadow-[6px_6px_0px_0px_#000000] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#000000] transition-all flex justify-between items-center group">
            <span>DEPOSIT FUNDS</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="w-full bg-surface-container text-primary font-label-caps text-label-caps py-4 px-6 border border-outline-variant shadow-[4px_4px_0px_0px_#000000] hover:bg-surface-container-high hover:text-secondary transition-all flex justify-between items-center group">
            <span>WITHDRAW</span>
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
          </button>
        </div>

        <div className="lg:col-span-2 bg-surface-container-low/80 backdrop-blur-md border border-outline-variant p-6 shadow-[8px_8px_0px_0px_#000000] flex flex-col h-full max-h-[400px]">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-outline-variant/50">
            <h3 className="font-headline-md text-[24px] font-semibold text-primary">Recent Activity</h3>
            <button className="text-secondary hover:text-primary transition-colors font-label-caps text-label-caps">
              VIEW ALL
            </button>
          </div>
          <div className="overflow-y-auto no-scrollbar flex-1 space-y-4 pr-2">
            <div className="flex items-center justify-between group p-3 hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-container/10 flex items-center justify-center border border-primary-container/30 text-primary-container">
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                </div>
                <div>
                  <div className="font-body-lg text-body-lg text-primary leading-tight">Deposit Processed</div>
                  <div className="font-body-md text-sm text-on-surface-variant">Today, 14:32 UTC</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-headline-md text-[18px] text-primary-container tabular-nums">+ 500 cUSD</div>
                <div className="font-body-md text-sm text-on-surface-variant">Tx: 0x4a...f92</div>
              </div>
            </div>

            <div className="flex items-center justify-between group p-3 hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center border border-secondary/30 text-secondary">
                  <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                </div>
                <div>
                  <div className="font-body-lg text-body-lg text-primary leading-tight">Streak Multiplier Active</div>
                  <div className="font-body-md text-sm text-on-surface-variant">Yesterday, 09:00 UTC</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-headline-md text-[18px] text-secondary tabular-nums">1.5x Boost</div>
                <div className="font-body-md text-sm text-on-surface-variant">Applied to yield</div>
              </div>
            </div>

            <div className="flex items-center justify-between group p-3 hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-container/10 flex items-center justify-center border border-primary-container/30 text-primary-container">
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                </div>
                <div>
                  <div className="font-body-lg text-body-lg text-primary leading-tight">Deposit Processed</div>
                  <div className="font-body-md text-sm text-on-surface-variant">Oct 24, 11:15 UTC</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-headline-md text-[18px] text-primary-container tabular-nums">+ 1,250 cUSD</div>
                <div className="font-body-md text-sm text-on-surface-variant">Tx: 0x8b...2c1</div>
              </div>
            </div>

            <div className="flex items-center justify-between group p-3 hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface-bright flex items-center justify-center border border-outline-variant text-primary">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
                <div>
                  <div className="font-body-lg text-body-lg text-primary leading-tight">Weekly Yield Distributed</div>
                  <div className="font-body-md text-sm text-on-surface-variant">Oct 21, 00:00 UTC</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-headline-md text-[18px] text-primary tabular-nums">+ 42.80 cUSD</div>
                <div className="font-body-md text-sm text-on-surface-variant">Auto-compounded</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
