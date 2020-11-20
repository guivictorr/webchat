export interface MessageProps {
  id: string;
  text: string;
  uid: string;
  createdAt: Date | string;
  photoURL: string;
  name: string;
}

export interface CurrentUserProps {
  photoURL: string;
  uid: string;
  displayName: string;
}

export interface ChatMessageProps {
  message: MessageProps;
}

export interface UseMessagesProps {
  messages: MessageProps[] | undefined;
  handleAddMessage(text: string): Promise<void>;
}
