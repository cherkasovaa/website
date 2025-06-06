import type { JSX } from 'react';

import type { ClickableProps } from '~/shared/model/interfaces';

interface BurgerMenuProps extends ClickableProps {
  active: boolean;
}

export const BurgerMenu = ({ handleClick, active }: BurgerMenuProps): JSX.Element => {
  const toggleMenu = (): void => {
    handleClick();
  };

  return (
    <div
      aria-label={active ? 'Close menu' : 'Open menu'}
      className={`grid cursor-pointer place-content-center ${active ? 'burger-toggle' : ''}`}
      onClick={toggleMenu}
    >
      <div className="bg-accent before:bg-accent after:bg-accent h-0.5 w-8 rounded-full transition-all duration-150 before:absolute before:h-0.5 before:w-8 before:-translate-y-2.5 before:rounded-full before:transition-all before:duration-150 before:content-[''] after:absolute after:h-0.5 after:w-8 after:translate-y-2.5 after:rounded-full after:transition-all after:duration-150 after:content-['']"></div>
    </div>
  );
};
