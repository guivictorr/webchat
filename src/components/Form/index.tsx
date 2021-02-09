import React from 'react';
import { FormProps } from '../../interfaces';

import { Container } from './styles';

const Form: React.FC<FormProps> = ({ children, title, subTitle }) => {
  return (
    <Container>
      <header>
        <h1>{subTitle}</h1>
        <span>{title}</span>
      </header>
      {children}
    </Container>
  );
};

export default Form;
