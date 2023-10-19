import styled from 'styled-components';
import { device } from '@/utils/media/devices';

interface InputProps {
  className?: string;
  placeholder?: string;
}

const Input = styled(CustomInput)`
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  height: 32px;
  padding: 2px 8px;
  border: 1px solid #cccccc;

  &:hover {
    border-color: #b3b3b3;
  }

  &:focus {
    outline-color: #2684ff;
  }

  &::placeholder {
    font: inherit;
  }

  @media ${device.xl} {
    font-size: 16px;
    height: 35px;
  }

  @media ${device['2xl']} {
    font-size: 18px;
  }
`;

function CustomInput({ className, placeholder }: InputProps) {
  return <input className={className} placeholder={placeholder} />;
}

export default Input;
