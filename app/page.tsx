import AppKitButton from '@/components/AppKitButton';

export default function Home() {
  return (
    <main className="relative z-10 w-full max-w-7xl mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-lg">
      <section className="flex flex-col items-center justify-center py-12">
        <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-stack-sm">Total Savings</h2>
        <div className="relative">
          <h1 className="font-display-xl text-display-xl text-primary text-center">
            <span className="text-secondary">$</span>12,450<span className="text-on-surface-variant text-4xl">.00</span>
          </h1>
          <div className="absolute -right-12 -top-4 w-16 h-16 bg-primary-container rounded-full blur-[40px] opacity-20"></div>
        </div>
        <div className="mt-stack-md flex gap-4">
          <span className="bg-secondary-container/10 text-secondary border border-secondary/30 px-3 py-1 font-label-caps text-label-caps rounded-DEFAULT flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +5.2% APY
          </span>
          <span className="bg-surface-variant text-on-surface-variant px-3 py-1 font-label-caps text-label-caps rounded-DEFAULT border border-outline-variant">
            cUSD
          </span>
        </div>
        <div className="mt-8 flex justify-center">
          <AppKitButton />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 bg-surface-container border border-surface-variant p-6 rounded-DEFAULT neo-shadow-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container rounded-full blur-[80px] opacity-10"></div>
          <div className="flex flex-col gap-2 relative z-10">
            <h3 className="font-headline-md text-headline-md text-primary">Grow Your Wealth</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Deposit cUSD into your high-yield vault and start earning immediately with daily payouts.</p>
          </div>
          <button className="relative z-10 bg-primary-container text-on-primary-container font-label-caps text-label-caps px-8 py-4 uppercase flex items-center gap-2 neo-shadow-dark hover:bg-secondary hover:neo-shadow-primary transition-all active:translate-y-1 active:translate-x-1 active:shadow-none whitespace-nowrap">
            <span className="material-symbols-outlined">add_circle</span>
            Deposit cUSD
          </button>
        </div>

        <div className="md:col-span-4 bg-surface-container border border-surface-variant p-6 rounded-DEFAULT neo-shadow-dark flex flex-col items-center justify-center text-center relative">
          <div className="absolute top-4 right-4">
            <span className="material-symbols-outlined text-outline-variant text-sm">info</span>
          </div>
          <div className="w-16 h-16 bg-surface-bright rounded-full flex items-center justify-center mb-4 border border-outline-variant neo-shadow-dark">
            <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-1">14 <span className="text-headline-md text-on-surface-variant">Days</span></h3>
          <p className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">Saving Streak</p>
        </div>

        <div className="md:col-span-6 bg-surface-container border border-surface-variant p-6 rounded-DEFAULT flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-surface-variant pb-4">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Current Vault</h3>
            <span className="material-symbols-outlined text-on-surface-variant">lock</span>
          </div>
          <div className="flex justify-between items-end mt-2">
            <div className="flex flex-col">
              <span className="font-body-md text-body-md text-on-surface-variant mb-1">Balance</span>
              <span className="font-headline-md text-headline-md text-primary">$8,250.00</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-body-md text-body-md text-on-surface-variant mb-1">Earned</span>
              <span className="font-body-lg text-body-lg text-secondary">+$142.50</span>
            </div>
          </div>
          <div className="w-full bg-surface-bright h-2 mt-4 overflow-hidden border border-outline-variant">
            <div className="bg-secondary h-full w-[65%]"></div>
          </div>
          <div className="flex justify-between font-label-caps text-label-caps text-outline">
            <span>Target: $10,000</span>
            <span>65%</span>
          </div>
        </div>

        <div className="md:col-span-6 bg-surface-container border border-surface-variant p-6 rounded-DEFAULT flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-surface-variant pb-4">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Recent Activity</h3>
            <button className="font-label-caps text-label-caps text-primary-container hover:text-secondary transition-colors">VIEW ALL</button>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex justify-between items-center p-3 bg-surface border border-surface-variant hover:border-outline-variant transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-surface-bright rounded-none flex items-center justify-center border border-outline-variant">
                  <span className="material-symbols-outlined text-secondary text-[16px]">arrow_downward</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-primary">Deposit</span>
                  <span className="font-body-md text-[12px] text-on-surface-variant">Today, 14:32</span>
                </div>
              </div>
              <span className="font-body-lg text-body-lg text-primary">+$500.00</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-surface border border-surface-variant hover:border-outline-variant transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-surface-bright rounded-none flex items-center justify-center border border-outline-variant">
                  <span className="material-symbols-outlined text-primary-container text-[16px]">payments</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-caps text-label-caps text-primary">Yield Payout</span>
                  <span className="font-body-md text-[12px] text-on-surface-variant">Yesterday, 00:00</span>
                </div>
              </div>
              <span className="font-body-lg text-body-lg text-secondary">+$2.15</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
