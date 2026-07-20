import React, { useState } from 'react';
import { CopyOutlined, DownloadOutlined, SettingOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Input,
  InputNumber,
  Modal,
  Popover,
  Select,
  Space,
  Tooltip,
} from 'antd';

const selectBefore = (
  <Select
    defaultValue="http"
    style={{ width: 90 }}
    options={[
      { label: 'http://', value: 'http' },
      { label: 'https://', value: 'https' },
    ]}
  />
);

const selectAfter = (
  <Select
    defaultValue=".com"
    style={{ width: 90 }}
    options={[
      { label: '.com', value: '.com' },
      { label: '.jp', value: '.jp' },
      { label: '.cn', value: '.cn' },
      { label: '.org', value: '.org' },
    ]}
  />
);

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
