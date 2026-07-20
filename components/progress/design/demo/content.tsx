import React from 'react';
import { Flex, Progress, theme } from 'antd';

import useLocale from '../../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    progress: '进行中',
    completed: '已完成',
    exception: '异常',
  },
  en: {
    progress: 'In Progress',
    completed: 'Completed',
    exception: 'Exception',
  },
};

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
