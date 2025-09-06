'use client';

import { type JSX } from 'react';

import { Monitor, Moon, Sun } from 'lucide-react';

import { useTheme } from '~/shared/lib/hooks/useTheme';
import { cn } from '~/shared/lib/utils/cn';
import { THEME_MODE } from '~/shared/model/providers/types';

export const ThemeSwitcher = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: THEME_MODE.SYSTEM, icon: Monitor, label: 'System' },
    { value: THEME_MODE.LIGHT, icon: Sun, label: 'Light' },
    { value: THEME_MODE.DARK, icon: Moon, label: 'Dark' },
  ];

  return (
    <div className="bg-accent/10 flex items-center gap-3.5 rounded-full px-3 py-2">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            'hover:text-secondary cursor-pointer text-sm transition-colors',
            theme === value ? 'text-accent' : 'text-primary'
          )}
          title={`Switch to ${label.toLowerCase()} theme`}
          aria-label={label}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
};
