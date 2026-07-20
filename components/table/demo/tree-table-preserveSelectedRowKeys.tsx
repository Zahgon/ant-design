import React, { useState } from 'react';
import { Space, Switch, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const dataSource = Array.from({ length: 15 }).map<DataType>((_, i) => { throw new Error("STUB"); });

// rowSelection objects indicates the need for row selection
const rowSelection: TableRowSelection<DataType> = {
  onChange: (selectedRowKeys, selectedRows, info) => {
        throw new Error("STUB");
    },
  onSelect: (record, selected, selectedRows) => {
      throw new Error("STUB");
  },
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
