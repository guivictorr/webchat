import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.secondaryBackground};
    height: 100%;
  `}
`;
export const Main = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40%;
  `}
`;
export const Header = styled.header`
  img {
    transform: scale(0.7);
  }
`;
export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    color: ${theme.colors.secondary};
    display: flex;

    a {
      color: ${theme.colors.buttonColor};
      margin-left: 0.5rem;
    }
  `}
`;
export const Section = styled.section`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.buttonColor};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const Image = styled.img``;
