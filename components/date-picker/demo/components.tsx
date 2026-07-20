import React from 'react';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Flex, Slider, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

type DateComponent = Required<NonNullable<DatePickerProps<Dayjs>['components']>>['date'];
type GetProps<T> = T extends React.ComponentType<infer P> ? P : never;

const MyDatePanel = (props: GetProps<DateComponent>) => {
    throw new Error("STUB");
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
