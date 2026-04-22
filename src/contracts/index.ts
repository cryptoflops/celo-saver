import type { Address } from 'viem';
import CeloSaverVaultABI from '@/abi/CeloSaverVault.json';
import ERC20ABI from '@/abi/ERC20.json';

// Celo Sepolia Testnet deployed addresses
export const VAULT_ADDRESS = '0xC3B543dD37A87f6DA9a34a9430eC76349d6Ac4c8' as Address;
export const CUSD_ADDRESS = '0xef6d34199F521876a401C4c87332F1469E54Bc80' as Address;

export const CELO_SEPOLIA_CHAIN_ID = 11142220;

export { CeloSaverVaultABI, ERC20ABI };
