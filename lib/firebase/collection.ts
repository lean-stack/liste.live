import { dataPoint, Resource } from './app';

export async function getAll<T extends Resource>(collectionPath: string) {
  const snapshot = await dataPoint<T>(collectionPath).get();
  return snapshot.docs.map((d) => d.data());
}

export async function get<T extends Resource>(
  collectionPath: string,
  id: string
) {
  const itemRef = dataPoint<T>(collectionPath).doc(id);
  const doc = await itemRef.get();
  return doc.data();
}

export async function create<T extends Resource>(
  collectionPath: string,
  data: Omit<T, 'id'>
) {
  const itemRef = dataPoint<T>(collectionPath).doc();
  const item = { ...data, id: itemRef.id } as T;
  await itemRef.create(item);
  return item;
}

export async function update<T extends Resource>(
  collectionPath: string,
  data: T
) {
  const itemRef = dataPoint<T>(collectionPath).doc(data.id);
  await itemRef.set(data);
  return data;
}

export async function remove(collectionPath: string, id: string) {
  const itemRef = dataPoint<Resource>(collectionPath).doc(id);
  await itemRef.delete();
}
