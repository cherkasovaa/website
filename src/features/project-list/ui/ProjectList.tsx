import { type JSX, useMemo } from 'react';

import { ProjectCard } from '~/entities/project-card';
import { useSortedProjects } from '~/shared/lib/hooks/useSortedProjects';
import type { ListProps } from '~/shared/model/list.types';
import { projects } from '~/shared/model/projects/constants';

export const ProjectList = ({ limit = 3, showAll = false }: ListProps): JSX.Element => {
  const sortedProjects = useSortedProjects();
  const latestProjects = useMemo(
    () => sortedProjects.slice(0, showAll ? projects.length : limit),
    [limit, showAll, sortedProjects],
  );

  return (
    <ul className="portfolio-list">
      {latestProjects.map((project) => (
        <li key={project.id} className="portfolio-item mb-6">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};
