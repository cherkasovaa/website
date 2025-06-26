import type { JSX } from 'react';

import { Outlet } from 'react-router-dom';

import { Breadcrumbs } from '~/shared/ui';

export const Main = (): JSX.Element => {
  return (
    <main className="container mx-auto flex flex-1 flex-col px-4">
      <Breadcrumbs />

      <Outlet />
    </main>
  );
};
