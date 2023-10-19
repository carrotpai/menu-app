import { paths } from '@/app/paths';

export const navBarLinks = [
  {
    label: 'Компоненты',
    href: paths.admin.components,
  },
  {
    label: 'Полуфабрикаты',
    href: paths.admin.semimanufactures,
  },
  {
    label: 'Товары',
    href: paths.admin.products,
  },
  {
    label: 'Меню',
    href: paths.admin.menu,
  },
  {
    label: 'Перемещения',
    href: paths.admin.logistic,
  },
  {
    label: 'Инвентаризация',
    href: paths.admin.inventory,
  },
  {
    label: 'Выпуск товара',
    href: paths.admin.production,
  },
  {
    label: 'Списание',
    href: paths.admin.writeDowns,
  },
  {
    label: 'Накладные',
    href: paths.admin.invoices,
  },
];
