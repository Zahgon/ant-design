import * as React from 'react';
import { useContext, useMemo } from 'react';
import type { GenerateConfig } from '@rc-component/picker/generate';
import type { Locale } from '@rc-component/picker/interface';
import { clsx } from 'clsx';

import { FormItemInputContext } from '../form/context';
import { Button, Group } from '../radio';
import Select from '../select';
import type { CalendarMode, SelectInfo } from './generateCalendar';

const YEAR_SELECT_OFFSET = 10;
const YEAR_SELECT_TOTAL = 20;

interface SharedProps<DateType> {
  prefixCls: string;
  value: DateType;
  validRange?: [DateType, DateType];
  generateConfig: GenerateConfig<DateType>;
  locale: Locale;
  fullscreen: boolean;
  divRef: React.RefObject<HTMLDivElement>;
  onChange: (year: DateType) => void;
}

function YearSelect<DateType>(props: SharedProps<DateType>) {
    throw new Error("STUB");
}

function MonthSelect<DateType>(props: SharedProps<DateType>) {
    throw new Error("STUB");
}

interface ModeSwitchProps<DateType> extends Omit<SharedProps<DateType>, 'onChange'> {
  mode: CalendarMode;
  onModeChange: (type: CalendarMode) => void;
}

function ModeSwitch<DateType>(props: ModeSwitchProps<DateType>) {
    throw new Error("STUB");
}

export interface CalendarHeaderProps<DateType> {
  className?: string;
  style?: React.CSSProperties;
  prefixCls: string;
  value: DateType;
  validRange?: [DateType, DateType];
  generateConfig: GenerateConfig<DateType>;
  locale: Locale;
  mode: CalendarMode;
  fullscreen: boolean;
  onChange: (date: DateType, source: SelectInfo['source']) => void;
  onModeChange: (mode: CalendarMode) => void;
}

function CalendarHeader<DateType>(props: CalendarHeaderProps<DateType>) {
    throw new Error("STUB");
}

export default CalendarHeader;
