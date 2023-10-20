import { GroupBase, StylesConfig } from 'react-select';

export const ReactSelectStyles: StylesConfig<
  {
    value: 'active' | 'inactive';
    label: string | undefined;
  },
  false,
  GroupBase<{
    value: 'active' | 'inactive';
    label: string | undefined;
  }>
> = {
  control(base, props) {
    return {
      ...base,
      width: '100%',
      height: '38px',
      minHeight: '38px',
      '@media (min-width: 1536px)': {
        height: '41px',
        minHeight: '41px',
      },
    };
  },
  placeholder(base, props) {
    return {
      ...base,
      fontSize: '14px',
      fontWeight: 400,
      '@media (min-width: 1280px)': {
        fontSize: '18px',
      },
    };
  },
  indicatorsContainer(base, props) {
    return {
      ...base,
      height: '38px',
      '@media (min-width: 1536px)': {
        height: '41px',
      },
    };
  },
};
