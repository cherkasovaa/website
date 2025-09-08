import { type JSX } from 'react';

import { Link, SquareArrowOutUpRight } from 'lucide-react';

import { Heading, TechStack } from '@/shared/ui';

import type { ExperienceCardProps } from '../model/types';

export const ExperienceCard = ({ experience }: ExperienceCardProps): JSX.Element => {
  const title = `${experience.position} | ${experience.company}`;
  const startPeriod = new Date(experience.period.start).getFullYear();
  const endPeriod = experience.period.end ? new Date(experience.period.end).getFullYear() : 'Present';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-8">
      <div
        className="text-secondary font-secondary mt-1 mb-2 text-sm font-semibold uppercase sm:col-span-2"
        aria-label={`${startPeriod} to ${endPeriod}`}
      >
        {startPeriod} - {endPeriod}
      </div>

      <ul className="flex flex-col sm:col-span-6 md:mb-0">
        <li>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-2.5 flex items-baseline gap-1.5"
            >
              <Heading level={3}>{title}</Heading>

              <SquareArrowOutUpRight
                strokeWidth={1}
                size={12}
                className="transition-all duration-300 group-hover:-translate-y-2"
              />
            </a>
          ) : (
            <Heading level={3} className="text-secondary mb-2.5">
              {title}
            </Heading>
          )}
        </li>

        <p className="mb-6">{experience.description}</p>

        {experience.projects && (
          <div className="text-secondary mb-4 flex flex-wrap items-center gap-3">
            {experience.projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-secondary flex items-center gap-1 text-sm tracking-tight"
                aria-label={`${project.name} (opens in a new tab)`}
              >
                <Link size={10} strokeWidth={0.75} />
                <span>{project.name}</span>
              </a>
            ))}
          </div>
        )}

        <div className="text-accent mb-4 flex flex-wrap items-center gap-2">
          <TechStack technologies={experience.technologies} />
        </div>
      </ul>
    </div>
  );
};
