import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useUserState } from '../state/store';
import { Button } from './ui/button';
import useRegister from '../hooks/useRegister';

function Register() {
  // const router = useRouter();
  // const updateUserData = useUserState((state) => state.updateUserData);
  const { register, isLoading } = useRegister();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <section>
        <div className="h-max">
          {/*Login*/}
          <form className="grid m-10 place-items-center gap-y-10">
            {/*Email*/}
            <section>
              <h3>Email</h3>
              <input
                value={email}
                className="p-1 border-2 border-black rounded-md"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
            {/*Password*/}
            <section>
              <h3>Name</h3>
              <input
                value={name}
                className="p-1 border-2 border-black rounded-md"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            {/* Password */}
            <section>
              <h3>Password</h3>
              <input
                value={password}
                className="p-1 border-2 border-black rounded-md"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </section>

            <Button
              variant="default"
              onClick={(e) => {
                e.preventDefault();
                register({ email, name, password });
              }}
            >
              {isLoading ? 'Loading...' : 'Register'}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
