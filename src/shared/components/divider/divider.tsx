import React from 'react';
import styled from 'styled-components';

interface DividerProps {
  width?: string;
  className?: never;
  style?: React.CSSProperties;
}

const Divider = styled(DividerComponent)`
  display: block;
  border-top: ${(props) => `${props.width || '4px'} solid rgba(82, 109, 130, 0.2)`};
  width: 100%;
`;

function DividerComponent(props: DividerProps) {
  return <hr className={props.className} style={props.style} />;
}

export default Divider;
