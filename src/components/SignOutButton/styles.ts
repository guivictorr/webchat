import styled from 'styled-components';

export const SignOutContainer = styled.button`
  background-color: #fad02c;
  display: flex;
  place-content: center;
  border: none;
  padding: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.08);
  font-weight: bold;
  color: #333652;

  svg {
    transition: all 0.4s ease;
  }

  &:hover {
    transform: scale(1.2);

    svg {
      transform: rotate(-360deg);
    }
  }
`;
