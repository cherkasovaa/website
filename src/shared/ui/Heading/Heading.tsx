import type { JSX } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { levelClasses, tagMap } from '@/shared/ui/Heading/model/constants';
import type { HeadingProps } from '@/shared/ui/heading/model/types';

export const Heading = ({ level, children, className }: HeadingProps): JSX.Element => {
  const Tag = tagMap[level];

  return <Tag className={cn(levelClasses[level], className)}>{children}</Tag>;
};
