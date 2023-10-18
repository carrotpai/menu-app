import { createBrowserRouter } from 'react-router-dom';
import { paths } from '../paths';
import { ProtectedRoute } from '@/components';
import {
  AdminPage,
  AdminPageLayout,
  MainPage,
  MainPageLayout,
  MenuPage,
  MenuPageLayout,
} from '@/pages';

export const router = createBrowserRouter([
  {
    path: paths.index,
    element: <MainPageLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        element: <ProtectedRoute forRoles={['admin', 'manager', 'courier']} />,
        children: [
          {
            path: paths.admin.index,
            element: <AdminPageLayout />,
            children: [
              {
                index: true,
                element: <AdminPage />,
              },
              {
                element: <ProtectedRoute forRoles={['admin', 'manager']} />,
                children: [
                  {
                    path: paths.admin.menu,
                    element: <MenuPageLayout />,
                    children: [
                      {
                        index: true,
                        element: <MenuPage />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
