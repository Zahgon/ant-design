import React, { useState } from 'react';
import { ConfigProvider, FloatButton, Slider } from 'antd';
import type { ConfigProviderProps, GetProp } from 'antd';

type AliasToken = GetProp<ConfigProviderProps, 'theme'>['token'];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
