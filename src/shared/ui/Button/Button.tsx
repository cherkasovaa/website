import type { JSX } from 'react';

import { ButtonBracket } from '../ButtonBracket/ButtonBracket';

import type { ButtonProps } from './model/types';

export const Button = ({ content, handleClick }: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="text-accent group hover:bg-accent/10 relative cursor-pointer px-6 py-2 font-semibold tracking-widest transition-all duration-300"
      onClick={handleClick}
    >
      <ButtonBracket side="left" />
      <ButtonBracket side="right" />

      <span className="relative z-10">{content}</span>
    </button>
  );
};
