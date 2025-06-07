import type { JSX } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from '~/pages/home';
import { NotFoundPage } from '~/pages/not-found';
import { APP_PATHS } from '~/shared/config/router/paths';

import { Layout } from '../layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: APP_PATHS.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);

export const AppRouter = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
