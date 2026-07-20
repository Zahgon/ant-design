import type { FC } from 'react';
import React from 'react';
import { DatePicker } from 'antd';
import { createStyles, css } from 'antd-style';
import { clsx } from 'clsx';
import type { Dayjs } from 'dayjs';

import useLocale from '../../../../.dumi/hooks/useLocale';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;

const useStyle = createStyles(({ token, prefixCls }) => { throw new Error("STUB"); });

const seeds = Array.from({ length: 30 }).map(Math.random);

const getSales = (date: Dayjs) => Math.floor(seeds[date.date() % 30] * 10000);

const getData = (date: Dayjs) => (Math.floor(seeds[date.date() % 30] * 10000) - 5000) / 5000;

const locales = {
  cn: {
    officeScenario: '办公场景：预览节假日信息',
    commerceScenario: '电商场景：预览销售额信息',
    bigDataScenario: '大数据场景：预览数据波动',
  },
  en: {
    officeScenario: 'Office scenario: preview holiday information',
    commerceScenario: 'E-commerce scenario: preview sales information',
    bigDataScenario: 'Big data scenario: preview data fluctuations',
  },
};

const Demo: FC = () => {
    throw new Error("STUB");
};

export default Demo;
