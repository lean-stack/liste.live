import { notFound } from 'next/navigation';

import { db, modelConverter } from '@/lib/firebase';
import { List } from '@/lib/model/list';
import { ThemeToggle } from '@/components/theme-toggle';

type ListPageProps = {
  params: {
    list: string;
  };
};

export const revalidate = 60;

async function getListData(listId: string) {
  const listSnapshot = await db
    .doc(`lists/${listId}`)
    .withConverter(modelConverter<List>())
    .get();

  return {
    list: listSnapshot.data(),
  };
}

export default async function ListPage({
  params: { list: listId },
}: ListPageProps) {
  const { list } = await getListData(listId);

  if (!list) {
    notFound();
  }

  return (
    <div>
      <header className="flex h-16 items-center  border-b bg-muted shadow-md sm:h-20">
        <div className="mx-auto flex max-w-6xl grow items-center justify-between pl-4 pr-2 sm:px-8">
          <h1 className="text-xl font-semibold">{list.title}</h1>
          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}
