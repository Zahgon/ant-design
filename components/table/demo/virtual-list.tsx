import React from 'react';
import { Button, Segmented, Space, Switch, Table, Typography } from 'antd';
import type { TableProps } from 'antd';

interface RecordType {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address1: string;
  address2: string;
  address3: string;
}

const fixedColumns: TableProps<RecordType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'start',
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120,
    fixed: 'start',
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    width: 120,
    fixed: 'start',
  },
  {
    title: 'Group',
    width: 120,
    render: (_, record) => { throw new Error("STUB"); },
    onCell: (record) => { throw new Error("STUB"); },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 100,
    onCell: (record) => { throw new Error("STUB"); },
  },
  {
    title: 'Address 1',
    dataIndex: 'address1',
    onCell: (record) => { throw new Error("STUB"); },
  },
  {
    title: 'Address 2',
    dataIndex: 'address2',
  },
  {
    title: 'Address 3',
    dataIndex: 'address3',
  },
  {
    title: 'Action',
    width: 150,
    fixed: 'end',
    render: () => { throw new Error("STUB"); },
  },
];

const columns: TableProps<RecordType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: 'FistName',
    dataIndex: 'firstName',
    width: 120,
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
  },
];

const getData = (length: number) =>
  Array.from({ length }).map<RecordType>((_, index) => { throw new Error("STUB"); });

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
