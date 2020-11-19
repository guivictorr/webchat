export interface MessageProps {
  id: string;
  text: string;
  uid: string;
  createdAt: Date | string;
  photoURL: string;
}

export interface CurrentUserProps {
  photoURL: string;
  uid: string;
}

export interface ChatMessageProps {
  message: MessageProps;
}
