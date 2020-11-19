import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore, firebase } from '../firebase';
import { CurrentUserProps, MessageProps } from '../interfaces';

interface UseMessagesProps {
  messages: MessageProps[] | undefined;
  handleAddMessage(text: string): Promise<void>;
}

const useMessages = (): UseMessagesProps => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData<MessageProps>(query, {
    idField: 'id',
  });

  const handleAddMessage = async (text: string) => {
    const { uid, photoURL } = auth.currentUser as CurrentUserProps;

    await messagesRef.add({
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return {
    messages,
    handleAddMessage,
  };
};

export default useMessages;
