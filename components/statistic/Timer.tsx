import * as React from 'react';
import { useEvent } from '@rc-component/util';

import { cloneElement } from '../_util/reactNode';
import type { StatisticProps } from './Statistic';
import Statistic from './Statistic';
import type { FormatConfig, valueType } from './utils';
import { formatCounter } from './utils';

export type TimerType = 'countdown' | 'countup';

const UPDATE_INTERVAL = 1000 / 60;

export interface StatisticTimerProps extends FormatConfig, StatisticProps {
  type: TimerType;
  format?: string;
  /**
   * Only to be called when the type is `countdown`.
   */
  onFinish?: () => void;
  onChange?: (value?: valueType) => void;
}

function getTime(value?: valueType) {
  return new Date(value as valueType).getTime();
}

const StatisticTimer: React.FC<StatisticTimerProps> = (props) => {
    throw new Error("STUB");
};

export default StatisticTimer;
