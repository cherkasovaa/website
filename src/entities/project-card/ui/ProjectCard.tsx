import { type JSX } from 'react';

import { Github, SquareArrowOutUpRight } from 'lucide-react';

import { Heading, Image } from '~/shared/ui';

import { IMAGE_BASE_URL, PLACEHOLDER_URL } from '../model/constants';

import type { ProjectCardProps } from '../model/types';

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const imageUrl = project.imageUrl ? `${IMAGE_BASE_URL}${project.imageUrl}` : PLACEHOLDER_URL;

  return (
    <div className="portfolio-card shadow-medium transition-transform-background inset-shadow-accent/10 text-primary hover:bg-accent/5 cursor-pointer overflow-hidden rounded-lg inset-shadow-sm duration-100">
      <div className="p-6">
        <div className="flex flex-col items-stretch gap-3 md:flex-row">
          <div className="mb-6 flex flex-col md:mr-6 md:mb-0 md:w-1/2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-2.5 flex items-baseline gap-1.5"
            >
              <Heading level={3}>{project.name}</Heading>

              <SquareArrowOutUpRight
                strokeWidth={1}
                size={12}
                className="transition-all duration-300 group-hover:-translate-y-2"
              />
            </a>
            <p className="mb-6">{project.description}</p>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <span key={`${project.id}_${tech}`} className="bg-accent/10 rounded-full px-3 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent mt-auto flex items-center gap-1.5"
              >
                <Github strokeWidth={1} size={16} />
                Github
              </a>
            )}
          </div>

          <div className="rounded-large w-full md:w-1/2">
            <Image
              alt={`${project.name} screen`}
              src={imageUrl}
              className="h-64 w-full rounded-lg object-cover object-top shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
