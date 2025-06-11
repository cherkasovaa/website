import type { JSX } from 'react';

import { Link } from 'react-router-dom';

import { scrollToSection } from '~/shared/lib/utils/scrollToSection';
import type { LinkProps } from '~/shared/model/interfaces';

export const RouterLink = ({ path, content, handleClick }: LinkProps): JSX.Element => {
  const to = `#${path}`;

  const handleLinkClick = (e: React.MouseEvent): void => {
    e.preventDefault();

    scrollToSection(path);

    if (handleClick) handleClick();
  };

  return (
    <Link to={to} onClick={(e) => handleLinkClick(e)}>
      {content}
    </Link>
  );
};
