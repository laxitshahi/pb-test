import { useRouter } from 'next/router';
import pb from '../lib/pocketbase';
import { useMutation } from 'react-query';

type Props = {
  email: string;
  name: string;
  password: string;
};

function useRegister() {
  const router = useRouter();

  async function register({ email, name, password }: Props) {
    pb.authStore.clear();

    const data = {
      username: name,
      email: email,
      emailVisibility: true,
      password: password,
      passwordConfirm: password,
      name: name,
    };

    await pb.collection('users').create(data);
    router.push('/login');
  }

  return useMutation(register);
}

export default useRegister;
