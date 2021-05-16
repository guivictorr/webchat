import {
  ComponentType,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';
import theme from '../styles/theme';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

export interface InputStyles {
  isFilled: boolean;
}

export interface ButtonProps {
  children: ReactNode;
}

export interface ButtonStyleProps {
  backgroundColor?: keyof typeof theme.colors;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
  subTitle: string;
}

export interface CurrentUserProps {
  photoURL: string;
  uid: string;
  displayName: string;
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

export interface ChatMessageProps {
  message: MessageProps;
}

export interface AuthContextData {
  user: CurrentUserProps;
  signInWithGoogle(): void;
  signInAnonymous(): void;
  signOut(): void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
