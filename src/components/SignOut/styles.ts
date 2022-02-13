import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(0.95);
  }
`;
