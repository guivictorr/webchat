export interface MessageProps {
  id: string;
  text: string;
  uid: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  photoURL: string;
  name: string;
}

export interface ChatMessageProps {
  message: MessageProps;
}
