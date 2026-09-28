import type { Timestamp } from "firebase-admin/firestore";
import { adminDb } from "./admin";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
};

export const messagesCollection = () => adminDb.collection("messages");

export async function listMessages(): Promise<ContactMessage[]> {
  const snapshot = await messagesCollection().orderBy("createdAt", "desc").get();
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name ?? "",
      email: data.email ?? "",
      message: data.message ?? "",
      read: data.read === true,
      createdAt: (data.createdAt as Timestamp | undefined)?.toDate().toISOString() ?? "",
    };
  });
}

export async function countUnreadMessages() {
  const snapshot = await messagesCollection().where("read", "==", false).count().get();
  return snapshot.data().count;
}
