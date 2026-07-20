import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, GetProps } from 'antd';
import type { Dayjs } from 'dayjs';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null | undefined, Dayjs | null | undefined] | null;

const ControlledDatePicker = () => {
    throw new Error("STUB");
};

const ControlledRangePicker = () => {
    throw new Error("STUB");
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
