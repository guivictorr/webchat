import styled from 'styled-components';

const SignInContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;

  main {
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
      transform: scale(0.7);
    }

    p {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 14px;

      a {
        margin-left: 5px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.buttonColor};
        font-weight: bold;
      }
    }

    h2 {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.secondary};
      align-self: center;
      margin: 16px 0;
    }
  }

  section {
    width: 840px;
    background-color: ${({ theme }) => theme.colors.buttonColor};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 557px;
      height: 535px;
    }
  }
`;

export default SignInContainer;
