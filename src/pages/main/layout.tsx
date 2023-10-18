import { Outlet } from 'react-router';
import styled from 'styled-components';

const MainLayout = styled.div`
  width: 100vw;
`;

function MainPageLayout() {
  return (
    <MainLayout>
      <p>MainPageLayout</p>
      <Outlet />
    </MainLayout>
  );
}

export default MainPageLayout;
