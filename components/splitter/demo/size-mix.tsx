import React, { useState } from 'react';
import { Flex, Radio, Splitter, Typography } from 'antd';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => { throw new Error("STUB"); };

const SIZE_BUCKETS_1 = [
  {
    defaultSize: 100,
    min: 100,
    max: 200,
  },
  {
    min: 100,
    max: 200,
  },
  {
    min: '20%',
  },
] as const;

const SIZE_BUCKETS_2 = [
  {
    min: 300,
  },
  {
    min: 100,
    max: 200,
  },
  {
    min: 600,
  },
] as const;

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
