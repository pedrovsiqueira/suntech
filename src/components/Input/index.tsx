import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import {
  Container,
  StyledInput,
  Error,
  StyledLabel,
  StyledInputMask,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  label: string;
  mask?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  label,
  mask,
  handleChange,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const { fieldName, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <Container
        isErrored={!!error}
        isFocused={isFocused}
        data-testid="input-container"
      >
        {mask ? (
          <StyledInputMask
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleChange}
            ref={inputRef}
            mask={mask}
            {...rest}
          />
        ) : (
          <StyledInput
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleChange}
            ref={inputRef}
            {...rest}
          />
        )}

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#f8a186" size={20} />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Input;
