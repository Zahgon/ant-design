import * as React from 'react';
import { pickAttrs, useEvent } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../../_util/is';
import { getMergedStatus } from '../../_util/statusUtils';
import type { InputStatus } from '../../_util/statusUtils';
import { devUseWarning } from '../../_util/warning';
import type { Variant } from '../../config-provider';
import { useComponentConfig } from '../../config-provider/context';
import useSize from '../../config-provider/hooks/useSize';
import type { SizeType } from '../../config-provider/SizeContext';
import { FormItemInputContext } from '../../form/context';
import type { FormItemStatusContextProps } from '../../form/context';
import type { InputRef } from '../Input';
import useStyle from '../style/otp';
import OTPInput from './OTPInput';
import type { OTPInputProps } from './OTPInput';

export type OTPSemanticType = {
  classNames?: {
    root?: string;
    input?: string;
    separator?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    input?: React.CSSProperties;
    separator?: React.CSSProperties;
  };
};

export type OTPSemanticAllType = GenerateSemantic<OTPSemanticType, OTPProps>;

export interface OTPRef {
  focus: VoidFunction;
  blur: VoidFunction;
  nativeElement: HTMLDivElement;
}

export interface OTPProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onInput'> {
  prefixCls?: string;
  length?: number;

  // Style
  variant?: Variant;
  rootClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: SizeType;

  // Values
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  formatter?: (value: string) => string;
  separator?: ((index: number) => React.ReactNode) | React.ReactNode;

  // Status
  disabled?: boolean;
  status?: InputStatus;

  mask?: boolean | string;

  type?: React.HTMLInputTypeAttribute;

  autoComplete?: string;

  onInput?: (value: string[]) => void;

  classNames?: OTPSemanticAllType['classNamesAndFn'];
  styles?: OTPSemanticAllType['stylesAndFn'];
}

function strToArr(str: string) {
  return (str || '').split('');
}

interface SeparatorProps {
  index: number;
  prefixCls: string;
  separator: OTPProps['separator'];
  className?: string;
  style?: React.CSSProperties;
}

const Separator: React.FC<Readonly<SeparatorProps>> = (props) => {
    throw new Error("STUB");
};

const OTP = React.forwardRef<OTPRef, OTPProps>((props, ref) => {
    throw new Error("STUB");
});

export default OTP;
