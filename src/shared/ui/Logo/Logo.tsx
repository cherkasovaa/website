import type { JSX } from 'react';

import { Link } from 'react-router-dom';

import { APP_PATHS } from '~/shared/config/router/paths';

import logo from '../../assets/images/logo.png';

export const Logo = (): JSX.Element => {
  return (
    <div className="h-12 w-12">
      <Link to={APP_PATHS.HOME} aria-label="To home page">
        <img src={logo} alt="Alina Cherkasova | Frontend Developer logo" />
      </Link>
    </div>
  );
};
