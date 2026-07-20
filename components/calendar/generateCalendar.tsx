import * as React from 'react';
import type { BasePickerPanelProps as RcBasePickerPanelProps } from '@rc-component/picker';
import { PickerPanel as RCPickerPanel } from '@rc-component/picker';
import type { GenerateConfig } from '@rc-component/picker/generate';
import type { CellRenderInfo } from '@rc-component/picker/interface';
import { merge, useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../_util/is';
import type { AnyObject } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import { useLocale } from '../locale';
import CalendarHeader from './Header';
import enUS from './locale/en_US';
import useStyle from './style';

export type CalendarMode = 'year' | 'month';

export type HeaderRender<DateType> = (config: {
  value: DateType;
  type: CalendarMode;
  onChange: (date: DateType) => void;
  onTypeChange: (type: CalendarMode) => void;
}) => React.ReactNode;

export interface SelectInfo {
  source: 'year' | 'month' | 'date' | 'customize';
}

export type CalendarSemanticType = {
  classNames?: {
    root?: string;
    header?: string;
    body?: string;
    content?: string;
    item?: string;
    itemContent?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    header?: React.CSSProperties;
    body?: React.CSSProperties;
    content?: React.CSSProperties;
    item?: React.CSSProperties;
    itemContent?: React.CSSProperties;
  };
};

export type CalendarSemanticAllType<T = any> = GenerateSemantic<
  CalendarSemanticType,
  CalendarProps<T>
>;

export interface CalendarProps<DateType> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  classNames?: CalendarSemanticAllType<DateType>['classNamesAndFn'];
  styles?: CalendarSemanticAllType<DateType>['stylesAndFn'];
  locale?: typeof enUS;
  validRange?: [DateType, DateType];
  disabledDate?: (date: DateType) => boolean;
  /** @deprecated Please use fullCellRender instead. */
  dateFullCellRender?: (date: DateType) => React.ReactNode;
  /** @deprecated Please use cellRender instead. */
  dateCellRender?: (date: DateType) => React.ReactNode;
  /** @deprecated Please use fullCellRender instead. */
  monthFullCellRender?: (date: DateType) => React.ReactNode;
  /** @deprecated Please use cellRender instead. */
  monthCellRender?: (date: DateType) => React.ReactNode;
  cellRender?: (date: DateType, info: CellRenderInfo<DateType>) => React.ReactNode;
  fullCellRender?: (date: DateType, info: CellRenderInfo<DateType>) => React.ReactNode;
  headerRender?: HeaderRender<DateType>;
  value?: DateType;
  defaultValue?: DateType;
  mode?: CalendarMode;
  fullscreen?: boolean;
  showWeek?: boolean;
  onChange?: (date: DateType) => void;
  onPanelChange?: (date: DateType, mode: CalendarMode) => void;
  onSelect?: (date: DateType, selectInfo: SelectInfo) => void;
}

const isSameYear = <T extends AnyObject>(date1: T, date2: T, config: GenerateConfig<T>) => {
  const { getYear } = config;
  return date1 && date2 && getYear(date1) === getYear(date2);
};

const isSameMonth = <T extends AnyObject>(date1: T, date2: T, config: GenerateConfig<T>) => {
  const { getMonth } = config;
  return isSameYear(date1, date2, config) && getMonth(date1) === getMonth(date2);
};

const isSameDate = <T extends AnyObject>(date1: T, date2: T, config: GenerateConfig<T>) => {
  const { getDate } = config;
  return isSameMonth(date1, date2, config) && getDate(date1) === getDate(date2);
};

const generateCalendar = <DateType extends AnyObject>(generateConfig: GenerateConfig<DateType>) => {
  const Calendar: React.FC<Readonly<CalendarProps<DateType>>> = (props) => {
      throw new Error("STUB");
  };

  if (process.env.NODE_ENV !== 'production') {
    Calendar.displayName = 'Calendar';
  }

  return Calendar;
};

export default generateCalendar;
