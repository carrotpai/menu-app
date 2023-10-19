import styled from 'styled-components';
import { device } from '@/utils/media/devices';

interface AvatarProps {
  name: string;
  size?: string;
  backgroundColor?: string;
  color?: string;

  className?: never;
}

const Avatar = styled(AvatarComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${(props) => props.size || '36px'};
  height: ${(props) => props.size || '36px'};
  background-color: ${(props) => props.backgroundColor || props.theme.colors.main};
  color: ${(props) => props.color || '#ffffff'};

  @media ${device.xl} {
    width: ${(props) => props.size || '48px'};
    height: ${(props) => props.size || '48px'};
  }
`;

function AvatarComponent({ name, className }: AvatarProps) {
  return (
    <div className={className}>
      <span style={{ display: 'block', marginBottom: '2px' }}>{name.charAt(0).toUpperCase()}</span>
    </div>
  );
}

export default Avatar;
