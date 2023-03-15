// import { logout } from '../auth';
import { useRouter } from 'next/router';
import { useUserState } from '../state/store';
import { useState, useEffect } from 'react';
import { Record } from 'pocketbase';
import Image from 'next/image';
import useLogout from '../hooks/useLogout';

const Dashboard = () => {
  const router = useRouter();
  /** @Note This hook can be used to grab data from store*/
  // const numOfTasks = useGetFromStore(useUserState, (state) => state.numOfTasks);

  const userData = useUserState((state) => state.userData);
  const [userState, setUserState] = useState<Record | null>();

  // Custom Hooks
  const logout = useLogout();

  useEffect(() => {
    if (!userData) {
      router.push('/');
    } else {
      setUserState(userData);
    }
  }, [userData]);

  // Solves "flashing" issue
  if (!userData) return <></>;

  return (
    <div>
      {/* Header */}
      <header className="sticky flex justify-between p-4 mx-auto mt-4 border-2 border-black max-w-7xl rounded-2xl">
        <span>Welcome {userState ? userState.name : 'NO_NAME'}</span>
        <button onClick={logout}>Logout</button>
      </header>

      {/* Body */}
      <section className="h-screen rounded-2xl">
        <aside className="max-w-xl mt-4 ml-4 bg-gray-100 border-black shadow-lg border-1 h-2/5 rounded-3xl">
          <h1 className="grid justify-center p-2 text-3xl">Groceries</h1>
        </aside>
        <aside className="max-w-xl mt-4 ml-4 bg-gray-100 border-black shadow-lg border-1 h-2/5 rounded-3xl">
          <h1 className="grid justify-center p-2 text-3xl">Groceries</h1>
        </aside>
        <aside className="max-w-xl mt-4 ml-4 bg-gray-100 border-black shadow-lg border-1 h-2/5 rounded-3xl">
          <h1 className="grid justify-center p-2 text-3xl">Groceries</h1>
        </aside>
        {/* <Image
          className="rounded-2xl"
          src={
            typeof userState?.avatar === 'string'
              ? `https://nutritious-receptionist.pockethost.io/api/files/users/${userState.id}/${userState.avatar}`
              : ''
          }
          width={96}
          height={96}
          alt="Profile Picture"
        /> */}
      </section>

      <div></div>
    </div>
  );
};

export default Dashboard;
