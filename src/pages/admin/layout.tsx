import { Outlet } from 'react-router';
import styled from 'styled-components';
import { SideBar } from '@/components';

const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-height: 800px;
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
