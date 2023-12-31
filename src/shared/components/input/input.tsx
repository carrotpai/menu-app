import React from 'react';
import styled from 'styled-components';
import { device } from '@/utils/media/devices';

interface InputProps {
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled(CustomInput)`
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  height: 32px;
  padding: 2px 8px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.main};

  &:hover {
    border-color: #b3b3b3;
  }

  &:focus {
    outline-color: #2684ff;
  }

  &::placeholder {
    font: inherit;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media ${device.xl} {
    font-size: 16px;
    height: 32px;
  }

  @media ${device['2xl']} {
    font-size: 18px;
    height: 32px;
  }
`;

function CustomInput({
  className,
  placeholder,
  readOnly = false,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      readOnly={readOnly}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
