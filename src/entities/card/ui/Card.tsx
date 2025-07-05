import { type JSX } from 'react';

import { cn } from '~/shared/lib/utils/cn';

import type { CardProps } from '../model/types';

export const Card = ({ children, className }: CardProps): JSX.Element => {
  const defaultClasses =
    'shadow-medium transition-transform-background text-primary hover:bg-accent/5 overflow-hidden rounded-lg duration-100';

  return (
    <div className={cn(defaultClasses, className)}>
      <div className="p-2 md:p-5">{children}</div>
    </div>
  );
};
