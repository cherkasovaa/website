import { useContext } from 'react';

import { ThemeContext } from '~/shared/model/providers/context';
import type { ThemeContextType } from '~/shared/model/providers/types';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
