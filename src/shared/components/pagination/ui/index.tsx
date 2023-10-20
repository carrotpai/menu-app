import styled from 'styled-components';

const customSpan = (props: {
  isActive?: boolean;
  isDots?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: never;
}) => {
  return (
    <span
      className={props.className}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
    >
      {props.children}
    </span>
  );
};

export const PageItem = styled(customSpan)`
  cursor: ${(props) => (props.isDots ? 'auto' : 'pointer')};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => (props.isActive ? props.theme.shadow.main : 'none')};
  border-radius: 4px;
  &:hover {
    box-shadow: ${(props) => (!props.isDots ? props.theme.shadow.main : 'none')};
  }
`;
