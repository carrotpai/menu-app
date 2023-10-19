import styled from 'styled-components';
import { device } from '@/utils/media/devices';

export const CardText = styled.p`
  color: #8f8f8f;
  font-size: 14px;

  @media ${device.xl} {
    font-size: 16px;
  }
`;

export const CardTextUppercase = styled(CardText)`
  color: #000000;
  font-weight: 500;
  text-transform: uppercase;
`;
