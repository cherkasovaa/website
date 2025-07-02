import { type JSX } from 'react';

import { ProjectTable } from '~/features/project-table';
import { useSortedProjects } from '~/shared/lib/hooks/useSortedProjects';
import { projects } from '~/shared/model/projects/constants';
import type { Project } from '~/shared/model/projects/types';
import { Heading } from '~/shared/ui';

import { PAGE_TITLE } from '../constants/constants';

export const PortfolioPage = (): JSX.Element => {
  const sortedProjects = useSortedProjects(projects, (item: Project) => item.date);

  return (
    <div>
      <Heading level={1}>{PAGE_TITLE}</Heading>

      {sortedProjects.length ? (
        <ProjectTable projects={sortedProjects} />
      ) : (
        <p className="mt-8 text-center text-gray-500">No projects found</p>
      )}
    </div>
  );
};
