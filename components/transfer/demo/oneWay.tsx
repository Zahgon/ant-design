import React, { useState } from 'react';
import { Switch, Transfer } from 'antd';
import type { TransferProps } from 'antd';

interface RecordType {
  key: string;
  title: string;
  description: string;
  disabled: boolean;
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => { throw new Error("STUB"); });

const oriTargetKeys = mockData.filter((item) => { throw new Error("STUB"); }).map((item) => { throw new Error("STUB"); });

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
