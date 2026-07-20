import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
];

const dataSource = Array.from({ length: 46 }).map<DataType>((_, i) => { throw new Error("STUB"); });

const rowSelection: TableRowSelection<DataType> = {
  renderCell: (checked, _record, index, node) => { throw new Error("STUB"); },
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
