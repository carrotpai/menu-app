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
  exportType?: string[];
}

const Cell = styled.td`
  font-size: 16px;
  padding-top: 24px;

  @media ${device.xl} {
    font-size: 20px;
  }

  @media ${device['2xl']} {
    &:last-child {
      padding-right: 48px;
    }
  }
`;

const InteractiveButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  gap: 4px;
  @media ${device.xl} {
    gap: 8px;
  }
`;

const CellText = styled.p`
  max-width: 250px;
  overflow-wrap: break-word;
`;

export function TableItem({
  menuType = 'test menu type',
  filial,
  tt,
  isActive = false,
  exportType,
}: MenuTableItemProps) {
  return (
    <tr>
      <Cell>
        <CellText>{menuType}</CellText>
      </Cell>
      <Cell>
        <CellText>{filial.name}</CellText>
      </Cell>
      <Cell>
        <CellText>{tt.name}</CellText>
      </Cell>
      <Cell>{isActive ? 'Активно' : 'Не активно'}</Cell>
      <Cell>
        <CellText>{exportType?.length ? exportType.join(', ') : 'нет'}</CellText>
      </Cell>
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
