import ReactSelect from 'react-select';
import styled from 'styled-components';
import { Input } from '@/shared/components';
import { device } from '@/utils/media/devices';

const HeadCell = styled.th`
  padding-bottom: 16px;
  padding-right: 24px;
  font-size: 14px;
  font-weight: 400;
  width: 20%;
  &:last-child {
    width: auto;
    white-space: nowrap;
    @media ${device['2xl']} {
      width: 100%;
    }
  }

  &:nth-child(4) {
    width: 25%;
    @media ${device['2xl']} {
      width: 20%;
    }
  }

  @media ${device.xl} {
    padding-right: 48px;
    font-size: 16px;
  }

  @media ${device['2xl']} {
    font-size: 18px;
    width: 18%;
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
                  width: '100%',
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
        <HeadCell colSpan={2}>Экспорт</HeadCell>
      </Row>
    </thead>
  );
}
