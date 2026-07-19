import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="flex items-center gap-2 font-mono text-sm text-white uppercase tracking-tight">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="13" height="13" rx="3" stroke="#379DEF" strokeWidth="1.5" fill="none"/>
                <path d="M4.5 7L6.5 9L10 5" stroke="#379DEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              CELOSAVER
            </span>
            <p className="font-sans text-[13px] text-white/30 mt-3 max-w-xs leading-relaxed">
              Save stablecoins, earn yield, build streaks — all on Celo MiniPay.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/40 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="/safety" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">Safety & risk</Link></li>
              <li><Link href="/faq" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/40 mb-4">Developers</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/cryptoflops/celo-saver" target="_blank" rel="noopener noreferrer" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://docs.celo.org" target="_blank" rel="noopener noreferrer" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">Celo docs</a></li>
              <li><a href="https://reown.com" target="_blank" rel="noopener noreferrer" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">Reown</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/40 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="font-sans text-[13px] text-white/50 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[12px] text-white/20">© 2026 CeloSaver. Built on Celo with Reown AppKit.</p>
        </div>
      </div>
    </footer>
  );
}
