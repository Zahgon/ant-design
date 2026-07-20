import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Divider, Tabs } from 'antd';

const CheckboxGroup = Checkbox.Group;

const operations = <Button>Extra Action</Button>;

const operationsSlot: Record<PositionType, React.ReactNode> = {
  left: <Button style={{ marginInlineEnd: 16 }}>Left Extra Action</Button>,
  right: <Button style={{ marginInlineStart: 16 }}>Right Extra Action</Button>,
};

const options = ['left', 'right'];

type PositionType = 'left' | 'right';

type TabBarExtraMap = Partial<Record<PositionType, React.ReactNode>>;

const items = Array.from({ length: 3 }).map((_, i) => {
    throw new Error("STUB");
});

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
