import { Select } from '@/shared/components';
import { useGetAllFilialsQuery } from '@/store/entities/filial/filialApi';

function SideBar() {
  const { data: filials, isLoading } = useGetAllFilialsQuery();
  return (
    <aside>
      <Select options={filials} labelText="Филиалы" />
    </aside>
  );
}

export default SideBar;
