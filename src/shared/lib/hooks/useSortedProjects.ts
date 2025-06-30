import { useMemo } from 'react';

import { projects } from '~/shared/model/projects/constants';
import type { Project } from '~/shared/model/projects/types';

export const useSortedProjects = (): Project[] => {
  const sortedProjects = useMemo(() => {
    return [...projects].sort((prev, curr) => new Date(curr.date).getTime() - new Date(prev.date).getTime());
  }, []);

  return sortedProjects;
};
