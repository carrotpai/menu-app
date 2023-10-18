import { shallowEqual } from 'react-redux';
import { AsideBar } from './ui';
import { Select } from '@/shared/components';
import { useGetAllFilialsQuery } from '@/store/entities/filial/filialApi';
import { setCurrentFilial } from '@/store/entities/filial/filialSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

function SideBar() {
  const appDispatch = useAppDispatch();
  const currentFilial = useAppSelector(
    (state) => ({
      value: state.filial.currentFilial?.id,
      label: state.filial.currentFilial?.name,
    }),
    shallowEqual
  );

  const { data } = useGetAllFilialsQuery();
  const filials = data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  return (
    <AsideBar>
      <Select
        options={filials}
        value={currentFilial}
        onChange={(newValue) =>
          appDispatch(setCurrentFilial({ id: newValue.value, name: newValue.label }))
        }
        labelText="Филиалы"
      />
    </AsideBar>
  );
}

export default SideBar;
