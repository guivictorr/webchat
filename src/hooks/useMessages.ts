import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore, firebase } from '@firebase';
import { MessageProps } from 'interfaces';
import { useAuthState } from 'react-firebase-hooks/auth';

const useMessages = () => {
  const [user] = useAuthState(auth);
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'desc').limit(20);
  const [messages] = useCollectionData<MessageProps>(query, {
    idField: 'id',
  });

  const handleAddMessage = async (text: string) => {
    await messagesRef.add({
      text,
      name: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return {
    messages,
    handleAddMessage,
  };
};

export default useMessages;
