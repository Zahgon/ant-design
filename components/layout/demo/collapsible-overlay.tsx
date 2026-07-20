import React from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const layoutStyle: React.CSSProperties = {
  position: 'relative',
  minHeight: 360,
};

const siderStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  insetInlineStart: 0,
  zIndex: 10,
};

const items: MenuProps['items'] = [
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined,
].map((icon, index) => { throw new Error("STUB"); });

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
