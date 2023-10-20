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
    (state) => ({
      page: state.menu.page,
      limit: state.menu.limit,
      name: state.menu.menu_name,
      tt: state.menu.tt_name,
      active: state.menu.active_status,
    }),
    shallowEqual
  );
  const appDispatch = useAppDispatch();

  const {
    data: menuResponse,
    isFetching,
    isError,
  } = useGetMenuQuery(
    { filial_id: currentFilial?.id ?? 0, ...queryParams },
    { skip: !currentFilial }
  );

  const getLastPage = () => {
    if (menuResponse) {
      return 'message' in menuResponse ? 1 : menuResponse.max_pages ?? 1;
    }
    return 1;
  };
  const currentPage = queryParams.page ?? 1;
  const lastPage = getLastPage();

  const isNeedMessage = !menuResponse || 'message' in menuResponse || isFetching || isError;

  const getQueryMessage = () => {
    let text = '';
    if (isFetching) {
      return Array(9)
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

    if (menuResponse && 'message' in menuResponse) {
      text = menuResponse.message;
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
                <TableItem
                  key={`menu-item-${ind}`}
                  menuType={item.name}
                  filial={item.filial}
                  isActive={item.active}
                  tt={item.tt}
                  exportType={item.export}
                />
              ))}
        </tbody>
      </MenuTable>
      <MenuFooter justifyContent={lastPage !== 1 ? 'space-between' : 'flex-end'}>
        {lastPage !== 1 && (
          <Pagination
            onPageClick={(pageNumber) => appDispatch(setPage(pageNumber))}
            onNextPageClick={() => {
              if (currentPage !== lastPage) {
                appDispatch(setPage(currentPage + 1));
              }
            }}
            onPrevPageClick={() => {
              if (currentPage !== 0) {
                appDispatch(setPage(currentPage - 1));
              }
            }}
            key={`pag-${currentPage}-${lastPage}`}
            lastPage={lastPage}
            currentPage={currentPage}
          />
        )}
        <Container display="flex" justifyContent="space-between" gap="16px">
          <Button>Добавить меню</Button>
          <Button>Импорт</Button>
        </Container>
      </MenuFooter>
    </MenuContent>
  );
}

export default MenuPage;
