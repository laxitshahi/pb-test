import React, { useEffect, useState } from 'react';
import useLogout from '../hooks/useLogout';
import { Record } from 'pocketbase';
import { ExitIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Slideover, toggleSlideover } from './ui/slideover';
import { useUserState } from '../state/store';

type Props = {
  userData: Record | null;
};
function Navbar() {
  const userData = useUserState((state) => state.userData);
  // Custom Hooks
  const logout = useLogout();

  return (
    <nav className="m-4">
      <Slideover
        children={
          <div className="grid gap-4 text-xl ">
            {['Home', 'Profile', 'Settings'].map((x) => (
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
                typeof userData?.avatar === 'string'
                  ? `https://nutritious-receptionist.pockethost.io/api/files/users/${userData.id}/${userData.avatar}`
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
    </nav>
  );
}

export default Navbar;
