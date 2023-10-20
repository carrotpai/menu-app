import { useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { HeadCell } from './HeadCell';
import { Input, Select } from '@/shared/components';
import { setActiveStatus, setFilterQuery } from '@/store/entities/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { MenuSearchQueryType } from '@/types/menuTypes';
import { debounce } from '@/utils/debounce';

type ActiveStatus = 'active' | 'no_active' | undefined;

const Row = styled.tr`
  border-bottom: 2px solid ${(props) => props.theme.colors.main};
`;

const statusOptions: { value: 'active' | 'no_active'; label: string }[] = [
  { value: 'active', label: 'активно' },
  { value: 'no_active', label: 'не активно' },
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
  const storeQueryVals = useAppSelector(
    (state) => ({
      name: state.menu.menu_name,
      tt: state.menu.tt_name,
      activeStatus: state.menu.active_status,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (storeQueryVals.name === '' && storeQueryVals.tt === '' && !storeQueryVals.activeStatus) {
      setFilterValues((state) => ({ menu_name: '', tt_name: '' }));
    }
  }, [storeQueryVals]);

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
          <Input placeholder="Филиал" readOnly value={currentFilial?.name ?? ''} />
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
          <Select
            name="active_status"
            placeholder="статус..."
            value={
              storeQueryVals.activeStatus
                ? {
                    value: storeQueryVals.activeStatus,
                    label: statusOptions.find((item) => item.value === storeQueryVals.activeStatus)
                      ?.label,
                  }
                : null
            }
            onChange={(newValue) => appDispatch(setActiveStatus(newValue?.value as ActiveStatus))}
            options={statusOptions}
          />
        </HeadCell>
        <HeadCell>Экспорт</HeadCell>
        <HeadCell />
      </Row>
    </thead>
  );
}
