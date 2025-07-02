import type { Technology } from '../technologies';

export const JOB_TYPES = {
  FREELANCE: 'freelance',
  FULL_TIME: 'full-time',
  PART_TIME: 'part-time',
  CONTRACT: 'contract',
} as const;

export type JobTypes = (typeof JOB_TYPES)[keyof typeof JOB_TYPES];

export interface ExperienceProject {
  id: string;
  name: string;
  link: string;
}

export interface Experience {
  id: string;
  period: {
    start: string;
    end: string | null;
  };
  position: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: Technology[];
  projects: ExperienceProject[];
  type: JobTypes;
}
