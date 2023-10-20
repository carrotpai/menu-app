import styled from 'styled-components';
import { Container } from '@/shared/components';
import { device } from '@/utils/media/devices';

export const Cell = styled(Container)`
  padding-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  width: 13%;
  &:last-child {
    width: 100%;
  }

  &:nth-child(4) {
    width: 20%;
    @media ${device['2xl']} {
      width: 25%;
    }
  }

  &:nth-child(5) {
    width: 29%;
  }

  @media ${device.xl} {
    font-size: 16px;
  }

  @media ${device['2xl']} {
    font-size: 18px;
    width: 30%;
    &:last-child {
      width: 50%;
    }
  }
`;
