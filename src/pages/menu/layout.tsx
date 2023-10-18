import React from 'react';
import { Outlet } from 'react-router';

function MenuPageLayout() {
  return (
    <div>
      <p>MenuPageLayout</p>
      <Outlet />
    </div>
  );
}

export default MenuPageLayout;
