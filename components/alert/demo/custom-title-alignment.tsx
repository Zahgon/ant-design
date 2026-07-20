import React from 'react';
import { Alert, Button, Flex } from 'antd';
import type { AlertProps } from 'antd';

const wrapperStyle: React.CSSProperties = {
  width: 360,
};

const title = 'Long alert title wraps to multiple lines when the alert container is narrow enough.';

const titleLineHeight = 22;
const iconSize = 14;
const closeIconSize = 12;
const smallButtonHeight = 24;

const firstLineStyles: AlertProps['styles'] = {
  root: {
    alignItems: 'flex-start',
  },
  icon: {
    marginBlockStart: (titleLineHeight - iconSize) / 2,
  },
  actions: {
    marginBlockStart: (titleLineHeight - smallButtonHeight) / 2,
  },
  close: {
    marginBlockStart: (titleLineHeight - closeIconSize) / 2,
  },
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
