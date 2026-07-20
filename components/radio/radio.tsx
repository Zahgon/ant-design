import * as React from 'react';
import RcCheckbox from '@rc-component/checkbox';
import { composeRef } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import { isReactRenderable } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import Wave from '../_util/wave';
import { TARGET_CLS } from '../_util/wave/interface';
import useBubbleLock from '../checkbox/useBubbleLock';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import { FormItemInputContext } from '../form/context';
import RadioGroupContext, { RadioOptionTypeContext } from './context';
import type { RadioChangeEvent, RadioProps, RadioRef, RadioSemanticAllType } from './interface';
import useStyle from './style';

const InternalRadio: React.ForwardRefRenderFunction<RadioRef, RadioProps> = (props, ref) => {
    throw new Error("STUB");
};

const Radio = React.forwardRef<RadioRef, RadioProps>(InternalRadio);

if (process.env.NODE_ENV !== 'production') {
  Radio.displayName = 'Radio';
}

export default Radio;
