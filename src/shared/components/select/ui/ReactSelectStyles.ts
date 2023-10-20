import { GroupBase, StylesConfig } from 'react-select';

export const ReactSelectStyles: StylesConfig<
  {
    value?: string | number;
    label?: string | undefined;
  },
  false,
  GroupBase<{
    value?: string | number;
    label?: string | undefined;
  }>
> = {
  valueContainer(base, props) {
    return { ...base, padding: '0 8px' };
  },
  control(base, props) {
    return {
      ...base,
      borderColor: '#657A9D',
      width: '100%',
      height: '38px',
      minHeight: '38px',
      '@media (min-width: 1536px)': {
        height: '38px',
        minHeight: '38px',
      },
    };
  },
  placeholder(base, props) {
    return {
      ...base,
      color: '#657A9D',
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
      height: '36px',
      backgroundColor: '#072659',
    };
  },
  indicatorSeparator(base, props) {
    return {
      ...base,
      display: 'none',
    };
  },
  dropdownIndicator(base, props) {
    return {
      ...base,
      color: '#ffffff',
      ':hover': {
        color: '#DDDDDD',
      },
    };
  },
};
