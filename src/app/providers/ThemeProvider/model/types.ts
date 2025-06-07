import type { ReactNode } from 'react';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
