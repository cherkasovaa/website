import { type JSX } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const Skeleton = ({ className = '' }: { className?: string }): JSX.Element => {
  return <div className={cn('animate-pulse rounded-lg bg-gray-200 dark:bg-gray-600', className)}></div>;
};
