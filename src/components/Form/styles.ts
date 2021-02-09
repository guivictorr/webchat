import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  margin-top: 70px;

  header {
    margin-bottom: 20px;
    h1 {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.secondary};
    }

    span {
      font-size: 48px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  fieldset {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: none;
    height: 110px;
  }
`;
