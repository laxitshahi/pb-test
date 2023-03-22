import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Record } from 'pocketbase';

export type State = {
  userData: Record | null;
  groups: Record[] | null;
  numOfTasks: number;
};

type Actions = {
  updateUserData: (data: Record) => void;
  updateGroups: (data: Record[]) => void;
  updateNumberOfTasks: (data: number) => void;
};

export const useUserState = create<State & Actions>()(
  persist(
    (set, get) => ({
      userData: null,
      groups: null,
      numOfTasks: 0,
      updateUserData: (data) => set(() => ({ userData: data })),
      updateGroups: (data) => set(() => ({ groups: data })),
      updateNumberOfTasks: () =>
        set((state) => ({ numOfTasks: state.numOfTasks + 1 })),
    }),
    { name: 'userState', storage: createJSONStorage(() => localStorage) }
  )
);
