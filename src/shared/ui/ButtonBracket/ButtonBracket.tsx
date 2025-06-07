import type { JSX } from 'react';

import type { BracketProps } from './model/types';

export const ButtonBracket = ({ side }: BracketProps): JSX.Element => {
  const isLeft = side === 'left';

  const sideClasses = isLeft ? 'left-0 group-hover:-translate-x-0.5' : 'right-0 group-hover:translate-x-0.5';
  const commonClasses = 'bg-accent absolute top-1/2';

  return (
    <>
      <span className={`${sideClasses} ${commonClasses} h-6 w-0.25 -translate-y-1/2 group-hover:h-6.5`}></span>

      {/* {Top part of bracket} */}
      <span className={`${sideClasses} ${commonClasses} h-0.25 w-2 -translate-y-3 group-hover:-translate-y-3.5`}></span>

      {/* {Bottom part of bracket} */}
      <span className={`${sideClasses} ${commonClasses} h-0.25 w-2 translate-y-3 group-hover:translate-y-3.5`}></span>
    </>
  );
};
