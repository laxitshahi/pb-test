import { createContext, Dispatch, SetStateAction } from 'react';
export const UserContext = createContext<null | Dispatch<SetStateAction<null>>>(
  null
);
