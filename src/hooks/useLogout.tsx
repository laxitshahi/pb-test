import { useRouter } from 'next/router';
import pb from '../lib/pocketbase';
import { useUserState } from '../state/store';

function useLogout() {
  const router = useRouter();
  function logout() {
    pb.authStore.clear();
    useUserState.persist.clearStorage();
    void router.push('/');
  }
  return logout;
}

export default useLogout;
