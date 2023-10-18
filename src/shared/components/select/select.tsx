import { default as ReactSelect } from 'react-select';
import { SelectLabel } from './ui';

interface SelectProps {
  labelText?: string;
  //колбек в параметре e.target.value
  onChange?: (newValue: { value: number; label: string }) => void;
  value?: { value?: number; label?: string };
  options?: Array<{ value: number; label: string }>;
}

function Select({ labelText, options, value, onChange }: SelectProps) {
  return (
    <>
      <SelectLabel>{labelText}</SelectLabel>
      <ReactSelect
        defaultValue={value}
        onChange={
          onChange
            ? (newValue) => onChange({ value: newValue?.value ?? 0, label: newValue?.label ?? '' })
            : undefined
        }
        options={options}
      />
    </>
  );
}

export default Select;
