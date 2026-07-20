import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType, TableProps } from 'antd';
import { Badge, Dropdown, Form, Space, Switch, Table } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const expandedColumns: TableProps<ExpandedDataType>['columns'] = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Status',
    key: 'state',
    render: () => { throw new Error("STUB"); },
  },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    render: () => { throw new Error("STUB"); },
  },
];

const expandedDataSource = Array.from({ length: 3 }).map<ExpandedDataType>((_, i) => { throw new Error("STUB"); });

const createExpandedRowRender = (bordered: boolean) => () => { throw new Error("STUB"); };

const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation', render: () => { throw new Error("STUB"); } },
];

const dataSource = Array.from({ length: 3 }).map<DataType>((_, i) => { throw new Error("STUB"); });

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
