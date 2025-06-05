import type { JSX } from 'react';

import { levelClasses, tagMap } from './model/constants';

import type { HeadingProps } from './model/types';

export const Heading = ({ level, children }: HeadingProps): JSX.Element => {
  const Tag = tagMap[level];

  return <Tag className={levelClasses[level]}>{children}</Tag>;
};
