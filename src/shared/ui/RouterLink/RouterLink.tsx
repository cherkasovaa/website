import type { JSX } from 'react';

import { Link } from 'react-router-dom';

import type { LinkProps } from '~/shared/model/interfaces';

export const RouterLink = ({ path, content, handleClick }: LinkProps): JSX.Element => (
  <Link to={path} onClick={handleClick}>
    {content}
  </Link>
);
