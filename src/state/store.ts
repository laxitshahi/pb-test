import { create } from 'zustand';
import type { Record } from 'pocketbase';
import { persist, createJSONStorage } from 'zustand/middleware';

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

export const useUserState = create<State>()(
  persist(
    (set) => ({
      userData: null,
      updateUserData: (data) => set(() => ({ userData: data })),
    }),
    { name: 'userState', storage: createJSONStorage(() => sessionStorage) }
  )
);
