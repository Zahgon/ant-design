import React, { useState } from 'react';
import { InputNumber, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

const RenderTimes: React.FC = () => {
    throw new Error("STUB");
};

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const shouldCellUpdate = (record: DataType, prevRecord: DataType) => { throw new Error("STUB"); };

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    shouldCellUpdate,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    shouldCellUpdate,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    shouldCellUpdate,
    render: (addr) => { throw new Error("STUB"); },
  },
];

function genData(length: number) {
  return Array.from({ length }).map<DataType>((_, i) => { throw new Error("STUB"); });
}

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
