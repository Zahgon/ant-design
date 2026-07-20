import React, { useState } from 'react';
import { ConfigProvider, Space, Switch, Table, Tag, Transfer } from 'antd';
import type { GetProp, TableColumnsType, TableProps, TransferProps } from 'antd';
import difference from 'lodash/difference';

type TableRowSelection<T> = TableProps<T>['rowSelection'];

type TransferItem = GetProp<TransferProps, 'dataSource'>[number];

interface RecordType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
  tag: string;
}

interface DataType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
  tag: string;
}

interface TableTransferProps extends TransferProps<TransferItem> {
  dataSource: DataType[];
  leftColumns: TableColumnsType<DataType>;
  rightColumns: TableColumnsType<DataType>;
}

// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }: TableTransferProps) => { throw new Error("STUB"); };

const mockTags = ['cat', 'dog', 'bird'];

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => { throw new Error("STUB"); });

const leftTableColumns: TableColumnsType<DataType> = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag) => { throw new Error("STUB"); },
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];

const rightTableColumns: TableColumnsType<DataType> = [
  {
    dataIndex: 'title',
    title: 'Name',
  },
];

const initialTargetKeys = mockData.filter((item) => { throw new Error("STUB"); }).map((item) => { throw new Error("STUB"); });

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
