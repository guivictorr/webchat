import styled from 'styled-components';
import { ButtonProps } from '../../interfaces';

export const Container = styled.button<ButtonProps>`
  padding: 15px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 18px;
  cursor: pointer;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
