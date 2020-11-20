import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore, firebase } from '../firebase';
import {
  CurrentUserProps,
  MessageProps,
  UseMessagesProps,
} from '../interfaces';

const useMessages = (): UseMessagesProps => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData<MessageProps>(query, {
    idField: 'id',
  });

  const handleAddMessage = async (text: string) => {
    const { uid, photoURL, displayName } = auth.currentUser as CurrentUserProps;
    console.log(displayName);
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
