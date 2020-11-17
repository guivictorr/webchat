import styled from 'styled-components';

export const SignInButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    margin-bottom: 10px;
    font-size: 20px;
  }

  button {
    background-color: #fad02c;
    display: flex;
    place-content: center;
    border: none;
    padding: 16px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.08);

    svg {
      transition: all 0.4s ease;
    }

    &:hover {
      transform: scale(1.2);

      svg {
        transform: rotate(-360deg);
      }
    }
  }
`;
