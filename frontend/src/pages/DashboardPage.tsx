// Services & Helpers
import { logout } from "@/lib/authRelated";

// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TableComponent from "@/components/custom/TableComponent";
import StatisticsComponent from "@/components/custom/StatisticsComponent";
import type { TransactionT } from "@/types/customComponents";
import TransferModalComponent from "@/components/custom/TransferModalComponent";

export default function DashboardPage() {
  const transactions: TransactionT[] = [
    {
      id: "1",
      description: "Salário",
      date: "25/03/2026",
      type: "entrada",
      amount: 5000,
    },
    {
      id: "2",
      description: "Supermercado",
      date: "26/03/2026",
      type: "saida",
      amount: 320,
    },
    {
      id: "3",
      description: "Netflix",
      date: "27/03/2026",
      type: "saida",
      amount: 39.9,
    },
    {
      id: "4",
      description: "Abajur",
      date: "27/03/2026",
      type: "saida",
      amount: 39.9,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white p-6 space-y-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-gray-400 text-sm">
              Visão geral das suas finanças
            </p>
          </div>
          <Button
            onClick={logout}
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500 transition"
          >
            Logout
          </Button>
        </div>

        <StatisticsComponent data={transactions} />

        <Card className="bg-gray-900/70 border-gray-800 backdrop-blur">
          <CardHeader>
            <CardTitle>Transações recentes</CardTitle>
          </CardHeader>

          <CardContent>
            <TableComponent data={transactions} />
          </CardContent>
        </Card>
      </div>
      <TransferModalComponent />
    </>
  );
}
