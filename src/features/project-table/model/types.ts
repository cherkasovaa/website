import type { Project } from '@/shared/model/projects/types';

export interface ProjectTableProps {
  projects: Project[];
}

export interface ProjectTableRowProps {
  project: Project;
}
