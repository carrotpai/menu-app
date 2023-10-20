import styled from 'styled-components';
import { device } from '@/utils/media/devices';

export const CardText = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 16px;
  font-weight: 400;

  @media ${device.xl} {
    font-size: 18px;
  }
`;

export const CardTextUppercase = styled(CardText)`
  color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
`;
