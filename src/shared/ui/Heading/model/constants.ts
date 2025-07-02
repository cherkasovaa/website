import type { JSX } from 'react';

import type { HeadingLevel } from './types';

export const tagMap: Record<HeadingLevel, keyof JSX.IntrinsicElements> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

export const levelClasses: Record<HeadingLevel, string> = {
  1: 'text-4xl sm:text-5xl font-bold tracking-tight text-balance',
  2: 'text-lg font-secondary font-light tracking-tight text-balance mb-6',
  3: 'text-lg font-secondary font-normal tracking-tighter text-balance',
  4: 'text-lg font-medium tracking-tight text-balance',
  5: 'text-base font-medium tracking-tight text-balance',
  6: 'text-base font-medium tracking-tight text-balance',
};
