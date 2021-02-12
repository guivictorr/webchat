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
    justify-content: space-between;

    img {
      transform: scale(0.7);
    }

    h2 {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.secondary};
      align-self: center;
      margin: 16px 0;
    }

    footer {
      padding: 20px 40px;
      color: ${({ theme }) => theme.colors.primary};

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.buttonColor};
        margin: 0 5px;
      }
    }
  }

  section {
    width: 60%;
    background-color: ${({ theme }) => theme.colors.buttonColor};
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
      width: 557px;
      height: 535px;
      margin: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;

    main {
      width: 100%;
    }

    section {
      display: none;
    }
  }

  @media (max-width: 380px) {
    form {
      transform: scale(0.8);
    }
  }
`;

export default SignInContainer;
