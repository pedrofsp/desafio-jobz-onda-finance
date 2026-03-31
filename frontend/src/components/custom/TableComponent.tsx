// Types
import type { TransactionT } from "@/types/customComponents";

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function TableComponent({ data }: { data: TransactionT[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Descrição</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item) => {
          const isEntrada = item.type === "entrada";

          return (
            <TableRow key={item.id} className="hover:bg-gray-800/50 transition">
              <TableCell className="font-medium">{item.description}</TableCell>

              <TableCell>{item.date}</TableCell>

              <TableCell>
                <Badge
                  className={isEntrada ? "bg-green-600/80" : "bg-red-600/80"}
                >
                  {isEntrada ? "Entrada" : "Saída"}
                </Badge>
              </TableCell>

              <TableCell
                className={`text-right font-medium ${
                  isEntrada ? "text-green-400" : "text-red-400"
                }`}
              >
                {isEntrada ? "+" : "-"} R$ {item.amount.toFixed(2)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
