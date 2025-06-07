import { type JSX, useEffect, useState } from 'react';

import { ThemeContext } from '../model/context';
import { THEME, type Theme, type ThemeProviderProps } from '../model/types';

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const getSystemTheme = (): Theme =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT;

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  const [theme, setTheme] = useState<Theme>(getSystemTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent): void => {
      setTheme(e.matches ? THEME.DARK : THEME.LIGHT);
    };

    mediaQuery.addEventListener('change', handleChange);

    return (): void => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(THEME.DARK, THEME.LIGHT);
    root.classList.add(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
