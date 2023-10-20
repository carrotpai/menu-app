import styled from 'styled-components';
import { Container } from '@/shared/components';
import { device } from '@/utils/media/devices';

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const MenuFooter = styled(Container)`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

export const MenuTable = styled.div`
  width: 100%;
  text-align: left;
`;

export const Row = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  gap: 24px;

  @media ${device.xl} {
    gap: 36px;
  }

  @media ${device['2xl']} {
    gap: 44px;
  }
`;

export const HeadRow = styled(Row)`
  border-bottom: 2px solid ${(props) => props.theme.colors.main};
  margin-bottom: 16px;
`;
