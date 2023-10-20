import React from 'react';
import styled from 'styled-components';

interface DividerProps {
  width?: string;
  color?: string;
  className?: never;
  style?: React.CSSProperties;
}

const Divider = styled(DividerComponent)`
  display: block;
  border-top: ${(props) =>
    `${props.width || '4px'} solid ${props.color || props.theme.colors.main})`};
  width: 100%;
`;

function DividerComponent(props: DividerProps) {
  return <hr className={props.className} style={props.style} />;
}

export default Divider;
