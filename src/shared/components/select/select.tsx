import { default as ReactSelect } from 'react-select';
import { SelectLabel } from './ui';
import { ReactSelectStyles } from './ui/ReactSelectStyles';

interface SelectProps {
  placeholder?: string;
  labelText?: string;
  //колбек в параметре e.target.value
  onChange?: (newValue: { value: number | string; label: string }) => void;
  value?: { value?: number | string; label?: string } | null;
  options?: Array<{ value: number | string; label: string }>;
  isLoading?: boolean;
  name?: string;
  defaultValue?: { value?: number | string; label?: string } | null;
}

function Select({
  labelText,
  options,
  value,
  onChange,
  isLoading = false,
  name,
  placeholder,
  defaultValue,
}: SelectProps) {
  return (
    <>
      {labelText && <SelectLabel>{labelText}</SelectLabel>}
      <ReactSelect
        name={name}
        isLoading={isLoading}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={
          onChange
            ? (newValue) => onChange({ value: newValue?.value ?? 0, label: newValue?.label ?? '' })
            : undefined
        }
        options={options}
        styles={ReactSelectStyles}
      />
    </>
  );
}

export default Select;
