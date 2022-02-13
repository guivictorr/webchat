import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { ReactNode } from 'react';
import * as S from './styles';

export type InputProps = {
  onType: (value: string) => void;
  error?: boolean;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ error, onType, name, icon, ...rest }: InputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    onType(newValue);
  };

  return (
    <S.Container error={error}>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        name={name}
        {...rest}
      />
      {!!icon && <S.Icon>{icon}</S.Icon>}
    </S.Container>
  );
};

export default Input;
