// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Types
import type { TransactionT } from "@/types/customComponents";

export const useTransactions = create<{
  transactions: TransactionT[];
  addTransaction: (transaction: TransactionT) => void;
}>()(
  persist(
    (set) => ({
      transactions: [],

      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [transaction, ...state.transactions],
        })),
    }),
    {
      name: "transactions-storage",
    },
  ),
);
