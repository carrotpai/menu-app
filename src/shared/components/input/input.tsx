import styled from 'styled-components';

interface InputProps {
  className?: string;
  placeholder?: string;
}

const Input = styled(CustomInput)`
  border-radius: 4px;
  font-size: 18px;
  font-family: inherit;
  font-weight: 400;
  height: 36px;
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
`;

function CustomInput({ className, placeholder }: InputProps) {
  return <input className={className} placeholder={placeholder} />;
}

export default Input;
