import { cn } from '@/lib/utils';

import './globals.css';

import { Inter } from 'next/font/google';

import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Liste.Live',
  description: 'Make Any List You Want',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={cn('h-full bg-muted antialiased', inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
