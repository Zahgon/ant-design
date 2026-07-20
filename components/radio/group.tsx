import * as React from 'react';
import { pickAttrs, useControlledState, useId } from '@rc-component/util';
import { clsx } from 'clsx';

import { useOrientation } from '../_util/hooks';
import { isNumber } from '../_util/is';
import { ConfigContext } from '../config-provider';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import { FormItemInputContext } from '../form/context';
import { toNamePathStr } from '../form/hooks/useForm';
import { RadioGroupContextProvider } from './context';
import type {
  RadioChangeEvent,
  RadioGroupButtonStyle,
  RadioGroupContextProps,
  RadioGroupProps,
} from './interface';
import Radio from './radio';
import useStyle from './style';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
    throw new Error("STUB");
});

export default React.memo(RadioGroup);
