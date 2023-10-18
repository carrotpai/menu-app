import styled from 'styled-components';
import { device } from '@/utils/media/devices';

export const SelectLabel = styled.label`
  color: #8f8f8f;
  font-size: 12px;
  @media ${device.sm} {
    font-size: 14px;
  }

  @media ${device.lg} {
    font-size: 16px;
  }
`;
