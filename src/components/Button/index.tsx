import React from 'react';
import { ButtonProps } from '../../interfaces';

import { Container } from './styles';

const Button: React.FC<ButtonProps> = ({
  title,
  backgroundColor,
  image,
  ...rest
}) => {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {image ? <img src={image} alt={title} /> : <p>{title}</p>}
    </Container>
  );
};

export default Button;
