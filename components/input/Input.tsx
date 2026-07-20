import React, { forwardRef, useContext, useEffect, useRef } from 'react';
import type { InputRef, InputProps as RcInputProps } from '@rc-component/input';
import RcInput from '@rc-component/input';
import { composeRef, triggerFocus } from '@rc-component/util';
import type { InputFocusOptions } from '@rc-component/util';
import { clsx } from 'clsx';

import ContextIsolator from '../_util/ContextIsolator';
import { useAllowClear } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import type { InputStatus } from '../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import { devUseWarning } from '../_util/warning';
import type { Variant } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import { FormItemInputContext } from '../form/context';
import useVariant from '../form/hooks/useVariants';
import { useCompactItemContext } from '../space/Compact';
import useRemovePasswordTimeout from './hooks/useRemovePasswordTimeout';
import useStyle, { useSharedStyle } from './style';
import { hasPrefixSuffix } from './utils';

export type { InputFocusOptions };
export type { InputRef };
export { triggerFocus };

export type InputSemanticType = {
  classNames?: {
    root?: string;
    prefix?: string;
    suffix?: string;
    clear?: string;
    input?: string;
    count?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    prefix?: React.CSSProperties;
    suffix?: React.CSSProperties;
    clear?: React.CSSProperties;
    input?: React.CSSProperties;
    count?: React.CSSProperties;
  };
};

export type InputSemanticAllType = GenerateSemantic<InputSemanticType, InputProps>;

export interface InputProps
  extends Omit<
    RcInputProps,
    | 'wrapperClassName'
    | 'groupClassName'
    | 'inputClassName'
    | 'affixWrapperClassName'
    | 'classes'
    | 'classNames'
    | 'styles'
  > {
  rootClassName?: string;
  size?: SizeType;
  disabled?: boolean;
  status?: InputStatus;
  /**
   * @deprecated Use `Space.Compact` instead.
   *
   * @example
   * ```tsx
   * import { Space, Input } from 'antd';
   *
   * <Space.Compact>
   *   {addon}
   *   <Input defaultValue="name" />
   * </Space.Compact>
   * ```
   */
  addonBefore?: React.ReactNode;
  /**
   * @deprecated Use `Space.Compact` instead.
   *
   * @example
   * ```tsx
   * import { Space, Input } from 'antd';
   *
   * <Space.Compact>
   *   <Input defaultValue="name" />
   *   {addon}
   * </Space.Compact>
   * ```
   */
  addonAfter?: React.ReactNode;
  /** @deprecated Use `variant="borderless"` instead. */
  bordered?: boolean;
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant;
  classNames?: InputSemanticAllType['classNamesAndFn'];
  styles?: InputSemanticAllType['stylesAndFn'];
  [key: `data-${string}`]: string | undefined;
}

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input';
}

export default Input;
