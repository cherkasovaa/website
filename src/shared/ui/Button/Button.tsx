import type { JSX } from 'react';

import { ButtonBracket } from '../ButtonBracket/ButtonBracket';

import type { ButtonProps } from './model/types';

export const Button = ({ content, handleClick }: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="font-primary text-accent group relative cursor-pointer px-6 py-1 font-semibold tracking-widest [&>span]:transition-all [&>span]:duration-300"
      onClick={handleClick}
    >
      <ButtonBracket side="left" />
      <ButtonBracket side="right" />

      <span className="relative">{content}</span>
    </button>
  );
};
