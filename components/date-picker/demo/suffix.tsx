import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import type { Dayjs } from 'dayjs';

const smileIcon = <SmileOutlined />;
const { RangePicker } = DatePicker;

const onChange = (date: Dayjs | (Dayjs | null)[] | null, dateString: string | string[] | null) => {
  console.log(date, dateString);
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
