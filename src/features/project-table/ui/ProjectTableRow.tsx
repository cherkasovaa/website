import type { JSX } from 'react';

import { SquareArrowOutUpRight } from 'lucide-react';

import { formatUrl } from '~/shared/lib/utils/formatUrl';
import { PROJECT_TYPES } from '~/shared/model/projects/types';
import { TechStack } from '~/shared/ui';

import type { ProjectTableRowProps } from '../model/types';

export const ProjectTableRow = ({ project }: ProjectTableRowProps): JSX.Element => {
  return (
    <tr key={project.id} className="border-b border-slate-400/10 last:border-none">
      {/* Year  */}
      <td className="text-secondary py-4 pr-4 align-top text-sm leading-snug font-semibold">
        {new Date(project.date).getFullYear()}
      </td>
      {/* Project Name  */}
      <td className="text-primary py-4 pr-4 align-top leading-snug font-semibold">{project.name}</td>

      {/* Project Type  */}
      <td className="text-secondary hidden py-4 pr-4 align-top text-sm leading-snug font-semibold lg:table-cell">
        {project.type === PROJECT_TYPES.SPA
          ? project.type.toUpperCase()
          : project.type.slice(0, 1).toUpperCase() + project.type.slice(1)}
      </td>

      {/* Technologies */}
      <td className="hidden py-4 pr-4 align-top md:table-cell">
        <ul className="text-accent flex flex-wrap items-center gap-2">
          <TechStack technologies={project.technologies} />
        </ul>
      </td>

      {/* Deploy link  */}
      <td className="hidden py-4 align-top sm:table-cell">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-2.5 flex items-baseline gap-1.5"
        >
          <span>{formatUrl(project.liveUrl)}</span>
          <SquareArrowOutUpRight
            strokeWidth={1}
            size={12}
            className="transition-all duration-300 group-hover:-translate-y-2"
          />
        </a>
      </td>
    </tr>
  );
};
