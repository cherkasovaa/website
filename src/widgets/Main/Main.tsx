import type { JSX } from 'react';

import { Outlet } from 'react-router-dom';

export const Main = (): JSX.Element => {
  return (
    <main className="container mx-auto h-full flex-1 px-4">
      <Outlet />
    </main>
  );
};
