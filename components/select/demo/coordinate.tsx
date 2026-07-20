import React, { useState } from 'react';
import { Select, Space } from 'antd';

const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

type CityName = keyof typeof cityData;

const provinceData: CityName[] = ['Zhejiang', 'Jiangsu'];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
