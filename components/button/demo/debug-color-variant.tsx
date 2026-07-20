import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';
import type { ThemeConfig } from 'antd';
import { createStaticStyles } from 'antd-style';

const specClassNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const originalClsStyle = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const theme: ThemeConfig = {
  components: {
    Button: {
      defaultHoverBg: 'orange',
      defaultActiveBg: 'blue',
      primaryColor: 'pink',
      dangerColor: 'green',
    },
  },
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
