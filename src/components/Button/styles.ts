import styled, { css } from 'styled-components';
import { ButtonStyleProps } from 'interfaces';

const Button = styled.button<ButtonStyleProps>`
  padding: 15px;
  width: 100%;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, backgroundColor = 'buttonColor' }) => css`
    border-radius: ${theme.borderRadius};
    background-color: ${theme.colors[backgroundColor]};
    color: ${theme.colors.buttonText};
  `}
`;

export default Button;
