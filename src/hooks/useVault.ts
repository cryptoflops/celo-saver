'use client';

import { useReadContract, useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { parseUnits } from 'viem';
import { VAULT_ADDRESS, SUPPORTED_TOKEN, CeloSaverVaultABI, ERC20ABI, CELO_CHAIN_ID } from '@/contracts';

// --- Read Hooks ---

export function useUserData() {
  const { address } = useAccount();

  return useReadContract({
    address: VAULT_ADDRESS,
    abi: CeloSaverVaultABI,
    functionName: 'users',
    args: address ? [address] : undefined,
    chainId: CELO_CHAIN_ID,
    query: { enabled: !!address },
  });
}

export function useCusdBalance() {
  const { address } = useAccount();

  return useReadContract({
    address: SUPPORTED_TOKEN.address,
    abi: ERC20ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    chainId: CELO_CHAIN_ID,
    query: { enabled: !!address },
  });
}

export function useCusdAllowance() {
  const { address } = useAccount();

  return useReadContract({
    address: SUPPORTED_TOKEN.address,
    abi: ERC20ABI,
    functionName: 'allowance',
    args: address ? [address, VAULT_ADDRESS] : undefined,
    chainId: CELO_CHAIN_ID,
    query: { enabled: !!address },
  });
}

// --- Write Hooks ---

export function useApproveVault() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const approve = (amount: string) => {
    writeContract({
      address: SUPPORTED_TOKEN.address,
      abi: ERC20ABI,
      functionName: 'approve',
      args: [VAULT_ADDRESS, parseUnits(amount, 18)],
      chainId: CELO_CHAIN_ID,
    });
  };

  return { approve, hash, isPending, isConfirming, isSuccess, error };
}

export function useDeposit() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const deposit = (amount: string) => {
    writeContract({
      address: VAULT_ADDRESS,
      abi: CeloSaverVaultABI,
      functionName: 'deposit',
      args: [parseUnits(amount, 18)],
      chainId: CELO_CHAIN_ID,
    });
  };

  return { deposit, hash, isPending, isConfirming, isSuccess, error };
}

export function useWithdraw() {
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const withdraw = (amount: string) => {
    writeContract({
      address: VAULT_ADDRESS,
      abi: CeloSaverVaultABI,
      functionName: 'withdraw',
      args: [parseUnits(amount, 18)],
      chainId: CELO_CHAIN_ID,
    });
  };

  return { withdraw, hash, isPending, isConfirming, isSuccess, error };
}
