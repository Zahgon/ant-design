import React, { useState } from 'react';
import { Button, Drawer, Flex } from 'antd';
import type { DrawerProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const lineStyle: React.CSSProperties = {
  lineHeight: '28px',
};

const sharedContent = (
  <>
    <div style={lineStyle}>
      Following the Ant Design specification, we developed a React UI library antd that contains a
      set of high quality components and demos for building rich, interactive user interfaces.
    </div>
    <div style={lineStyle}>🌈 Enterprise-class UI designed for web applications.</div>
    <div style={lineStyle}>📦 A set of high-quality React components out of the box.</div>
    <div style={lineStyle}>🛡 Written in TypeScript with predictable static types.</div>
    <div style={lineStyle}>⚙️ Whole package of design resources and development tools.</div>
    <div style={lineStyle}>🌍 Internationalization support for dozens of languages.</div>
    <div style={lineStyle}>🎨 Powerful theme customization in every detail.</div>
  </>
);

const classNames = createStaticStyles(
  ({ css }): NonNullable<GetProp<DrawerProps, 'classNames', 'Return'>> => { throw new Error("STUB"); },
);

const styles: DrawerProps['styles'] = {
  mask: {
    backgroundImage: `linear-gradient(to top, #18181b 0, rgba(21, 21, 22, 0.2) 100%)`,
  },
};

const stylesFn: DrawerProps['styles'] = (info): GetProp<DrawerProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
