import React from 'react';
import type { StatisticProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
import { createStyles } from 'antd-style';
import CountUp from 'react-countup';

const useStyle = createStyles(({ css }) => {
    throw new Error("STUB");
});

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
