import type { JSX } from 'react';

import { ProjectTableRow } from './ProjectTableRow';

import type { ProjectTableProps } from '../model/types';

export const ProjectTable = ({ projects }: ProjectTableProps): JSX.Element => {
  return (
    <table className="mt-10 mb-10 w-full table-fixed border-collapse text-left">
      {/* Table Head */}

      <thead className="border-b border-slate-400/10 py-5">
        <tr>
          <th className="w-[10%] py-4">Year</th>
          <th className="w-[20%] py-4">Project</th>
          <th className="hidden w-[10%] py-4 lg:table-cell">Type</th>
          <th className="hidden py-4 md:table-cell">Build with</th>
          <th className="hidden w-[25%] py-4 sm:table-cell">Link</th>
        </tr>
      </thead>

      {/* Table Body  */}
      <tbody>
        {projects.map((project) => (
          <ProjectTableRow key={project.id} project={project} />
        ))}
      </tbody>
    </table>
  );
};
