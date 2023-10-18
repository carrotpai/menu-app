import TableHead from './ui/tableHead';
import TableItem from './ui/tableItem';
import { Pagination } from '@/shared/components';
import { useGetMenuQuery } from '@/store/entities/menu/menuApi';

function MenuPage() {
  const { data: menuResponse, isLoading, isError } = useGetMenuQuery({ filial_id: 1 });

  if (isLoading) return 'Загрузка';

  if (isError) return 'Ошибка';

  return (
    <div>
      <table>
        <TableHead />
        <tbody>
          {menuResponse?.data.map((item, ind) => (
            <TableItem key={`menu-item-${ind}`} filial={item.filial} tt={item.tt} />
          ))}
        </tbody>
      </table>
      <div>
        <Pagination lastPage={10} currentPage={2} />
        <div>
          <p>button1</p>
          <p>button2</p>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
