// Core
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Libraries
import { useForm } from "react-hook-form";

// Services & Helpers
import { loginRequest } from "@/services/auth";

// Stores
import { useAuth } from "@/store/useAuth";

// Types
import type { LoginFormT } from "@/schemas/loginSchema";

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

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormT>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const navigate = useNavigate();
  const login = useAuth((state) => state.login);

  const onSubmit = async (data: LoginFormT) => {
    try {
      const user = await loginRequest(data);
      login(user);
      navigate("/dashboard");
    } catch (error) {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800 text-white">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">Onda Finance</CardTitle>
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

            <Button className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
