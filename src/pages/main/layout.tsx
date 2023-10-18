import React from 'react';
import { Outlet } from 'react-router';

function MainPageLayout() {
  return (
    <div>
      <p>MainPageLayout</p>
      <Outlet />
    </div>
  );
}

export default MainPageLayout;
