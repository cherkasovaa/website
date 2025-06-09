import type { JSX } from 'react';

import type { BracketProps } from './model/types';

export const ButtonBracket = ({ side }: BracketProps): JSX.Element => {
  const isLeft = side === 'left';

  const sideClasses = isLeft ? 'left-1 group-hover:-translate-x-1' : 'right-1 group-hover:translate-x-1';
  const commonClasses = 'bg-accent absolute transition-all duration-300';
  const edgeClasses = 'h-0.25 w-2 group-hover:w-3';

  return (
    <>
      <span
        className={`${sideClasses} ${commonClasses} top-1 h-[calc(100%-0.5rem)] w-0.25 group-hover:top-0 group-hover:h-full`}
      ></span>

      {/* {Top part of bracket} */}
      <span className={`${sideClasses} ${commonClasses} ${edgeClasses} top-1 group-hover:top-0`}></span>

      {/* {Bottom part of bracket} */}
      <span className={`${sideClasses} ${commonClasses} ${edgeClasses} bottom-1 group-hover:bottom-0`}></span>
    </>
  );
};
