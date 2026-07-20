import React, { useState } from 'react';
import type { GetProp } from 'antd';
import { Button, ConfigProvider, Empty, Table } from 'antd';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
}

const genFakeData = (count = 5) =>
  { throw new Error("STUB"); };

const renderEmpty: GetProp<typeof ConfigProvider, 'renderEmpty'> = (componentName) => {
  if (componentName === 'Table.filter' /** 👈 5.20.0+ */) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Filter(Custom)" />;
  }
};

function App() {
    throw new Error("STUB");
}

export default App;
