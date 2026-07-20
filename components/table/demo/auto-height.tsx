import React, { useEffect, useRef, useState } from 'react';
import { Flex, Switch, Table } from 'antd';
import type { GetRef, TableColumnsType, TableProps } from 'antd';

// ===================== HOC =====================
const measureClassNames = {
  header: 'measure-header',
  pagination: 'measure-pagination',
};

const tableClassNames = {
  header: {
    wrapper: measureClassNames.header,
  },
  pagination: {
    root: measureClassNames.pagination,
  },
};

type AutoHeightTableProps<RecordType extends object> = Omit<
  TableProps<RecordType>,
  'styles' | 'classNames'
>;

const AutoHeightTable = <RecordType extends object>(props: AutoHeightTableProps<RecordType>) => {
    throw new Error("STUB");
};

// ==================== Usage ====================

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '20%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '60%',
  },
];

const genData = (length: number): DataType[] => {
  return Array.from({ length }).map<DataType>((_, index) => { throw new Error("STUB"); });
};

const dataMore = genData(30);
const dataLess = genData(2);

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
