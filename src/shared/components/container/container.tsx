import styled from 'styled-components';

interface ContainerProps {
  className?: never;
  display?: 'block' | 'flex' | 'inline-block' | 'inline';
  gap?: string;
  pt?: string;
  pb?: string;
  pr?: string;
  pl?: string;
  mt?: string;
  mb?: string;
  margin?: string;
  padding?: string;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  direction?: 'row' | 'column';
  wrap?: 'wrap' | 'nowrap';
  height?: string;
  width?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

const Container = styled(ContainerComponent)`
  display: ${(props) => props.display || 'block'};
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  justify-content: ${(props) => props.justifyContent || ''};
  align-items: ${(props) => props.alignItems || ''};
  gap: ${(props) => props.gap || ''};
  padding-top: ${(props) => props.pt || '0'};
  padding-bottom: ${(props) => props.pb || '0'};
  padding-right: ${(props) => props.pr || '0'};
  padding-left: ${(props) => props.pl || '0'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

function ContainerComponent(props: ContainerProps) {
  return (
    <div style={props.styles} className={props.className}>
      {props.children}
    </div>
  );
}

export default Container;
