import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Flex } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const Demo: React.FC = () => { throw new Error("STUB"); };

export default Demo;
