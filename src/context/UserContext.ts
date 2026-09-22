import { createContext } from "react";

export interface User {
  name: string;
  role: string;
}

export const UserContext = createContext<User | null>(null);
