// Libraries
import { Plus } from "lucide-react";
import { NumericFormat } from "react-number-format";

// Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function TransferModalComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer group fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full h-14 w-14 hover:w-auto px-4 shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden flex items-center">
          <Plus
            size={24}
            className="absolute left-1/2 -translate-x-1/2 group-hover:left-4 group-hover:translate-x-0 transition-all duration-300"
          />

          <span className="mb-1 ml-10 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap font-medium">
            Fazer transferência
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Nova Transferência</DialogTitle>
        </DialogHeader>

        <form className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Descrição</Label>
            <Input placeholder="Ex: Mercado" />
          </div>

          <div className="space-y-2">
            <Label>Valor</Label>

            <NumericFormat
              customInput={Input}
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
              allowNegative={false}
              placeholder="R$ 0,00"
            />
          </div>

          <div className="space-y-2">
            <Label>Tipo</Label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-sm">
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>

          <Button className="w-full mt-2">Confirmar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
