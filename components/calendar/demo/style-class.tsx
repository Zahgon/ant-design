import React from 'react';
import { Calendar, Flex } from 'antd';
import type { CalendarProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';
import type { Dayjs } from 'dayjs';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesObject: CalendarProps<Dayjs>['styles'] = {
  root: {
    borderRadius: 8,
    width: 600,
  },
};

const stylesFunction: CalendarProps<Dayjs>['styles'] = (
  info,
): GetProp<CalendarProps<Dayjs>, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
