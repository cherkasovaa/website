export const PROJECT_TYPES = {
  WEBSITE: 'website',
  SPA: 'spa',
  GAME: 'game',
} as const;

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES];

export const TECHNOLOGIES = {
  HTML: 'HTML5',
  CSS: 'CSS3',
  SCSS: 'SCSS',
  JS: 'JavaScript',
  TS: 'TypeScript',
  REACT: 'React',
  REACT_ROUTER: 'React Router',
  TANSTACK: 'Tanstack',
  TAILWIND: 'Tailwind CSS',
  MATERIAL_UI: 'Material UI',
  BEM: 'BEM',
  WEBPACK: 'Webpack',
  VITE: 'Vite',
  CSS_MODULES: 'CSS Modules',
  FETCH_API: 'Fetch API',
  CANVAS_API: 'Canvas API',
  FILE_API: 'File API',
  NETLIFY: 'Netlify',
} as const;

export type Technology = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];

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
