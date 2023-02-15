import { logout } from '../auth';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useUserState } from '../state/store';
import { useEffect, useState } from 'react';
import type { Record } from 'pocketbase';

const Dashboard = () => {
  const router = useRouter();
  const userData = useUserState((state) => state.userData);
  const [userState, setUserState] = useState<Record | null>();
  useEffect(() => {
    if (!userData) {
      router.push('/');
    }
    setUserState(userData);
  }, [userData]);

  return (
    <div>
      {/* Header */}
      <header className=" sticky mx-auto mt-4 flex max-w-7xl justify-between rounded-2xl border-2 border-black p-4">
        <span>Welcome {userState ? userState.name : 'NO_NAME'}</span>
        <button
          onClick={() => {
            logout();
            useUserState.persist.clearStorage();
            void router.push('/');
          }}
        >
          Logout
        </button>
      </header>

      {/* Body */}
      <section className="h-screen rounded-2xl">
        <aside className="border-1 mt-4  ml-4 h-2/5 max-w-xl rounded-3xl border-black bg-gray-100 shadow-lg">
          <h1 className="grid justify-center p-2 text-3xl">Groceries</h1>
        </aside>
        <aside className="border-1 mt-4  ml-4 h-2/5 max-w-xl rounded-3xl border-black bg-gray-100 shadow-lg">
          <h1 className="grid justify-center p-2 text-3xl">Groceries</h1>
        </aside>
        <aside className="border-1 mt-4  ml-4 h-2/5 max-w-xl rounded-3xl border-black bg-gray-100 shadow-lg">
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
        <aside></aside>
      </section>

      <div></div>
    </div>
  );
};

export default Dashboard;
