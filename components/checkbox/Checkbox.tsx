import * as React from 'react';
import type { CheckboxRef } from '@rc-component/checkbox';
import RcCheckbox from '@rc-component/checkbox';
import { useComposeRef, useControlledState, useEvent } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isReactRenderable } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import Wave from '../_util/wave';
import { TARGET_CLS } from '../_util/wave/interface';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import { FormItemInputContext } from '../form/context';
import GroupContext from './GroupContext';
import useStyle from './style';
import useBubbleLock from './useBubbleLock';

export interface AbstractCheckboxProps<T> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  title?: string;
  onChange?: (e: T) => void;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  autoFocus?: boolean;
  type?: string;
  skipGroup?: boolean;
  required?: boolean;
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}
export type CheckboxSemanticType = {
  classNames?: {
    root?: string;
    icon?: string;
    label?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    icon?: React.CSSProperties;
    label?: React.CSSProperties;
  };
};

export type CheckboxSemanticAllType = GenerateSemantic<CheckboxSemanticType, CheckboxProps>;

export interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
  indeterminate?: boolean;
  classNames?: CheckboxSemanticAllType['classNamesAndFn'];
  styles?: CheckboxSemanticAllType['stylesAndFn'];
}

const InternalCheckbox: React.ForwardRefRenderFunction<CheckboxRef, CheckboxProps> = (
  props,
  ref,
) => {
    throw new Error("STUB");
};

const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>(InternalCheckbox);

if (process.env.NODE_ENV !== 'production') {
  Checkbox.displayName = 'Checkbox';
}

export default Checkbox;
