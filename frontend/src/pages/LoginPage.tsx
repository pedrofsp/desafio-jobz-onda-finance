// Custom Hooks
import { useLogin } from "@/hooks/useLogin";

// Components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Assets
import OndaFinance from "../assets/OndaFinance.png";

export default function LoginPage() {
  const { register, handleSubmit, onSubmit, isSubmitting } = useLogin();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800 text-white">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center gap-2">
            <img
              src={OndaFinance}
              className="w-15 h-15 rounded-full border border-gray-700 object-cover"
            />
            <CardTitle
              className="content-center text-2xl font-thin tracking-wide
"
            >
              <span className="font-semibold" style={{ marginRight: "3px" }}>
                Onda
              </span>
              Finance
            </CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Acesse sua conta
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="bg-gray-800 border-gray-700"
                {...register("email")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-800 border-gray-700"
                {...register("password")}
              />
            </div>

            <Button className="cursor-pointer w-full" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
