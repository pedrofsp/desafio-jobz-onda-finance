// Core
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

// Store
import { useAuth } from "@/store/useAuth";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const user = useAuth((state) => state.user);
  if (!user) return <Navigate to="/" replace />;
  return children;
}
