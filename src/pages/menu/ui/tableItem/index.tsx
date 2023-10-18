import { FilialType } from '@/types/filialTypes';
import React from 'react';

interface MenuTableItemProps {
  menuType?: string;
  filial: FilialType;

  //торговая точка
  tt: { id: number; name: string };
  isActive?: boolean;
  exportType?: string;
}

function TableItem({
  menuType = 'test menu type',
  filial,
  tt,
  isActive = false,
  exportType = 'нет',
}: MenuTableItemProps) {
  return (
    <tr>
      <td>{menuType}</td>
      <td>{filial.name}</td>
      <td>{tt.name}</td>
      <td>{isActive ? 'Активно' : 'Не активно'}</td>
      <td>{exportType}</td>
    </tr>
  );
}

export default TableItem;
