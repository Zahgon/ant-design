import React from 'react';
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

import { Calendar, Flex, Radio, Select, theme, Typography } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';

dayjs.extend(dayLocaleData);

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
