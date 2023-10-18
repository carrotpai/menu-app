import ReactSelect from 'react-select';
import { Input } from '@/shared/components';

function TableHead() {
  return (
    <thead>
      <tr>
        <th>
          <Input />
        </th>
        <th>
          <Input />
        </th>
        <th>
          <Input />
        </th>
        <th>
          <ReactSelect />
        </th>
        <th>Экспорт</th>
      </tr>
    </thead>
  );
}

export default TableHead;
