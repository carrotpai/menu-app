import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  fontSize?: string;
  color?: `#${string}`;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  className?: string;

  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const ButtonAttrs = (props: ButtonProps) => ({
  color: props.color || '#ffffff',
  backgroundColor: props.backgroundColor || '#0C356A',
  fontSize: props.fontSize || '16px',
  borderRadius: props.borderRadius || '8px',
  padding: props.padding || '12px 32px',
});

const Button = styled(CustomButton).attrs(ButtonAttrs)`
  background: none;
  border: none;
  font-family: inherit;
  line-height: normal;
  cursor: pointer;
  height: fit-content;
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};

  &:hover {
    opacity: 0.9;
    /* box-shadow: 0 4px 6px -2px gray; */
  }
`;

// `

function CustomButton(props: ButtonProps) {
  return (
    <button
      className={props.className}
      type="button"
      onClick={(e) => (props.onClick ? props.onClick(e) : undefined)}
    >
      {props.children}
    </button>
  );
}

export default Button;
