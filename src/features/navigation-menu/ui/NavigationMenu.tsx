import type { JSX } from 'react';

import { RouterLink } from '~/shared/ui';

import { menuItems } from '../model/constants';

import type { NavigationMenuProps } from '../model/types';

export const NavigationMenu = ({ handleClick }: NavigationMenuProps): JSX.Element => {
  return (
    <nav aria-label="navigation" className="flex h-full items-center justify-center">
      <ul className="flex flex-col gap-4 md:flex-row md:gap-10">
        {menuItems.map((link) => (
          <li key={link} className="text-center text-3xl md:text-base">
            <RouterLink path={link.toLowerCase()} content={link} isAnchor={true} handleClick={handleClick} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
