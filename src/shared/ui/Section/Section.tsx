import { type JSX, type ReactNode } from 'react';

import { cn } from '~/shared/lib/utils/cn';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className }: SectionProps): JSX.Element => {
  return (
    <section id={id} className={cn('flex flex-1 flex-col py-10 md:py-15', className)}>
      {children}
    </section>
  );
};
