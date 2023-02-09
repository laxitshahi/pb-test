import { create } from "zustand";
import { Record } from "pocketbase";

interface UserState {
  name: string;
  avatar: string;
  collectionName: string;
  id: string;
  username: string;
  email: string;
  setName: (name: string) => void;
}

interface State {
  userData: Record | null;
  updateUserData: (data: Record) => void;
}
export const useUserState = create<State>()((set) => ({
  userData: null,
  updateUserData: (data) => set(() => ({ userData: data })),
}));
