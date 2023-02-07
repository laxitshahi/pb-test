import { create } from "zustand";

interface Users {
  username: string;
  email: string;
}

interface UserState {
  user: Users;
}

const useUserStore = create<UserState>()((set) => ({
  user: { username: "", email: "" },
  setUser: () =>
    set((state) => ({
      user: { username: state.user.email, email: state.user.email },
    })),
  removeUser: () =>
    set(() => ({
      user: { username: "", email: "" },
    })),
}));

export default useUserStore;
