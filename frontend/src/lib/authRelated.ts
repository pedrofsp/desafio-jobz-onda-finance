import { useAuth } from "@/store/useAuth";

export function logout() {
  useAuth.getState().logout();
  window.location.href = "/";
}
