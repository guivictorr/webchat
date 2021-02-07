import React from 'react';
import { ButtonProps } from '../../interfaces';

import { Container } from './styles';

const Button: React.FC<ButtonProps> = ({ title, backgroundColor, image }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      {image ? <img src={image} alt={title} /> : <h6>{title}</h6>}
    </Container>
  );
};

export default Button;
