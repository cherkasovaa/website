import { useMemo } from 'react';

import type { ListProps } from '~/shared/model/list.types';

export const useLimitedList = <T>(list: T[], options: ListProps = {}): T[] => {
  const { limit = 3, showAll = false } = options;

  const limitedList = useMemo(() => list.slice(0, showAll ? list.length : limit), [limit, showAll, list]);

  return limitedList;
};
