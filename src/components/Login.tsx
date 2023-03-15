import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import { Button } from './ui/button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void login({ email, password });
        }}
        className="grid m-10 place-items-center gap-y-10"
      >
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
          <h3>Password</h3>
          <input
            value={password}
            className="p-1 border-2 border-black rounded-md"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        <section>
          <Button type="submit" variant="default">
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </section>
      </form>
    </section>
  );
}

export default Login;
