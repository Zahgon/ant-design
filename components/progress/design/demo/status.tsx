import React from 'react';
import { Flex, Progress } from 'antd';

import useLocale from '../../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    taskInProgress: '任务进行中',
    taskCompleted: '任务完成',
    taskFailed: '任务失败',
  },
  en: {
    taskInProgress: 'Task In Progress',
    taskCompleted: 'Task Completed',
    taskFailed: 'Task Failed',
  },
};

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
