import ReactSelect from 'react-select';
import styled from 'styled-components';
import { Input } from '@/shared/components';

const HeadCell = styled.th`
  padding: 0px 32px 16px 0px;
  &:last-child {
    width: 100%;
  }
`;

const Row = styled.tr`
  border-bottom: 4px solid rgba(82, 109, 130, 0.2);
`;

const statusOptions = [
  { value: 'active', label: 'активно' },
  { value: 'inactive', label: 'не активно' },
];

export function TableHead() {
  return (
    <thead>
      <Row>
        <HeadCell>
          <Input placeholder="Название меню" />
        </HeadCell>
        <HeadCell>
          <Input placeholder="Филиал" />
        </HeadCell>
        <HeadCell>
          <Input placeholder="Торговая точка" />
        </HeadCell>
        <HeadCell>
          <ReactSelect
            placeholder="статус..."
            styles={{
              control(base, props) {
                return {
                  ...base,
                  width: '180px',
                };
              },
              placeholder(base, props) {
                return {
                  ...base,
                  fontSize: '18px',
                  fontWeight: 400,
                };
              },
            }}
            options={statusOptions}
          />
        </HeadCell>
        <HeadCell
          style={{
            font: 'inherit',
            fontSize: '18px',
            fontWeight: 400,
          }}
        >
          Экспорт
        </HeadCell>
      </Row>
    </thead>
  );
}
