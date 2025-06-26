import type { JSX } from 'react';

import { ProjectCard } from '~/entities/project-card';
import { projects } from '~/shared/model/projects/constants';

import type { ProjectListProps } from '../model/types';

export const ProjectList = ({ limit = 3, showAll = false }: ProjectListProps): JSX.Element => {
  const sortedProjects = [...projects]
    .sort((prev, curr) => {
      const prevDate = new Date(prev.date);
      const currDate = new Date(curr.date);
      return currDate.getTime() - prevDate.getTime();
    })
    .slice(0, showAll ? projects.length : limit);

  return (
    <ul className="portfolio-list">
      {sortedProjects.map((project) => (
        <li key={project.id} className="portfolio-item mb-6">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};
