import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import useRegister from '../hooks/useRegister';

function Register() {
  // const router = useRouter();
  // const updateUserData = useUserState((state) => state.updateUserData);
  const { mutate, isLoading, isError } = useRegister();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <section>
        <div className="h-max">
          {/*Login*/}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              mutate({ email, name, password });
            }}
            className="m-10 grid place-items-center gap-y-10"
          >
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
              <h3>Name</h3>
              <input
                value={name}
                className="rounded-md border-2 border-black p-1"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            {/* Password */}
            <section>
              <h3>Password</h3>
              <input
                value={password}
                className="rounded-md border-2 border-black p-1"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </section>

            <Button variant="default" type="submit">
              {isLoading ? 'Loading...' : isError ? 'Try Again' : 'Register'}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
