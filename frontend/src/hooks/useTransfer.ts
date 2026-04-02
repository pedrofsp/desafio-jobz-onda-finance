import { useState } from "react";
import { useTransactions } from "@/store/useTransactions";

export function useTransfer() {
  const addTransaction = useTransactions((state) => state.addTransaction);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | null>(null);
  const [type, setType] = useState<"entrada" | "saida">("entrada");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !amount) return;

    addTransaction({
      id: crypto.randomUUID(),
      description,
      date: new Date().toLocaleDateString("pt-BR"),
      type,
      amount,
    });

    setDescription("");
    setAmount(null);
    setType("entrada");
    setOpen(false);
  };

  return {
    description,
    setDescription,
    amount,
    setAmount,
    type,
    setType,
    open,
    setOpen,
    handleSubmit,
  };
}
