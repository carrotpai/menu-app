import { shallowEqual } from 'react-redux';
import { AsideBar, BarContainer } from './ui';
import InfoCard from '../infoCard/infoCard';
import NavBar from '../navBar/navBar';
import { Divider, Select } from '@/shared/components';
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

  const { data, isLoading } = useGetAllFilialsQuery();
  const filials = data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  return (
    <AsideBar>
      <InfoCard />
      <BarContainer>
        <Select
          isLoading={isLoading}
          options={filials}
          value={currentFilial}
          onChange={(newValue) =>
            appDispatch(setCurrentFilial({ id: newValue.value, name: newValue.label }))
          }
          labelText="Филиалы"
        />
        <Divider style={{ marginTop: '12px' }} width="2px" />
        <NavBar />
      </BarContainer>
    </AsideBar>
  );
}

export default SideBar;
