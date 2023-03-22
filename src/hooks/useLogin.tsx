import pb from '../lib/pocketbase';
import { useUserState } from '../state/store';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { UseBoundStore } from 'zustand';
type Props = {
  email: string;
  password: string;
};

function useLogin() {
  const router = useRouter();
  const updateUserData = useUserState((state) => state.updateUserData);

  async function login({ email, password }: Props) {
    pb.authStore.clear();

    const authData = await pb
      .collection('users')
      .authWithPassword(email, password);

    updateUserData(authData.record);
    void router.push('/dashboard');
  }

  // useMutation handles a number of things such as:
  // isLoading, isError, wrapping try and catch
  return useMutation(login);
}

export default useLogin;
