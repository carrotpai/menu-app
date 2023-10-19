import { Outlet } from 'react-router';
import styled from 'styled-components';

const MenuLayout = styled.div`
  height: 100%;
  padding: 0 64px 0 36px;
`;

function MenuPageLayout() {
  return (
    <MenuLayout>
      <Outlet />
    </MenuLayout>
  );
}

export default MenuPageLayout;
