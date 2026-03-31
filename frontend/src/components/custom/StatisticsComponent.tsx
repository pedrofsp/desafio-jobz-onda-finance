// Types
import type { TransactionT } from "@/types/customComponents";

// Components
import StatisticsCardComponent from "./StatistcsCardComponent";

export default function StatisticsComponent({
  data,
}: {
  data: TransactionT[];
}) {
  const entradas = data
    .filter((t) => t.type === "entrada")
    .reduce((acc, t) => acc + t.amount, 0);

  const saidas = data
    .filter((t) => t.type === "saida")
    .reduce((acc, t) => acc + t.amount, 0);

  const saldo = entradas - saidas;

  return (
    <div className="flex flex-col justify-between md:flex-row gap-4">
      <div className="flex-1">
        <StatisticsCardComponent title="Saldo" value={saldo} />
      </div>
      <div className="flex-1">
        <StatisticsCardComponent title="Entradas" value={entradas} plusSign />
      </div>
      <div className="flex-1">
        <StatisticsCardComponent
          title="Saídas"
          value={saidas}
          plusSign={false}
        />
      </div>
    </div>
  );
}
