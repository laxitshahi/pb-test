'use client';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../auth';
import { useUserState } from '../state/store';

const Home: NextPage = () => {
  const router = useRouter();
  const [userState, updateUserData] = useUserState((state) => [
    state.userData,
    state.updateUserData,
  ]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(userState);
    // if (userState) {
    //   router.push('/dashboard');
    // }
  }, [userState]);

  const loginLogic = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    login({ email, password })
      .then((data) => {
        if (data?.isValid) {
          useUserState.persist.clearStorage();
          updateUserData(data.authData.record);
          void router.push('/dashboard');
        } else {
          console.error('Invalid Credentials, please try again');
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <section>
        <div className="flex h-screen">
          <div className="m-auto h-2/4 w-8/12 rounded border-4 border-black">
            {/*Login*/}
            <form className="grid h-3/4 place-items-center">
              <h2>Welcome!</h2>
              {/*Email*/}
              <section>
                <h3>Email</h3>
                <input
                  value={email}
                  className="rounded-md border-2 border-black p-1"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </section>
              {/*Password*/}
              <section>
                <h3>Password</h3>
                <input
                  value={password}
                  className="rounded-md border-2 border-black p-1"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </section>

              <section>
                <h3 className="grid underline">
                  <button onClick={(e) => loginLogic(e)}>Login</button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Create an Account
                  </button>
                </h3>
              </section>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
