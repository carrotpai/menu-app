import styled from 'styled-components';
import DeleteIcon from '@/assets/delete.svg';
import GraphIcon from '@/assets/graph.svg';
import PencilIcon from '@/assets/pencil.svg';
import { IconButton } from '@/shared/components';
import { FilialType } from '@/types/filialTypes';
import { device } from '@/utils/media/devices';

interface MenuTableItemProps {
  menuType?: string;
  filial: FilialType;

  //торговая точка
  tt: { id: number; name: string };
  isActive?: boolean;
  exportType?: string;
}

const Cell = styled.td`
  font-size: 16px;
  padding-top: 24px;
  &:nth-child(5) {
    padding-right: 24px;
  }

  @media ${device.xl} {
    font-size: 20px;
  }

  @media ${device['2xl']} {
    &:nth-child(5) {
      padding-right: 0;
    }
  }
`;

const InteractiveButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
`;

export function TableItem({
  menuType = 'test menu type',
  filial,
  tt,
  isActive = false,
  exportType = 'нет',
}: MenuTableItemProps) {
  return (
    <tr>
      <Cell>{menuType}</Cell>
      <Cell>{filial.name}</Cell>
      <Cell>{tt.name}</Cell>
      <Cell>{isActive ? 'Активно' : 'Не активно'}</Cell>
      <Cell>{exportType}</Cell>
      <Cell>
        <InteractiveButtons>
          <IconButton icon={<GraphIcon />} onClick={() => console.log('go to graphs')} />
          <IconButton icon={<PencilIcon />} onClick={() => console.log('update menu item')} />
          <IconButton icon={<DeleteIcon />} onClick={() => console.log('delete menu item')} />
        </InteractiveButtons>
      </Cell>
    </tr>
  );
}
