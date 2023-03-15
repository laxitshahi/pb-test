import pb from '../lib/pocketbase';
import { useUserState } from '../state/store';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ClientResponseError } from 'pocketbase';

type Props = {
  email: string;
  password: string;
};

function useLogin() {
  const router = useRouter();
  const updateUserData = useUserState((state) => state.updateUserData);
  const [isLoading, setIsLoading] = useState(false);

  async function login({ email, password }: Props) {
    pb.authStore.clear();
    try {
      setIsLoading(true);
      const authData = await pb
        .collection('users')
        .authWithPassword(email, password);
      updateUserData(authData.record);
      void router.push('/dashboard');
    } catch (e: any) {
      console.log(e.data);
      console.log(e);
    }
    setIsLoading(false);
  }
  return { login, isLoading };
}

export default useLogin;
