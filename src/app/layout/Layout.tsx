import { type JSX } from 'react';

import { Footer } from '~/widgets/footer';
import { Header } from '~/widgets/header';
import { Main } from '~/widgets/main';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
