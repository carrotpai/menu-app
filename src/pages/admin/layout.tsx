import { Outlet } from 'react-router';
import styled from 'styled-components';
import SideBar from '@/components/sideBar/sideBar';

const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 800px;
`;

const Content = styled.div`
  width: 100%;
`;

function AdminPageLayout() {
  return (
    <Layout>
      <SideBar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default AdminPageLayout;
