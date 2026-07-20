import * as React from 'react';
import DownOutlined from '@ant-design/icons/DownOutlined';
import MinusOutlined from '@ant-design/icons/MinusOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import UpOutlined from '@ant-design/icons/UpOutlined';
import RcInputNumber from '@rc-component/input-number';
import type {
  InputNumberProps as RcInputNumberProps,
  InputNumberRef as RcInputNumberRef,
  ValueType,
} from '@rc-component/input-number';
import { clsx } from 'clsx';

import ContextIsolator from '../_util/ContextIsolator';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isPlainObject } from '../_util/is';
import type { InputStatus } from '../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import { devUseWarning } from '../_util/warning';
import ConfigProvider from '../config-provider';
import type { Variant } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import { FormItemInputContext } from '../form/context';
import useVariant from '../form/hooks/useVariants';
import SpaceAddon from '../space/Addon';
import Compact, { useCompactItemContext } from '../space/Compact';
import useStyle from './style';

export type InputNumberSemanticType = {
  classNames?: {
    root?: string;
    prefix?: string;
    suffix?: string;
    input?: string;
    actions?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    prefix?: React.CSSProperties;
    suffix?: React.CSSProperties;
    input?: React.CSSProperties;
    actions?: React.CSSProperties;
  };
};

export type InputNumberSemanticAllType = GenerateSemantic<
  InputNumberSemanticType,
  InputNumberProps
>;

export interface InputNumberProps<T extends ValueType = ValueType>
  extends Omit<RcInputNumberProps<T>, 'prefix' | 'size' | 'controls' | 'classNames' | 'styles'> {
  prefixCls?: string;
  rootClassName?: string;
  classNames?: InputNumberSemanticAllType['classNamesAndFn'];
  styles?: InputNumberSemanticAllType['stylesAndFn'];
  /**
   * @deprecated Use `Space.Compact` instead.
   *
   * @example
   * ```tsx
   * import { Space, InputNumber } from 'antd';
   *
   * <Space.Compact>
   *   {addon}
   *   <InputNumber defaultValue={1} />
   * </Space.Compact>
   * ```
   */
  addonBefore?: React.ReactNode;
  /**
   * @deprecated Use `Space.Compact` instead.
   *
   * @example
   * ```tsx
   * import { Space, InputNumber } from 'antd';
   *
   * <Space.Compact>
   *   <InputNumber defaultValue={1} />
   *   {addon}
   * </Space.Compact>
   * ```
   */
  addonAfter?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  /** @deprecated Use `variant` instead. */
  bordered?: boolean;
  status?: InputStatus;
  controls?:
    | boolean
    | {
        upIcon?: React.ReactNode;
        downIcon?: React.ReactNode;
      };
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant;
}

type InternalInputNumberProps = InputNumberProps & {
  prefixCls: string;
};

const InternalInputNumber = React.forwardRef<RcInputNumberRef, InternalInputNumberProps>(
  (props, ref) => {
        throw new Error("STUB");
    },
);

// ===================================================================
// ==                          InputNumber                          ==
// ===================================================================
const InputNumber = React.forwardRef<RcInputNumberRef, InputNumberProps>((props, ref) => {
    throw new Error("STUB");
});

const TypedInputNumber = InputNumber as unknown as (<T extends ValueType = ValueType>(
  props: React.PropsWithChildren<InputNumberProps<T>> & React.RefAttributes<RcInputNumberRef>,
) => React.ReactElement) & {
  displayName?: string;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PureInputNumber;
};

/** @private Internal Component. Do not use in your production. */
const PureInputNumber: React.FC<InputNumberProps> = (props) => { throw new Error("STUB"); };

if (process.env.NODE_ENV !== 'production') {
  InternalInputNumber.displayName = 'InternalInputNumber';
  TypedInputNumber.displayName = 'InputNumber';
}

TypedInputNumber._InternalPanelDoNotUseOrYouWillBeFired = PureInputNumber;

export default TypedInputNumber;
