import Skeleton from 'react-loading-skeleton';
import { shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { MenuContent, MenuFooter, MenuTable, TableHead, TableItem } from './ui';
import { Button, Container, Pagination, QueryStatusMessage } from '@/shared/components';
import { useGetMenuQuery } from '@/store/entities/menu/menuApi';
import { setPage } from '@/store/entities/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import 'react-loading-skeleton/dist/skeleton.css';

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
  const queryParams = useAppSelector(
    (state) => ({ page: state.menu.page, limit: state.menu.limit }),
    shallowEqual
  );
  const appDispatch = useAppDispatch();

  const {
    data: menuResponse,
    isFetching,
    isError,
  } = useGetMenuQuery(
    { filial_id: currentFilial?.id ?? 0, page: queryParams.page, limit: queryParams.limit },
    { skip: !currentFilial }
  );
  const currentPage = queryParams.page ?? 1;

  const isNeedMessage = !menuResponse || isFetching || isError;

  const getQueryMessage = () => {
    let text = '';
    if (isFetching) {
      console.log('загрузка');
      return Array(8)
        .fill(0)
        .map((_, ind) => (
          <tr key={`skeleton-menu-${ind}`}>
            <Cell colSpan={6}>
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
        <CellMessage colSpan={6}>
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
        <Pagination
          onPageClick={(pageNumber) => appDispatch(setPage(pageNumber))}
          onNextPageClick={() => {
            if (currentPage !== 3 /** max-pages*/) {
              appDispatch(setPage(currentPage + 1));
            }
          }}
          onPrevPageClick={() => {
            if (currentPage !== 0) {
              appDispatch(setPage(currentPage - 1));
            }
          }}
          key={`pag-${currentPage}-${menuResponse?.max_pages ?? 1}`}
          /**3 - для тестирования (тест данные только 1 страница) */
          lastPage={3 /* menuResponse?.max_pages ?? 0 */}
          currentPage={currentPage}
        />
        <Container display="flex" justifyContent="space-between" gap="16px">
          <Button>Добавить меню</Button>
          <Button>Импорт</Button>
        </Container>
      </MenuFooter>
    </MenuContent>
  );
}

export default MenuPage;
