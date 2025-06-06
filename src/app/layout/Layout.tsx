import { type JSX } from 'react';

import { Header, Main } from '~/widgets';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
      <div>Footer</div>
    </>
  );
};
