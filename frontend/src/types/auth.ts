// Types
import type { UserT } from "./user";

type AuthStateT = {
  user: UserT | null;
  login: (user: UserT) => void;
  logout: () => void;
};

export type { AuthStateT };
