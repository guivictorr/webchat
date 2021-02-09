import styled, { css } from 'styled-components';
import { InputStyles } from '../../interfaces/index';

export const Container = styled.div<InputStyles>`
  padding: 15px;
  border: 2px solid ${({ theme }) => theme.colors.inputColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  width: 100%;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.4s ease;
  }

  ${({ isFilled }) =>
    isFilled &&
    css`
      svg {
        color: ${({ theme }) => theme.colors.buttonColor};
      }
      border: 2px solid ${({ theme }) => theme.colors.buttonColor};
    `}

  input {
    flex: 1;
    height: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 18px;
    margin-left: 20px;
  }
`;
