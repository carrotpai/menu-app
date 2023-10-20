import styled from 'styled-components';
import { Container } from '@/shared/components';
import { device } from '@/utils/media/devices';

export const AsideBar = styled.aside`
  min-width: 230px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  @media ${device.xl} {
    min-width: 270px;
  }
  @media ${device['2xl']} {
    min-width: 270px;
  }
`;

export const BarContainer = styled(Container)`
  height: 82%;
  padding: 0 24px;
  border-right: 1px solid #657a9d;
  scrollbar-gutter: stable both-edges;
  position: relative;
`;

export const BlueLine = styled.div`
  height: 110px;
  width: 5px;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 2px;
  position: absolute;
  top: 0;
  right: -3px;
`;
