import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;
export const Avatar = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.rounded};
    width: 5.2rem;
    height: 5.2rem;
  `};
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
    color: ${theme.colors.primary};
  `};
`;
export const Name = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
  `};
`;
export const CreatedAt = styled.time`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xsmall};
  `};
`;
export const Message = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    word-break: break-word;
  `};
`;
