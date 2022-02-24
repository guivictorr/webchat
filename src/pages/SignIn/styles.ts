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
    padding: ${theme.spacings.medium};

    @media (max-width: 1080px) {
      width: 100%;
    }
  `}
`;
export const Header = styled.header``;
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

    @media (max-width: 1080px) {
      display: none;
    }
  `}
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
