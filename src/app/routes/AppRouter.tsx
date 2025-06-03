import type { JSX } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { APP_PATHS } from '~/shared/config/router/paths';

import { Layout } from '../layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <div>Home</div> },
      { path: APP_PATHS.NOT_FOUND, element: <div>404 Page Not Found</div> },
    ],
  },
]);

export const AppRouter = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
