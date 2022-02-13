import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

export type WrapperProps = {
  hasIcon?: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>;

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.buttonColor};
    background-color: white;
  `,
  disabled: () => css`
    cursor: not-allowed;
    filter: saturate(30%) l;
  `,

  withIcon: () => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: 1.4rem;
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size = 'large',
    fullWidth = false,
    hasIcon,
    minimal = false,
    disabled,
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.buttonText};
    text-decoration: none;
    background: ${theme.colors.buttonColor};

    cursor: pointer;
    border-radius: ${theme.borderRadius.normal};
    border: 0;
    padding: ${theme.spacings.xxsmall};
    ${!!size && buttonModifiers[size](theme)}
    ${fullWidth && buttonModifiers.fullWidth()}
    ${!!hasIcon && buttonModifiers.withIcon()}
    ${minimal && buttonModifiers.minimal(theme)}
    &:disabled {
      ${disabled && buttonModifiers.disabled()}
    }
  `}
`;
