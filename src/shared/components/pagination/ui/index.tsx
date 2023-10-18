import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 16px;
`;

export const PageItemsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;
`;

const customSpan = (props: {
  isActive?: boolean;
  isDots?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
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
  box-shadow: ${(props) => (props.isActive ? '0 2px 8px -2px gray' : 'none')};
  border-radius: 4px;
  &:hover {
    box-shadow: ${(props) => (!props.isDots ? '0 2px 8px -2px gray' : 'none')};
  }
`;
