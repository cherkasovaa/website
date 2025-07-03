import type { JSX } from 'react';

import { cn } from '~/shared/lib/utils/cn';
import type { ClickableProps } from '~/shared/model/interfaces';

interface BurgerMenuProps extends ClickableProps {
  active: boolean;
}

export const BurgerMenu = ({ handleClick, active }: BurgerMenuProps): JSX.Element => {
  return (
    <button
      onClick={handleClick}
      aria-label={active ? 'Close menu' : 'Open menu'}
      className={cn('burger-menu group z-20 md:hidden', active && 'active')}
    >
      <svg
        className="text-accent size-10 transition-transform duration-500 group-hover:scale-110"
        viewBox="0 0 100 100"
      >
        <path
          className="line top fill-none stroke-current transition-all duration-500"
          style={{ strokeWidth: 5.5, strokeLinecap: 'round' }}
          d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
        />
        <path
          className="line middle fill-none stroke-current transition-all duration-500"
          style={{ strokeWidth: 5.5, strokeLinecap: 'round' }}
          d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
        />
        <path
          className="line bottom fill-none stroke-current transition-all duration-500"
          style={{ strokeWidth: 5.5, strokeLinecap: 'round' }}
          d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
        />
      </svg>
    </button>
  );
};
