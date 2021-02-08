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
`;
