import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';

type MaskType = 'blur' | 'dimmed' | 'none';
type DrawerConfig = {
  type: MaskType;
  mask: boolean | { blur: boolean };
  title: string;
};

const drawerList: DrawerConfig[] = [
  { type: 'blur', mask: { blur: true }, title: 'blur' },
  { type: 'dimmed', mask: true, title: 'Dimmed mask' },
  { type: 'none', mask: false, title: 'No mask' },
];
const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
