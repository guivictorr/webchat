import styled, { css } from 'styled-components';
import { InputProps } from '.';

type ContainerProps = Pick<InputProps, 'error'>;

const containerModifiers = {
  error: () => css`
    border: 1px solid #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, error }) => css`
    background-color: ${theme.colors.inputColor};
    border-radius: ${theme.borderRadius.normal};
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;

    ${error && containerModifiers.error()}

    input {
      font-size: 1.4rem;
      padding: 1.5rem 2.5rem;
      color: ${theme.colors.secondary};
      flex: 1;
      height: 100%;
      background: transparent;
      border: 0;
      outline: none;
    }
  `}
`;

export const Icon = styled.div`
  padding: 0 1rem;
`;
