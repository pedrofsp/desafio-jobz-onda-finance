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

      onRehydrateStorage: () => (state) => {
        if (state && state.transactions.length === 0) {
          state.transactions = [
            {
              id: "1",
              description: "Salário",
              amount: 5000,
              type: "entrada",
              date: new Date("2026-04-01").toLocaleDateString("pt-BR"),
            },

            {
              id: "3",
              description: "Aluguel",
              amount: 1500,
              type: "saida",
              date: new Date("2026-04-02").toLocaleDateString("pt-BR"),
            },
            {
              id: "4",
              description: "Supermercado",
              amount: 350,
              type: "saida",
              date: new Date("2026-04-01").toLocaleDateString("pt-BR"),
            },
          ];
        }
      },
    },
  ),
);
