import styled from 'styled-components';

export const SignOutContainer = styled.button`
  background-color: #fad02c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.08);
  font-weight: bold;
  color: #333652;

  svg {
    transition: all 0.4s ease;
    transform: translateX(-10px);
    opacity: 0;
    margin-left: 10px;
  }

  p {
    transform: translateX(15px);
    transition: all 0.4s ease;
  }

  &:hover {
    transform: scale(1.2);

    p {
      transform: translateX(0);
    }

    svg {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
