import { type JSX } from 'react';

import { ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { APP_PATHS } from '~/shared/config/router/paths';

export const Breadcrumbs = (): JSX.Element => {
  const location = useLocation();

  if (location.pathname === APP_PATHS.HOME) {
    return <></>;
  }

  return (
    <nav aria-label="breadcrumb">
      <Link to={APP_PATHS.HOME} className="text-accent group mb-6 inline-flex items-center transition-colors">
        <ChevronLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" /> Back to Home
      </Link>
    </nav>
  );
};
