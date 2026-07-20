import React, { useState } from 'react';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, Space, TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';

type PickerType = 'time' | 'date';

interface PickerWithTypeProps {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps<Dayjs, false>['onChange'];
}

const PickerWithType: React.FC<PickerWithTypeProps> = ({ type, onChange }) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
