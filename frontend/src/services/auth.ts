// Types
import { type LoginFormT } from "@/schemas/loginSchema";

export const loginRequest = async (data: LoginFormT) => {
  return new Promise<{ email: string }>((resolve, reject) => {
    setTimeout(() => {
      console.log(data);

      if (data.email === "admin@email.com" && data.password === "123456") {
        resolve({ email: data.email });
      } else {
        reject(new Error("Credenciais inválidas"));
      }
    }, 1000);
  });
};
