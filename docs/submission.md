# CeloSaver -- Proof-of-Ship Submission

## One-Liner
Save a little daily, keep your streak, unlock milestones -- a MiniPay micro-savings streak app on Celo.

## Problem Statement
In emerging markets where MiniPay has 10M+ activations, users lack simple tools to build savings habits with their stablecoins. Traditional savings apps don't integrate with mobile-first crypto wallets, and DeFi protocols are too complex for everyday users. There's no gamified, low-friction way to encourage daily saving behavior on-chain.

### Competitive Landscape
| App | Strength | Weakness |
|-----|----------|----------|
| **FocusPet** | Productivity gamification, GoodDollar integration | Complex mechanics, not savings-focused |
| **Piggybox** | Simple savings concept | No streak gamification, no MiniPay |
| **Traditional bank apps** | Established trust | No crypto, no transparency, no composability |
| **CeloSaver** | Streak gamification + MiniPay native + on-chain transparency | New, needs user acquisition |

## Solution
CeloSaver turns saving into a daily habit by combining:
- **Micro-deposits** -- deposit any amount of cUSD into a personal vault
- **Streak tracking** -- consecutive daily deposits build a streak (on-chain, verified)
- **Milestone rewards** -- unlock achievements at 7/30/90 day marks
- **MiniPay native** -- auto-connects in MiniPay, shows stablecoin balances, Celo-first

## Architecture
See [architecture.md](./architecture.md) for full system diagram, component breakdown, and tech stack.

**Key frameworks:**
- Next.js 16, React 19, TypeScript
- Wagmi 2 + Viem 2 (contract interaction)
- Reown AppKit (wallet connection)
- Tailwind CSS 3 (styling)
- Cloudflare Pages (hosting)

## Smart Contract
- **CeloSaverVault** deployed on Celo Mainnet
- Address: `0xddBe6c3a59F21E964f26B0EBF617EA579146324B`
- [View on CeloScan](https://celoscan.io/address/0xddBe6c3a59F21E964f26B0EBF617EA579146324B)

## Milestones

| Milestone | Status | PR/Evidence |
|-----------|--------|-------------|
| Smart contract deployed to Celo Mainnet | Done | Foundry deploy broadcast |
| MiniPay wallet detection + auto-connect | Done | `useMiniPay` hook |
| Stablecoin balance display (cUSD/cEUR) | Done | `MiniPayBar` component |
| Celo chain forcing in MiniPay context | Done | `useMiniPay` chain switch |
| Deposit/withdraw vault flow | Done | `useVault` hooks + UI pages |
| Streak tracking (on-chain) | Done | `CeloSaverVault.deposit()` streak logic |
| NPM package published | Done | `@cryptoflops/celo-saver` |

## Slide Deck
See [deck.md](./deck.md) -- 10 slides covering problem, solution, architecture, contract, MiniPay integration, competitive landscape, milestones.
