import styled from 'styled-components';
import { Cell } from '../Cell';
import { Row } from '../menuContent';
import DeleteIcon from '@/assets/delete.svg';
import GraphIcon from '@/assets/graph.svg';
import PencilIcon from '@/assets/pencil.svg';
import { Container, IconButton } from '@/shared/components';
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

const RowCell = styled(Cell)`
  font-size: 16px;
  padding-bottom: 24px;

  @media ${device.xl} {
    font-size: 18px;
  }

  @media ${device['2xl']} {
    font-size: 20px;
  }
`;

const InteractiveButtons = styled(Container)`
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  gap: 4px;
  @media ${device.xl} {
    gap: 8px;
  }
  @media ${device['2xl']} {
    margin-right: 32px;
  }
`;

const CellText = styled.p`
  overflow-wrap: anywhere;
`;

export function TableItem({
  menuType = 'test menu type',
  filial,
  tt,
  isActive = false,
  exportType,
}: MenuTableItemProps) {
  return (
    <Row>
      <RowCell>
        <CellText>{menuType}</CellText>
      </RowCell>
      <RowCell>
        <CellText>{filial.name}</CellText>
      </RowCell>
      <RowCell>
        <CellText>{tt.name}</CellText>
      </RowCell>
      <RowCell>{isActive ? 'Активно' : 'Не активно'}</RowCell>
      <RowCell display="flex" direction="row" wrap="nowrap" justifyContent="space-between">
        <CellText>{exportType?.length ? exportType.join(', ') : 'нет'}</CellText>
        <InteractiveButtons>
          <IconButton icon={<GraphIcon />} onClick={() => console.log('go to graphs')} />
          <IconButton icon={<PencilIcon />} onClick={() => console.log('update menu item')} />
          <IconButton icon={<DeleteIcon />} onClick={() => console.log('delete menu item')} />
        </InteractiveButtons>
      </RowCell>
    </Row>
  );
}
