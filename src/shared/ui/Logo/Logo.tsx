import type { JSX } from 'react';

import { Link } from 'react-router-dom';

import { APP_PATHS } from '~/shared/config/router/paths';

export const Logo = (): JSX.Element => {
  return (
    <div className="h-12 w-12">
      <Link to={APP_PATHS.HOME} aria-label="To home page" className="text-lg leading-none">
        Alina Cherkasova
      </Link>
    </div>
  );
};
