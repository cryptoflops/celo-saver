# CeloSaver Slide Deck

> 10 slides for Proof-of-Ship submission

---

## Slide 1: Title

**CeloSaver**
Save a little daily, keep your streak, unlock milestones.

A MiniPay micro-savings streak app on Celo.

---

## Slide 2: Problem

**Stablecoin holders don't save -- they spend.**

- 10M+ MiniPay activations in emerging markets
- Users hold cUSD but have no habit-building savings tool
- Traditional savings apps don't work with mobile crypto wallets
- DeFi protocols are too complex for everyday users

---

## Slide 3: Solution

**CeloSaver turns saving into a daily game.**

- Micro-deposits in cUSD (any amount)
- On-chain streak tracking (consecutive days)
- Milestone achievements at 7 / 30 / 90 days
- Yield projections with streak multipliers
- 100% MiniPay native -- zero friction

---

## Slide 4: How It Works

```
User opens MiniPay
    → CeloSaver auto-connects
    → Deposits cUSD into vault
    → Streak increments daily
    → Milestones unlock
    → Repeat
```

1. Open CeloSaver inside MiniPay
2. Tap Deposit, enter amount
3. Approve cUSD + confirm deposit
4. Come back tomorrow to grow your streak

---

## Slide 5: Architecture

```
┌─────────────┐     ┌───────────────┐     ┌──────────────┐
│  MiniPay    │     │  Next.js 16   │     │ Celo Mainnet │
│  WebView    │────▶│  React 19     │────▶│ Chain 42220  │
│  (Opera     │     │  Wagmi + Viem │     │              │
│   Mini)     │     │  AppKit       │     │ CeloSaver    │
│             │◀────│  useMiniPay   │◀────│ Vault.sol    │
└─────────────┘     └───────────────┘     └──────────────┘
```

- MiniPay injected provider detected automatically
- Celo chain forced in MiniPay context
- cUSD/cEUR balances displayed via MiniPayBar

---

## Slide 6: Smart Contract

**CeloSaverVault** -- deployed on Celo Mainnet

Address: `0xddBe6c3a59F21E964f26B0EBF617EA579146324B`

| Function | Purpose |
|----------|---------|
| `deposit(amount)` | Lock cUSD, increment streak |
| `withdraw(amount)` | Withdraw cUSD from vault |
| `users(address)` | Read balance + streak + last deposit |

Streak logic: deposit within 24h = increment, gap > 24h = reset to 0.

---

## Slide 7: MiniPay Integration

All 6 checklist items covered:

- [x] MiniPay wallet detection via `window.ethereum.isMiniPay`
- [x] Auto-connect using injected connector
- [x] Celo chain enforcement (`switchChain` on mismatch)
- [x] Stablecoin balance display (cUSD + cEUR)
- [x] Loading state for async provider detection
- [x] Mobile-first responsive design

---

## Slide 8: Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 3 |
| Web3 | Wagmi 2.19 + Viem 2.39 |
| Wallet | Reown AppKit 1.8 |
| Contract | Solidity 0.8.19 (Foundry) |
| Hosting | Cloudflare Pages |
| Package | `@cryptoflops/celo-saver` on NPM |

---

## Slide 9: Competitive Landscape

| | CeloSaver | FocusPet | Piggybox | Bank Apps |
|---|-----------|----------|----------|-----------|
| Streak gamification | Yes | Complex | No | No |
| MiniPay native | Yes | No | No | No |
| On-chain transparency | Yes | Partial | No | No |
| Zero fees | Yes | Free tier | Unknown | Fees |
| Stablecoin support | cUSD/cEUR | GoodDollar | None | Fiat only |

---

## Slide 10: Milestones & Status

| Milestone | Status |
|-----------|--------|
| Smart contract on Celo Mainnet | Done |
| MiniPay hook (all 6 items) | Done |
| Stablecoin balance display | Done |
| Deposit/withdraw vault flow | Done |
| Streak tracking (on-chain) | Done |
| Architecture docs | Done |
| Competitive analysis | Done |
| NPM package published | Done |
| Slide deck | Done |

**Live contract**: [CeloScan](https://celoscan.io/address/0xddBe6c3a59F21E964f26B0EBF617EA579146324B)
