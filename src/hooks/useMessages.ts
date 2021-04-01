import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuth } from '../context/auth';
import { firestore, firebase } from '../firebase';
import { MessageProps, UseMessagesProps } from '../interfaces';

const useMessages = (): UseMessagesProps => {
  const {
    user: { displayName, photoURL, uid },
  } = useAuth();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData<MessageProps>(query, {
    idField: 'id',
  });

  const handleAddMessage = async (text: string) => {
    await messagesRef.add({
      text,
      name: displayName,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return {
    messages,
    handleAddMessage,
  };
};

export default useMessages;
