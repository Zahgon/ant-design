import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { GetProp, RadioChangeEvent, TableProps } from 'antd';
import { Form, Radio, Space, Switch, Table } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
    throw new Error("STUB");
});

type SizeType = TableProps['size'];
type ColumnsType<T extends object> = GetProp<TableProps<T>, 'columns'>;
type TablePagination<T extends object> = NonNullable<Exclude<TableProps<T>['pagination'], boolean>>;
type TablePaginationPlacement = NonNullable<TablePagination<any>['placement']>[number];
type ExpandableConfig<T extends object> = TableProps<T>['expandable'];
type TableRowSelection<T extends object> = TableProps<T>['rowSelection'];

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

const data = Array.from({ length: 10 }).map<DataType>((_, i) => { throw new Error("STUB"); });

const defaultExpandable: ExpandableConfig<DataType> = {
  expandedRowRender: (record: DataType) => { throw new Error("STUB"); },
};

const defaultTitle = () => { throw new Error("STUB"); };
const defaultFooter = () => { throw new Error("STUB"); };

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
