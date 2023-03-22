// import { logout } from '../auth';
import { useRouter } from 'next/router';
import { useUserState } from '../state/store';
import { useState, useEffect } from 'react';
import { Record } from 'pocketbase';
import Loading from '../components/Loading';
import useGroups from '../hooks/useGroups';
import Image from 'next/image';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const Dashboard = () => {
  const router = useRouter();
  /** @Note This hook can be used to grab data from store*/
  // const numOfTasks = useGetFromStore(useUserState, (state) => state.numOfTasks);
  const [userData, groups] = useUserState((state) => [
    state.userData,
    state.groups,
  ]);
  const { mutate: getGroups, isError, isLoading } = useGroups();
  const [userState, setUserState] = useState<Record | null>(null);
  const [groupState, setGroupState] = useState<Record[] | null>(null);

  useEffect(() => {
    if (!userData) {
      router.push('/');
    }
    setUserState(userData);
    getGroups({ groupIds: userData?.groups });
    setGroupState(groups);
  }, []);

  // if (isLoading) {
  //   return <Loading />;
  // }
  if (isError) {
    return <div>An Error an occurred please try again</div>;
  }
  return (
    <div>
      {/* Header */}
      <Navbar userState={userState} />

      <h2 className="flex justify-center text-xl font-bold">
        Welcome Back {userState?.name || ''}!
      </h2>

      {/* Groups */}
      <section>
        <ul className="justify-content grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {groupState && groupState.length > 0 ? (
            groupState.map((group: Record) => (
              <Link href={`/group/${group.id}`}>
                <li
                  key={group.id}
                  className="my-2 grid justify-items-center space-y-6 rounded-2xl border border-slate-100 p-5 shadow-md"
                >
                  <Image
                    className="rounded-md"
                    src={
                      group.groupImage
                        ? group.groupImage
                        : 'https://source.unsplash.com/random'
                    }
                    alt="image"
                    height={20}
                    width={200}
                  />
                  <Progress value={Math.random() * 100} />
                  <Button type="submit" variant="subtle">
                    {group.groupName}
                  </Button>
                </li>
              </Link>
            ))
          ) : (
            <div> No groups found, please try again</div>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
