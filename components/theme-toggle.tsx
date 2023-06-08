'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/(ui)/button';
import { Icon } from '@/components/icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="px-2"
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icon.Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icon.Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Hell-/Dunkel-Modus umschalten</span>
    </Button>
  );
}
