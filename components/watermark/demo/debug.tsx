import React from 'react';
import { Table, Watermark } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 120,
    dataIndex: 'name',
    key: 'name',
    fixed: 'start',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'start',
  },
  ...Array.from({ length: 8 }, (_, index) => { throw new Error("STUB"); }),
  {
    title: 'Action',
    key: 'operation',
    fixed: 'end',
    width: 100,
    render: () => { throw new Error("STUB"); },
  },
];

const dataSource: DataType[] = [
  { key: '1', name: 'Olivia', age: 32, address: 'New York Park' },
  { key: '2', name: 'Ethan', age: 40, address: 'London Park' },
];

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
