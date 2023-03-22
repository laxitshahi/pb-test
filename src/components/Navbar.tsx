import React from 'react';
import useLogout from '../hooks/useLogout';
import { Record } from 'pocketbase';
import { ExitIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Slideover, toggleSlideover } from './ui/slideover';

type props = {
  userState: Record | null;
};

function Navbar({ userState }: props) {
  // Custom Hooks
  const logout = useLogout();
  console.log(userState);
  const sections = ['Home', 'Profile', 'Settings'];
  return (
    <section className="m-4">
      <Slideover
        children={
          <div className="grid gap-4 text-xl ">
            {sections.map((x) => (
              <div
                key={x}
                className="delay-400 transition-all hover:skew-x-12 hover:underline"
              >
                {x}
              </div>
            ))}
          </div>
        }
      />

      <header className="sticky m-4 mx-auto flex max-w-7xl justify-between rounded-2xl border-2 border-black p-4">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage
              src={
                typeof userState?.avatar === 'string'
                  ? `https://nutritious-receptionist.pockethost.io/api/files/users/${userState.id}/${userState.avatar}`
                  : ''
              }
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <button onClick={toggleSlideover}>
            <HamburgerMenuIcon />
          </button>
        </div>
        <button
          className="flex items-center justify-center gap-1"
          onClick={logout}
        >
          <ExitIcon />
          <span>Logout</span>
        </button>
      </header>
    </section>
  );
}

export default Navbar;
