import { Outlet } from 'react-router';
import styled from 'styled-components';

const MainLayout = styled.div`
  padding-top: 44px;
  width: 100%;
`;

function MainPageLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default MainPageLayout;
