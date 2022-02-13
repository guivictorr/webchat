import React from 'react';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, icon, ...props },
  ref,
) => (
  <S.Wrapper ref={ref} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default forwardRef(Button);
