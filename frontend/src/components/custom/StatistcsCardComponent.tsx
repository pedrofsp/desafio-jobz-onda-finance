// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatisticsCardComponent({
  title,
  value,
  plusSign,
}: {
  title: string;
  value: number;
  plusSign?: boolean;
}) {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const isNegative = plusSign === false;
  const colorClass = isNegative ? "text-red-400" : "text-green-400";
  const sign = plusSign === undefined ? "" : plusSign ? "+" : "-";

  return (
    <Card className="bg-gray-900/70 border-gray-800 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-sm text-gray-400">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className={`text-xl font-semibold ${colorClass} `}>
          {sign} {formatCurrency(value)}
        </p>
      </CardContent>
    </Card>
  );
}
