import type { Address } from 'viem';
import CeloSaverVaultABI from '@/abi/CeloSaverVault.json';
import ERC20ABI from '@/abi/ERC20.json';

// Celo Mainnet deployed addresses
export const VAULT_ADDRESS = '0xddBe6c3a59F21E964f26B0EBF617EA579146324B' as Address;
export const SUPPORTED_TOKEN = {
  symbol: 'Stablecoin',
  decimals: 18,
  address: '0x765DE816845861e75A25fCA122bb6898B8B1282a' as Address,
};

export const CELO_CHAIN_ID = 42220;

export { CeloSaverVaultABI, ERC20ABI };

// Typed helper for user data returned by the vault contract
export interface UserData {
  balance: bigint;
  streak: bigint;
  lastDeposit: bigint;
}

export function parseUserData(data: unknown): UserData | null {
  try {
    if (!data || !Array.isArray(data) || data.length < 3) return null;
    return {
      balance: typeof data[0] === 'bigint' ? data[0] : BigInt(data[0] ?? 0),
      streak: typeof data[1] === 'bigint' ? data[1] : BigInt(data[1] ?? 0),
      lastDeposit: typeof data[2] === 'bigint' ? data[2] : BigInt(data[2] ?? 0),
    };
  } catch {
    return null;
  }
}
