import { auth, firestore, firebase } from '@firebase';
import { MessageProps } from 'interfaces';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const MESSAGES_LIMIT = 15;

const useMessages = () => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'desc');

  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [lastDoc, setLastDoc] = useState<firebase.firestore.DocumentData>();

  useEffect(() => {
    query
      .limit(MESSAGES_LIMIT)
      .get()
      .then(updateState)
      .finally(() => setIsLoading(false));
  }, []);

  const fetchMore = () => {
    query
      .startAfter(lastDoc)
      .limit(MESSAGES_LIMIT)
      .get()
      .then(updateState)
      .finally(() => setIsLoading(false));
  };

  const updateState = ({
    docs,
    size,
  }: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
    const isCollectionEmpty = size === 0;

    if (isCollectionEmpty) {
      setIsEmpty(true);
      return;
    }

    const docData = docs.map(doc => doc.data()) as MessageProps[];
    const lastCurrentDoc = docs[docs.length - 1];
    setMessages(prevState => [...prevState, ...docData]);
    setLastDoc(lastCurrentDoc);
  };

  const handleAddMessage = async (text: string) => {
    const message = {
      text,
      name: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    const newMessageQuery = await messagesRef.add(message);
    newMessageQuery.get().then(doc => {
      const docData = doc.data() as MessageProps;

      setMessages(prevState => [docData, ...prevState]);
    });
  };

  return {
    messages,
    isLoading,
    handleAddMessage,
    fetchMore,
    isEmpty,
  };
};

export default useMessages;
