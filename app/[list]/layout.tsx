import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

import { get } from '@/lib/firebase/collection';
import { List } from '@/lib/model/list';
import { ThemeToggle } from '@/components/theme-toggle';

type ListLayoutProps = {
  params: {
    list: string;
  };
  children: ReactNode;
};

async function getListData(listId: string) {
  const list = await get<List>('lists', listId);

  return {
    list,
  };
}

export default async function ListLayout({
  params: { list: listId },
  children,
}: ListLayoutProps) {
  const { list } = await getListData(listId);

  if (!list) {
    notFound();
  }

  return (
    <div className="pb-6">
      <header className="flex h-16 items-center  border-b bg-background shadow-md sm:h-20">
        <div className="mx-auto flex max-w-6xl grow items-center justify-between pl-4 pr-2 sm:px-8">
          <h1 className="text-xl font-semibold">{list.title}</h1>
          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mt-6 space-y-6 px-2 sm:px-8">
        <h2 className="text-xl font-semibold">
          Wer kommt, wer bringt was mit?
        </h2>
        {children}
      </main>
    </div>
  );
}
