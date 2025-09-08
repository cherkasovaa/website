import type { JSX } from 'react';

import type { Technology } from '@/shared/model/technologies';

interface TechStackProps {
  technologies: Technology[];
}

export const TechStack = ({ technologies }: TechStackProps): JSX.Element => {
  return (
    <ul className="text-accent flex flex-wrap items-center gap-2">
      {technologies.map((tech) => (
        <li key={tech} className="bg-accent/10 rounded-full px-3 py-1 text-sm">
          {tech}
        </li>
      ))}
    </ul>
  );
};
