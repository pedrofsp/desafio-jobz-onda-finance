// Services & Helpers
import { logout } from "@/lib/authRelated";

// Stores
import { useTransactions } from "@/store/useTransactions";

// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TableComponent from "@/components/custom/TableComponent";
import StatisticsComponent from "@/components/custom/StatisticsComponent";
import TransferModalComponent from "@/components/custom/TransferModalComponent";

// Assets
import OndaFinance from "../assets/OndaFinance.png";

export default function DashboardPage() {
  const transactions = useTransactions((state) => state.transactions);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white p-6 space-y-8">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img
              src={OndaFinance}
              className="w-15 h-15 rounded-full border border-gray-700 object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-gray-400 text-sm">
                Visão geral das suas finanças
              </p>
            </div>
          </div>
          <Button
            onClick={logout}
            variant="outline"
            className="cursor-pointer border-gray-700 text-gray-300 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500 transition"
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
