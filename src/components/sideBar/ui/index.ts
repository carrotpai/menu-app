import styled from 'styled-components';
import { Container } from '@/shared/components';
import { device } from '@/utils/media/devices';

export const AsideBar = styled.aside`
  min-width: 230px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  @media ${device.xl} {
    min-width: 280px;
  }
  @media ${device['2xl']} {
    min-width: 300px;
  }
`;

export const BarContainer = styled(Container)`
  height: 80%;
  padding: 0 24px;
  border-right: 1px solid rgba(82, 109, 130, 0.4);
  scrollbar-gutter: stable both-edges;
`;
