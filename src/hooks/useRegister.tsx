import { useRouter } from 'next/router';
import { useState } from 'react';
import pb from '../lib/pocketbase';

type Props = {
  email: string;
  name: string;
  password: string;
};

function useRegister() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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

    try {
      setIsLoading(true);
      await pb.collection('users').create(data);
      router.push('/login');
    } catch (e: any) {
      alert('Please ensure that your email, name, and password are valid');
      console.log(e.data);
      console.log(e);
    }
    setIsLoading(false);
  }

  return { register, isLoading };
}

export default useRegister;
