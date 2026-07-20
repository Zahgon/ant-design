import React from 'react';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';

const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
