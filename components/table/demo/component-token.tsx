import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { ConfigProviderProps, GetProp, RadioChangeEvent, TableProps } from 'antd';
import { ConfigProvider, Form, Radio, Space, Switch, Table } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];
type ColumnsType<T extends object> = GetProp<TableProps<T>, 'columns'>;
type TablePagination = Exclude<GetProp<TableProps, 'pagination'>, boolean>;
type TablePaginationPlacement = NonNullable<TablePagination['placement']>[number];
type ExpandableConfig<T extends object> = GetProp<TableProps<T>, 'expandable'>;
type TableRowSelection<T extends object> = GetProp<TableProps<T>, 'rowSelection'>;

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => { throw new Error("STUB"); },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => { throw new Error("STUB"); },
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => { throw new Error("STUB"); },
  },
];

const dataSource = Array.from({ length: 10 }).map<DataType>((_, i) => { throw new Error("STUB"); });

const defaultExpandable: ExpandableConfig<DataType> = {
  expandedRowRender: (record: DataType) => { throw new Error("STUB"); },
};

const defaultTitle = () => { throw new Error("STUB"); };
const defaultFooter = () => { throw new Error("STUB"); };

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
