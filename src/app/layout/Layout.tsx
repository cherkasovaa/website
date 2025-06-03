import { type JSX } from 'react';

import { Outlet } from 'react-router-dom';

export const Layout = (): JSX.Element => {
  return (
    <>
      <div>Header</div>
      <main>
        <Outlet />
      </main>
      <div>Footer</div>
    </>
  );
};
