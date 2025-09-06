import type { JSX } from 'react';

import Link from 'next/link';

import { scrollToSection } from '@/shared/lib/utils/scrollToSection';
import type { LinkProps } from '@/shared/model/interfaces';

export const RouterLink = ({ path, content, handleClick, isAnchor = false, className }: LinkProps): JSX.Element => {
  const to = isAnchor ? `#${path}` : path;

  const handleLinkClick = (e: React.MouseEvent): void => {
    if (isAnchor) {
      e.preventDefault();

      scrollToSection(path);
    }

    if (handleClick) handleClick();
  };

  return (
    <Link href={to} onClick={(e) => handleLinkClick(e)} className={className}>
      {content}
    </Link>
  );
};
