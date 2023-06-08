import { Roboto_Slab } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Icon } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="absolute right-2 top-2">
        <ThemeToggle />
      </div>
      <main
        className={cn(
          'flex min-h-screen flex-col items-center justify-center gap-y-8',
          robotoSlab.className
        )}
      >
        <h1 className="flex items-end gap-x-4 text-5xl sm:text-7xl">
          <span>Liste</span>
          <span className="translate-y-1 sm:translate-y-2">
            <Icon.List className="h-12 w-12 sm:h-20 sm:w-20" />
          </span>
          <span>Live</span>
        </h1>
        <h2 className="text-2xl text-muted-foreground [font-variant:small-caps] sm:text-3xl">
          Make Any List You Want
        </h2>
      </main>
    </>
  );
}
