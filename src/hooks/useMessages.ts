import { database } from '@firebase';
import { child, push, ref, update } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';

export type MessageData = {
  uid: string;
  message: string;
  authorPic: string;
  author: string;
  createdAt?: string;
};

const useMessages = () => {
  const [list, loading] = useList(ref(database, 'messages'));

  const handleAddMessage = (messageData: MessageData) => {
    const message = {
      ...messageData,
      createdAt: new Date().toISOString(),
    };

    const newPostKey = push(child(ref(database), 'messages'));

    const updates = {
      [`messages/${newPostKey.key}`]: message,
      [`user-messages/${message.uid}/${newPostKey.key}`]: message,
    };

    update(ref(database), updates);
  };

  return {
    messages: list,
    loading,
    handleAddMessage,
  };
};

export default useMessages;
