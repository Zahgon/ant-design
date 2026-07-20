import * as React from 'react';
import { forwardRef, useContext, useImperativeHandle } from 'react';
import SwapRightOutlined from '@ant-design/icons/SwapRightOutlined';
import { RangePicker as RCRangePicker } from '@rc-component/picker';
import type { PickerRef } from '@rc-component/picker';
import type { GenerateConfig } from '@rc-component/picker/generate/index';
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
import { getRangePlaceholder } from '../util';
import { TIME } from './constant';
import type { PickerLocale, RangePickerProps } from './interface';
import useComponents from './useComponents';
import useSuffixIcon from './useSuffixIcon';

const generateRangePicker = <DateType extends AnyObject = AnyObject>(
  generateConfig: GenerateConfig<DateType>,
) => {
  type DateRangePickerProps = RangePickerProps<DateType>;

  const RangePicker = forwardRef<PickerRef, DateRangePickerProps>((props, ref) => {
      throw new Error("STUB");
  });

  if (process.env.NODE_ENV !== 'production') {
    RangePicker.displayName = 'RangePicker';
  }

  return RangePicker;
};

export default generateRangePicker;
