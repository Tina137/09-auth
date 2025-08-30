import { create } from "zustand";
import { User } from "@/types/user";

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  clearIsAuthenticated: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user: User) => set({ isAuthenticated: true, user }),
  clearIsAuthenticated: () => set({ isAuthenticated: false, user: null }),
}));
