import React, { useState } from 'react';
import { ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
import {
  Anchor,
  Badge,
  Button,
  Calendar,
  Card,
  Collapse,
  DatePicker,
  Dropdown,
  Modal,
  Slider,
  Switch,
  Table,
  Tabs,
  Timeline,
  Transfer,
  Tree,
  Typography,
} from 'antd';
import type { TableProps, TransferProps } from 'antd';
import type { TransferKey } from 'antd/es/transfer/interface';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import difference from 'lodash/difference';

dayjs.extend(customParseFormat);

const { Panel } = Collapse;
const { TreeNode } = Tree;
const { Meta } = Card;
const { Link } = Anchor;
const { Text } = Typography;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

interface DataType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}

interface RecordType {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface DataTableType {
  key: string;
  name: string;
  borrow: number;
  repayment: number;
}

interface ExpandDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

interface NestDataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface FixedDataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const mockData = Array.from({ length: 20 }).map<DataType>((_, i) => { throw new Error("STUB"); });

const oriTargetKeys = mockData
  .filter((item) => { throw new Error("STUB"); })
  .map<TransferKey>((item) => { throw new Error("STUB"); });

const dataSource: RecordType[] = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
  { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
];

const columnsTable: TableProps<DataTableType>['columns'] = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Borrow', dataIndex: 'borrow' },
  { title: 'Repayment', dataIndex: 'repayment' },
];

const summaryDataSource: DataTableType[] = [
  { key: '1', name: 'John Brown', borrow: 10, repayment: 33 },
  { key: '2', name: 'Jim Green', borrow: 100, repayment: 0 },
  { key: '3', name: 'Joe Black', borrow: 10, repayment: 10 },
  { key: '4', name: 'Jim Red', borrow: 75, repayment: 45 },
];

const expandDataSource = Array.from({ length: 3 }).map<ExpandDataType>((_, i) => { throw new Error("STUB"); });

const expandColumns: TableProps<ExpandDataType>['columns'] = [
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

const expandedRowRender = () => { throw new Error("STUB"); };

const columnsNest: TableProps<NestDataType>['columns'] = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation', render: () => { throw new Error("STUB"); } },
];

const nestDataSource = Array.from({ length: 3 }).map<NestDataType>((_, i) => { throw new Error("STUB"); });

const columnsFixed: TableProps<FixedDataType>['columns'] = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'start' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'start' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  { title: 'Action', key: 'operation', fixed: 'end', width: 100, render: () => { throw new Error("STUB"); } },
];

const fixedDataSource: FixedDataType[] = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York Park' },
  { key: '2', name: 'Jim Green', age: 40, address: 'London Park' },
];

const TableTransfer: React.FC<
  Readonly<Partial<Record<'leftColumns' | 'rightColumns', TableProps<DataType>['columns']>>> &
    TransferProps<DataType>
> = (props) => {
    throw new Error("STUB");
};

const columns: TableProps<RecordType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filters: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' },
    ],
    filteredValue: null,
    onFilter: (value, record) => { throw new Error("STUB"); },
    sorter: (a, b) => { throw new Error("STUB"); },
    sortOrder: 'ascend',
    ellipsis: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: false,
    sortOrder: 'ascend',
    ellipsis: true,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filters: [
      { text: 'London', value: 'London' },
      { text: 'New York', value: 'New York' },
    ],
    filteredValue: null,
    onFilter: (value, record) => { throw new Error("STUB"); },
    sorter: false,
    sortOrder: 'ascend',
    ellipsis: true,
  },
];

const tableTransferColumns: TableProps<DataType>['columns'] = [
  { dataIndex: 'title', title: 'Name' },
  { dataIndex: 'description', title: 'Description' },
];

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
