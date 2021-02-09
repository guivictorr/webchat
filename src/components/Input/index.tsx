import React, { useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { InputProps } from '../../interfaces/index';

import { Container } from './styles';

const Input: React.FC<InputProps> = ({
  icon: Icon,
  isPassword = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = () => {
    setIsFilled(!!inputRef.current?.value);
  };

  return (
    <Container isFilled={isFilled}>
      {Icon && <Icon size={24} />}
      <input
        ref={inputRef}
        onChange={handleInputBlur}
        {...rest}
        type={showPassword ? 'text' : rest.type}
      />
      {isPassword &&
        (showPassword ? (
          <FaEyeSlash
            size={16}
            color="#2f80ed"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <FaEye
            size={16}
            color="#2f80ed"
            onClick={() => setShowPassword(!showPassword)}
          />
        ))}
    </Container>
  );
};

export default Input;
