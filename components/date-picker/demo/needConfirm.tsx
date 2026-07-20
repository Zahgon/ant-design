import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';

const onChange: DatePickerProps<Dayjs, false>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
