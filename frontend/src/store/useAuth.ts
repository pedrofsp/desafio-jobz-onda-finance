// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Types
import type { AuthStateT } from "@/types/auth";

export const useAuth = create<AuthStateT>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
