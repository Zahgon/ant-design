import React from 'react';
import { Flex, TimePicker } from 'antd';
import type { GetProp, TimePickerProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesObject: TimePickerProps['styles'] = {
  root: {
    borderColor: '#d9d9d9',
  },
};

const stylesFn: TimePickerProps['styles'] = (
  info,
): GetProp<TimePickerProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
