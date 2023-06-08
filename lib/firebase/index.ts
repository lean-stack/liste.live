import {
  cert,
  getApps,
  initializeApp,
  type ServiceAccount,
} from 'firebase-admin/app';
import {
  DocumentData,
  FirestoreDataConverter,
  getFirestore,
  PartialWithFieldValue,
} from 'firebase-admin/firestore';

const svcAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
};

const apps = getApps();

export const app =
  apps.length > 0 ? apps[0] : initializeApp({ credential: cert(svcAccount) });

export const db = getFirestore(app);

export const modelConverter = <
  T extends { id: string }
>(): FirestoreDataConverter<T> => ({
  toFirestore: (modelObject: PartialWithFieldValue<T>): DocumentData => {
    const { id, ...doc } = modelObject;
    return doc;
  },
  fromFirestore: (snapshot) =>
    ({
      id: snapshot.id,
      ...snapshot.data(),
    } as T),
});
