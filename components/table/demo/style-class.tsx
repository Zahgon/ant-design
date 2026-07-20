import React from 'react';
import { Flex, Table } from 'antd';
import type { GetProp, TableProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

interface DataType {
  key?: string;
  name?: string;
  age?: number;
  address?: string;
  description?: string;
}

const columns: TableProps<DataType>['columns'] = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Description', dataIndex: 'description', key: 'description' },
];

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 2 Lake Park',
    description: 'This user is disabled.',
  },
];

const styles: TableProps<DataType>['styles'] = {
  root: {
    padding: 10,
    borderRadius: 8,
  },
  pagination: {
    root: {
      padding: 10,
    },
  },
  body: {
    row: {
      outline: '1px dashed rgba(226, 225, 225, 0.1)',
    },
    cell: {
      outline: '1px dashed rgba(226, 225, 225, 0.1)',
    },
  },
};

const stylesFn: TableProps<DataType>['styles'] = (
  info,
): GetProp<TableProps<DataType>, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
