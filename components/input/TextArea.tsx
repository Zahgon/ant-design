import * as React from 'react';
import { forwardRef } from 'react';
import type {
  TextAreaProps as RcTextAreaProps,
  TextAreaRef as RcTextAreaRef,
} from '@rc-component/input';
import { TextArea as RcTextArea } from '@rc-component/input';
import { clsx } from 'clsx';

import { useAllowClear } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../_util/is';
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
import type { InputFocusOptions } from './Input';
import { triggerFocus } from './Input';
import { useSharedStyle } from './style';
import useStyle from './style/textarea';

export type TextAreaSemanticType = {
  classNames?: {
    root?: string;
    textarea?: string;
    clear?: string;
    count?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    textarea?: React.CSSProperties;
    clear?: React.CSSProperties;
    count?: React.CSSProperties;
  };
};

export type TextAreaSemanticAllType = GenerateSemantic<TextAreaSemanticType, TextAreaProps>;

export interface TextAreaProps extends Omit<RcTextAreaProps, 'suffix' | 'classNames' | 'styles'> {
  /** @deprecated Use `variant` instead */
  bordered?: boolean;
  size?: SizeType;
  status?: InputStatus;
  rootClassName?: string;
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant;
  classNames?: TextAreaSemanticAllType['classNamesAndFn'];
  styles?: TextAreaSemanticAllType['stylesAndFn'];
}

export interface TextAreaRef {
  focus: (options?: InputFocusOptions) => void;
  blur: () => void;
  resizableTextArea?: RcTextAreaRef['resizableTextArea'];
  nativeElement: HTMLElement | null;
}

const TextArea = forwardRef<TextAreaRef, TextAreaProps>((props, ref) => {
    throw new Error("STUB");
});

export default TextArea;
