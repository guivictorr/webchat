import {
  ButtonHTMLAttributes,
  ComponentType,
  FormHTMLAttributes,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

export interface InputStyles {
  isFilled: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  image?: string;
  backgroundColor: string;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
  subTitle: string;
}

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
