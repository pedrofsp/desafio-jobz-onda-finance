// Core
import { useState, useEffect } from "react";

// Libraries
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// Services
import { loginRequest } from "@/services/auth";

// Store
import { useAuth } from "@/store/useAuth";

// Types
import type { LoginFormT } from "@/schemas/loginSchema";

export function useLogin() {
  const { register, handleSubmit } = useForm<LoginFormT>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const user = useAuth((state) => state.user);
  const login = useAuth((state) => state.login);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const onSubmit = async (data: LoginFormT) => {
    try {
      setIsSubmitting(true);
      const user = await loginRequest(data);
      login(user);
      toast.success("Usuário logado com successo!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    isSubmitting,
  };
}
