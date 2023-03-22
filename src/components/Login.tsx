import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import { Button } from './ui/button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // "mutate" is just the function that is wrapped by react-query
  const { mutate: login, isLoading, isError } = useLogin();
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void login({ email, password });
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
          <h3>Password</h3>
          <input
            value={password}
            className="rounded-md border-2 border-black p-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        <section>
          <Button type="submit" variant="default">
            {isLoading ? 'Loading...' : isError ? 'Try Again' : 'Login'}
          </Button>
        </section>
      </form>
    </section>
  );
}

export default Login;
