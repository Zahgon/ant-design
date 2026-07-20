import React, { useState } from 'react';
import { Mentions } from 'antd';
import type { MentionsProps } from 'antd';

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

type PrefixType = keyof typeof MOCK_DATA;

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
