import { createBrowserRouter } from 'react-router-dom';
import { paths } from '../paths';
import { ProtectedRoute } from '@/components';
import {
  AdminPage,
  AdminPageLayout,
  ComponentPage,
  InventoryPage,
  InvoicePage,
  LogisticPage,
  MainPage,
  MainPageLayout,
  MenuPage,
  MenuPageLayout,
  ProductionPage,
  ProductsPage,
  SemimanufacturePage,
  WriteDownPage,
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
              {
                element: <ComponentPage />,
                path: paths.admin.components,
              },
              {
                element: <ProductsPage />,
                path: paths.admin.products,
              },
              {
                element: <InvoicePage />,
                path: paths.admin.invoices,
              },
              {
                element: <InventoryPage />,
                path: paths.admin.inventory,
              },
              {
                element: <LogisticPage />,
                path: paths.admin.logistic,
              },
              {
                element: <ProductionPage />,
                path: paths.admin.production,
              },
              {
                element: <SemimanufacturePage />,
                path: paths.admin.semimanufactures,
              },
              {
                element: <WriteDownPage />,
                path: paths.admin.writeDowns,
              },
            ],
          },
        ],
      },
    ],
  },
]);

//в лучшем случае подразбить роуты на отдельные файлики
