import { useMemo } from 'react';

export const useSortedProjects = <T>(items: T[], dateAccessor: (item: T) => string | Date | null): T[] => {
  const sortedProjects = useMemo(() => {
    return [...items].sort((prev, current) => {
      const prevDateValue = dateAccessor(prev);
      const currDateValue = dateAccessor(current);

      const prevDate = prevDateValue ? new Date(prevDateValue) : new Date();
      const currDate = currDateValue ? new Date(currDateValue) : new Date();

      return currDate.getTime() - prevDate.getTime();
    });
  }, [items, dateAccessor]);

  return sortedProjects;
};
