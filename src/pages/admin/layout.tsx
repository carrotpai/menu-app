import { Outlet } from 'react-router';
import SideBar from '@/components/sideBar/sideBar';

import styles from './layout.module.scss';

function AdminPageLayout() {
  return (
    <div className={styles.layout}>
      <SideBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageLayout;
