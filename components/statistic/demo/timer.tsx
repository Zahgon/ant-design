import React from 'react';
import type { StatisticTimerProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
import { createStyles } from 'antd-style';

const { Timer } = Statistic;

const useStyle = createStyles(({ css }) => {
    throw new Error("STUB");
});

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
const before = Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const tenSecondsLater = Date.now() + 10 * 1000;

const onFinish: StatisticTimerProps['onFinish'] = () => {
  console.log('finished!');
};

const onChange: StatisticTimerProps['onChange'] = (val) => {
  if (typeof val === 'number' && !Number.isNaN(val) && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log('changed!');
  }
};

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
