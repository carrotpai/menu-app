import styled from 'styled-components';
import { device } from '@/utils/media/devices';

export const HeadCell = styled.th`
  padding-bottom: 16px;
  padding-right: 24px;
  font-size: 14px;
  font-weight: 400;
  width: 20%;
  &:last-child {
    width: 100%;
    white-space: nowrap;
  }

  &:nth-child(4) {
    width: 21%;
    @media ${device['2xl']} {
      width: 20%;
    }
  }

  &:nth-child(5) {
    width: 5%;
  }

  @media ${device.xl} {
    padding-right: 32px;
    font-size: 16px;
  }

  @media ${device['2xl']} {
    padding-right: 44px;
    font-size: 18px;
    width: 20%;
    &:last-child {
      width: 100%;
    }
  }
`;
