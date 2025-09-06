'use client';

import { type JSX, useEffect, useState } from 'react';

import { THEME_KEY } from '~/shared/config/theme/constants';
import { ThemeContext } from '~/shared/model/providers/context';
import { type Theme, THEME_MODE, type ThemeProviderProps } from '~/shared/model/providers/types';

export const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps): JSX.Element => {
  const [theme, setUserTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(THEME_MODE.DARK, THEME_MODE.LIGHT);

    document.cookie = `${THEME_KEY}=${theme};path=/;max-age=31536000`;

    if (theme === THEME_MODE.SYSTEM) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? THEME_MODE.DARK
        : THEME_MODE.LIGHT;

      root.classList.add(systemTheme);

      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme): void => {
      setUserTheme(newTheme);
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
