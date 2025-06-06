import { type JSX } from 'react';

import { Header } from '~/widgets/header';
import { Main } from '~/widgets/main';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
      <div>Footer</div>
    </>
  );
};
