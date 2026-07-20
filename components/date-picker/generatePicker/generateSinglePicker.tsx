import * as React from 'react';
import { forwardRef, useContext, useImperativeHandle } from 'react';
import RCPicker from '@rc-component/picker';
import type { PickerRef } from '@rc-component/picker';
import type { GenerateConfig } from '@rc-component/picker/generate/index';
import type { PickerMode } from '@rc-component/picker/interface';
import { merge } from '@rc-component/util';
import { clsx } from 'clsx';

import ContextIsolator from '../../_util/ContextIsolator';
import { useAllowClear, useZIndex } from '../../_util/hooks';
import { getMergedStatus, getStatusClassNames } from '../../_util/statusUtils';
import type { AnyObject } from '../../_util/type';
import { devUseWarning } from '../../_util/warning';
import { ConfigContext } from '../../config-provider';
import { useComponentConfig } from '../../config-provider/context';
import DisabledContext from '../../config-provider/DisabledContext';
import useCSSVarCls from '../../config-provider/hooks/useCSSVarCls';
import useSize from '../../config-provider/hooks/useSize';
import { FormItemInputContext } from '../../form/context';
import useVariant from '../../form/hooks/useVariants';
import { useLocale } from '../../locale';
import { useCompactItemContext } from '../../space/Compact';
import useMergedPickerSemantic from '../hooks/useMergedPickerSemantic';
import enUS from '../locale/en_US';
import useStyle from '../style';
import { getPlaceholder, useIcons } from '../util';
import {
  MONTH,
  MONTHPICKER,
  QUARTER,
  QUARTERPICKER,
  TIME,
  TIMEPICKER,
  WEEK,
  WEEKPICKER,
  YEAR,
  YEARPICKER,
} from './constant';
import type {
  GenericTimePickerProps,
  PickerLocale,
  PickerProps,
  PickerPropsWithMultiple,
} from './interface';
import useComponents from './useComponents';
import useSuffixIcon from './useSuffixIcon';

const generatePicker = <DateType extends AnyObject = AnyObject>(
  generateConfig: GenerateConfig<DateType>,
) => {
  type DatePickerProps = PickerProps<DateType>;

  type TimePickerProps = GenericTimePickerProps<DateType>;

  const getPicker = <P extends DatePickerProps>(
    picker?: PickerMode,
    displayName = 'DatePicker',
  ) => {
    const pickerType = displayName === TIMEPICKER ? 'timePicker' : 'datePicker';
    const Picker = forwardRef<PickerRef, P>((props, ref) => {
        throw new Error("STUB");
    });

    if (process.env.NODE_ENV !== 'production' && displayName) {
      Picker.displayName = displayName;
    }

    return Picker as unknown as (<ValueType = DateType, IsMultiple extends boolean = false>(
      props: PickerPropsWithMultiple<DateType, P, ValueType, IsMultiple>,
    ) => React.ReactElement) & { displayName?: string };
  };

  const DatePicker = getPicker<DatePickerProps>();
  const WeekPicker = getPicker<Omit<DatePickerProps, 'picker'>>(WEEK, WEEKPICKER);
  const MonthPicker = getPicker<Omit<DatePickerProps, 'picker'>>(MONTH, MONTHPICKER);
  const YearPicker = getPicker<Omit<DatePickerProps, 'picker'>>(YEAR, YEARPICKER);
  const QuarterPicker = getPicker<Omit<DatePickerProps, 'picker'>>(QUARTER, QUARTERPICKER);
  const TimePicker = getPicker<Omit<TimePickerProps, 'picker'>>(TIME, TIMEPICKER);

  return { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker };
};

export default generatePicker;
