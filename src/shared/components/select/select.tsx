import { FilialType } from '@/types/filialTypes';
import React from 'react';
import { default as ReactSelect } from 'react-select';

interface SelectProps {
  labelText?: string;
  options?: Array<{ id: number; name: string }>;
}

function Select({ labelText, options }: SelectProps) {
  return (
    <>
      <label>{labelText}</label>
      <ReactSelect options={options} />
    </>
  );
}

export default Select;
