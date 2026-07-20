import React from 'react';
import { DatePicker, Flex } from 'antd';
import type { DatePickerProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';
import type { Dayjs } from 'dayjs';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesObject: DatePickerProps<Dayjs>['styles'] = {
  input: { fontStyle: 'italic' },
  suffix: { opacity: 0.85 },
};

const stylesFn: DatePickerProps<Dayjs>['styles'] = (
  info,
): GetProp<DatePickerProps<Dayjs>, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
