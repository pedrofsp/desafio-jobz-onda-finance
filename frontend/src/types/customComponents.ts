export type TransactionType = "entrada" | "saida";

export type TransactionT = {
  id: string;
  description: string;
  date: string;
  type: TransactionType;
  amount: number;
};
