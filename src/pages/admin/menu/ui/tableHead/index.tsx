import { useCallback, useEffect, useState } from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';
import { HeadCell } from './HeadCell';
import { ReactSelectStyles } from './ReactSelectStyles';
import { Input } from '@/shared/components';
import { setActiveStatus, setFilterQuery } from '@/store/entities/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { MenuSearchQueryType } from '@/types/menuTypes';
import { debounce } from '@/utils/debounce';

const Row = styled.tr`
  border-bottom: 4px solid rgba(82, 109, 130, 0.2);
`;

const statusOptions: { value: 'active' | 'inactive'; label: string }[] = [
  { value: 'active', label: 'активно' },
  { value: 'inactive', label: 'не активно' },
];

export function TableHead() {
  const [filterValues, setFilterValues] = useState<MenuSearchQueryType & { [index: string]: any }>({
    menu_name: '',
    tt_name: '',
  });

  const appDispatch = useAppDispatch();
  const debouncedDispatch = useCallback(debounce(appDispatch, 500), []);

  const currentFilial = useAppSelector(
    (state) => state.filial.currentFilial,
    (a, b) => a?.id === b?.id
  );
  const activeStatus = useAppSelector((state) => state.menu.active_status);

  useEffect(() => {
    debouncedDispatch(setFilterQuery(filterValues));
    return () => debouncedDispatch.clear();
  }, [filterValues.menu_name, filterValues.tt_name]);

  const onChangeFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    setFilterValues((state) => {
      const newState = { ...state };
      newState[inputName] = value;
      return newState;
    });
  };

  return (
    <thead>
      <Row>
        <HeadCell>
          <Input
            placeholder="Название меню"
            name="menu_name"
            value={filterValues.menu_name}
            onChange={onChangeFilterInput}
          />
        </HeadCell>
        <HeadCell>
          <Input placeholder="Филиал" readOnly value={currentFilial?.name} />
        </HeadCell>
        <HeadCell>
          <Input
            placeholder="Торговая точка"
            name="tt_name"
            value={filterValues.tt_name}
            onChange={onChangeFilterInput}
          />
        </HeadCell>
        <HeadCell>
          <ReactSelect
            name="active_status"
            placeholder="статус..."
            value={
              activeStatus && {
                value: activeStatus,
                label: statusOptions.find((item) => item.value === activeStatus)?.label,
              }
            }
            onChange={(newValue) => appDispatch(setActiveStatus(newValue?.value))}
            styles={ReactSelectStyles}
            options={statusOptions}
          />
        </HeadCell>
        <HeadCell>Экспорт</HeadCell>
        <HeadCell />
      </Row>
    </thead>
  );
}
