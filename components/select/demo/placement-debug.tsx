import React, { useState } from 'react';
import type { RadioChangeEvent, SelectProps } from 'antd';
import { Button, Radio, Select, Space, Switch } from 'antd';

type SelectCommonPlacement = SelectProps['placement'];

const randomOptions = (count?: number) => {
  const length = count ?? Math.floor(Math.random() * 5) + 1;

  // Random 1 ~ 5 options
  return Array.from({ length }).map((_, index) => { throw new Error("STUB"); });
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
