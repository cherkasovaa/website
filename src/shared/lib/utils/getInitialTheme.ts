import { THEME_KEY } from '~/shared/config/theme/constants';
import { type Theme, THEME_MODE } from '~/shared/model/providers/types';

export const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem(THEME_KEY) || null;

  if (savedTheme === THEME_MODE.DARK || savedTheme === THEME_MODE.LIGHT) {
    return savedTheme;
  }

  return THEME_MODE.SYSTEM;
};
