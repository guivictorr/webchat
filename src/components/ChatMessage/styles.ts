import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ChatMessageContainer = styled(motion.li)`
  display: flex;
  width: 100%;

  &:not(:first-child) {
    margin-bottom: 4.2rem;
  }

  figure {
    width: 52px;
    height: 52px;
    background-color: ${({ theme }) => theme.colors.buttonColor};
    border-radius: ${({ theme }) => theme.borderRadius.rounded};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 750px) {
      width: 34px;
      height: 34px;
    }

    @media (max-width: 435px) {
      display: none;
      img {
        display: none;
      }
    }
  }
`;

export const TextContent = styled.section`
  margin-left: 15px;
  width: 600px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 750px) {
    width: 300px;
  }

  h3 {
    font-size: 1.4rem;
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.2rem;
  }

  p {
    font-size: 1.8rem;
    word-wrap: break-word;
  }
`;
