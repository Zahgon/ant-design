import React, { useState } from 'react';
import { Transfer } from 'antd';
import type { TransferProps } from 'antd';

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData = Array.from({ length: 10 }).map<RecordType>((_, i) => { throw new Error("STUB"); });

const oriTargetKeys = mockData.filter((item) => { throw new Error("STUB"); }).map((item) => { throw new Error("STUB"); });

const selectAllLabels: TransferProps['selectAllLabels'] = [
  'Select All',
  ({ selectedCount, totalCount }) => { throw new Error("STUB"); },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
