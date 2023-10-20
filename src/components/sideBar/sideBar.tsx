import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { AsideBar, BarContainer, BlueLine } from './ui';
import InfoCard from '../infoCard/infoCard';
import NavBar from '../navBar/navBar';
import { Divider, Select } from '@/shared/components';
import { useGetAllFilialsQuery } from '@/store/entities/filial/filialApi';
import { setCurrentFilial } from '@/store/entities/filial/filialSlice';
import { resetMenuFilter } from '@/store/entities/menu/menuSlice';
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

  const { data, isLoading } = useGetAllFilialsQuery();
  const filials = data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  useEffect(() => {
    if (data && !isLoading) {
      appDispatch(setCurrentFilial({ id: data[0].id, name: data[0].name }));
    }
  }, [isLoading, data]);

  return (
    <AsideBar>
      <InfoCard />
      <BarContainer>
        <BlueLine />
        <Select
          isLoading={isLoading}
          options={filials}
          value={currentFilial}
          onChange={(newValue) => {
            appDispatch(setCurrentFilial({ id: +newValue.value, name: newValue.label }));
            appDispatch(resetMenuFilter());
          }}
          labelText="Филиалы"
        />
        <Divider style={{ marginTop: '12px' }} width="2px" color="#657A9D" />
        <NavBar />
      </BarContainer>
    </AsideBar>
  );
}

export default SideBar;
