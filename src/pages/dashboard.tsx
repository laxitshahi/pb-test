// import { logout } from '../auth';
import { useRouter } from 'next/router';
import { useUserState } from '../state/store';
import { useEffect } from 'react';
import { Record } from 'pocketbase';
import Loading from '../components/Loading';
import { useUserGroupsQuery } from '../hooks/useGroupQuery';
import Image from 'next/image';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import Error from 'next/error';

const Dashboard = () => {
  const router = useRouter();
  /** @Note This hook can be used to grab data from store*/
  // const numOfTasks = useGetFromStore(useUserState, (state) => state.numOfTasks);
  const [userData] = useUserState((state) => [state.userData]);

  const {
    data: groupData,
    isLoading,
    isError,
  } = useUserGroupsQuery(userData?.id || '');

  useEffect(() => {
    if (!userData) {
      router.push('/');
    }
    // setUserState(userData);
  }, [userData]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <Error title="An error occurred, please try again" statusCode={400} />
    );
  }

  return (
    <div>
      <h2 className="flex justify-center text-xl font-bold">
        Welcome Back {userData?.name || ''}!
      </h2>

      {/* Groups */}
      <section>
        <ul className="justify-content grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {groupData && groupData.length > 0 ? (
            groupData.map((group: Record) => (
              <Link key={group.id} href={`/group/${group.id}`}>
                <li className="my-2 grid justify-items-center space-y-6 rounded-2xl border border-slate-100 p-5 shadow-md">
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
