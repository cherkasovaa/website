import { type JSX, useCallback, useEffect, useState } from 'react';

import { THEME_KEY } from '~/shared/config/theme/constants';
import { getInitialTheme } from '~/shared/lib/utils/getInitialTheme';
import { getSystemTheme } from '~/shared/lib/utils/getSystemTheme';
import { ThemeContext } from '~/shared/model/providers/context';
import { type Theme, THEME_MODE, type ThemeProviderProps } from '~/shared/model/providers/types';

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [theme, setUserTheme] = useState<Theme>(getInitialTheme);
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent): void => {
      setSystemTheme(e.matches ? THEME_MODE.DARK : THEME_MODE.LIGHT);
    };

    mediaQuery.addEventListener('change', handleChange);

    return (): void => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(THEME_MODE.DARK, THEME_MODE.LIGHT);
    const appliedTheme = theme === THEME_MODE.SYSTEM ? systemTheme : theme;
    root.classList.add(appliedTheme);
  }, [theme, systemTheme]);

  const setTheme = useCallback((newTheme: Theme): void => {
    localStorage.setItem(THEME_KEY, newTheme);
    setUserTheme(newTheme);
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
