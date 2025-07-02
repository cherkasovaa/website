import { type JSX } from 'react';

import { ProjectCard } from '~/entities/project-card';
import { useLimitedList } from '~/shared/lib/hooks/useLimitedList';
import { useSortedProjects } from '~/shared/lib/hooks/useSortedProjects';
import type { ListProps } from '~/shared/model/list.types';
import { projects } from '~/shared/model/projects/constants';
import type { Project } from '~/shared/model/projects/types';

export const ProjectList = ({ limit = 3, showAll = false }: ListProps): JSX.Element => {
  // const sortedProjects = useSortedProjects();
  const sortedProjects = useSortedProjects(projects, (item: Project) => item.date);
  const latestProjects = useLimitedList(sortedProjects, { limit, showAll });

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
