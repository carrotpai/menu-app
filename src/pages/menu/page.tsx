import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { MenuContent, MenuFooter, MenuTable, TableHead, TableItem } from './ui';
import { Button, Pagination, QueryStatusMessage } from '@/shared/components';
import { useGetMenuQuery } from '@/store/entities/menu/menuApi';
import { useAppSelector } from '@/store/store';
import 'react-loading-skeleton/dist/skeleton.css';

const InteractiveButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const CellMessage = styled.td`
  padding: 100px 0;
`;

const Cell = styled.td`
  padding-top: 24px;
`;

function MenuPage() {
  const currentFilial = useAppSelector(
    (state) => state.filial.currentFilial,
    (a, b) => a?.id === b?.id
  );
  const {
    data: menuResponse,
    isFetching,
    isError,
  } = useGetMenuQuery({ filial_id: currentFilial?.id ?? 0 }, { skip: !currentFilial });
  const currentPage = 2;

  const isNeedMessage = !menuResponse || isFetching || isError;

  const getQueryMessage = () => {
    let text = '';
    if (isFetching) {
      console.log('загрузка');
      return Array(8)
        .fill(0)
        .map((_, ind) => (
          <tr key={`skeleton-menu-${ind}`}>
            <Cell colSpan={5}>
              <Skeleton
                inline={true}
                style={{ display: 'inline-block' }}
                height={'40px'}
                duration={2}
              />
            </Cell>
          </tr>
        ));
    }

    if (!menuResponse) {
      text = 'Нет данных';
    }

    if (isError) {
      text = 'Произошла ошибка, попробуйте позже или сообщите нам';
    }

    return (
      <tr>
        <CellMessage colSpan={5}>
          <QueryStatusMessage text={text} />
        </CellMessage>
      </tr>
    );
  };

  return (
    <MenuContent>
      <MenuTable>
        <TableHead />
        <tbody>
          {isNeedMessage
            ? getQueryMessage()
            : menuResponse?.data.map((item, ind) => (
                <TableItem key={`menu-item-${ind}`} filial={item.filial} tt={item.tt} />
              ))}
        </tbody>
      </MenuTable>
      <MenuFooter>
        <Pagination key={`pag-${currentPage}`} lastPage={3} currentPage={1} />
        <InteractiveButtons>
          <Button>Добавить меню</Button>
          <Button>Импорт</Button>
        </InteractiveButtons>
      </MenuFooter>
    </MenuContent>
  );
}

export default MenuPage;
