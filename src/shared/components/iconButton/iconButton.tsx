import styled from 'styled-components';

interface IconButtonsProps {
  icon: React.ReactNode;
  className?: string;
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  rotate?: string;
  size?: {
    width: number;
    height: number;
  };
}

const IconButton = styled(IconButtonComponent)`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  width: ${(props) => props.size?.width || '28px'};
  height: ${(props) => props.size?.height || '28px'};
  border: none;
  cursor: pointer;
  transform: rotate(${(props) => props.rotate});
  border-radius: 50%;
  &:hover {
    background-color: #eeeeee;
  }
`;

function IconButtonComponent({ icon, onClick, className }: IconButtonsProps) {
  return (
    <button className={className} onClick={onClick ? (e) => onClick(e) : undefined}>
      {icon}
    </button>
  );
}

export default IconButton;
