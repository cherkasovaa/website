import type { Technology } from '../technologies';

export const PROJECT_TYPES = {
  WEBSITE: 'website',
  SPA: 'spa',
  GAME: 'game',
} as const;

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES];

export interface Project {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  date: string;
  technologies: Technology[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}
