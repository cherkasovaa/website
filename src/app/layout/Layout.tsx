import { type JSX } from 'react';

import { Main } from '~/widgets';

export const Layout = (): JSX.Element => {
  return (
    <>
      <div>Header</div>
      <Main />
      <div>Footer</div>
    </>
  );
};
