import type { Address } from 'viem';
import CeloSaverVaultABI from '@/abi/CeloSaverVault.json';
import ERC20ABI from '@/abi/ERC20.json';

// Celo Mainnet deployed addresses
export const VAULT_ADDRESS = '0xddBe6c3a59F21E964f26B0EBF617EA579146324B' as Address;
export const CUSD_ADDRESS = '0x765DE816845861e75A25fCA122bb6898B8B1282a' as Address;

export const CELO_CHAIN_ID = 42220;

export { CeloSaverVaultABI, ERC20ABI };
