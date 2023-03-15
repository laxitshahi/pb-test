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

type State = {
  userData: Record | null;
  numOfTasks: number;
};
type Actions = {
  updateUserData: (data: Record) => void;
  updateNumberOfTasks: (data: number) => void;
};

export const useUserState = create<State & Actions>()(
  persist(
    (set, get) => ({
      userData: null,
      numOfTasks: 0,
      updateUserData: (data) => set(() => ({ userData: data })),
      updateNumberOfTasks: () =>
        set((state) => ({ numOfTasks: state.numOfTasks + 1 })),
    }),
    { name: 'userState', storage: createJSONStorage(() => localStorage) }
  )
);
