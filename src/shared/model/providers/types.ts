import type { ReactNode } from 'react';

export const THEME_MODE = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type Theme = (typeof THEME_MODE)[keyof typeof THEME_MODE];

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme: Theme;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (_: Theme) => void;
}
