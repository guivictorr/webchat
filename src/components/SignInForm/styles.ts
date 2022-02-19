import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 34rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `};
`;

export const Welcome = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
  `};
`;

export const SignIn = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.primary};
  `}
`;

export const Separator = styled.b`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.secondary};
    align-self: center;
    margin: ${theme.spacings.xsmall} 0;
  `}
`;
