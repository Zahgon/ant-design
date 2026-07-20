import * as React from 'react';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import type { HTMLAriaDataAttributes } from '../_util/aria-data-attrs';
import { isNumber } from '../_util/is';
import { ConfigContext } from '../config-provider';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { CheckboxChangeEvent } from './Checkbox';
import Checkbox from './Checkbox';
import type { CheckboxGroupContext } from './GroupContext';
import GroupContext from './GroupContext';
import useStyle from './style';

export interface CheckboxOptionType<T = any> {
  label: React.ReactNode;
  value: T;
  style?: React.CSSProperties;
  className?: string; // 👈 5.25.0+
  disabled?: boolean;
  title?: string;
  id?: string;
  onChange?: (e: CheckboxChangeEvent) => void;
  required?: boolean;
}

export interface AbstractCheckboxGroupProps<T = any> extends HTMLAriaDataAttributes {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  options?: (CheckboxOptionType<T> | string | number)[];
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface CheckboxGroupProps<T = any> extends AbstractCheckboxGroupProps<T> {
  name?: string;
  defaultValue?: T[];
  value?: T[];
  onChange?: (checkedValue: T[]) => void;
  children?: React.ReactNode;
}

type InternalCheckboxValueType = string | number | boolean;

const CheckboxGroup = React.forwardRef(
  <T extends InternalCheckboxValueType = InternalCheckboxValueType>(
    props: CheckboxGroupProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
        throw new Error("STUB");
    },
);

export type { CheckboxGroupContext } from './GroupContext';
export { GroupContext };

export default CheckboxGroup as <T = any>(
  props: CheckboxGroupProps<T> & React.RefAttributes<HTMLDivElement>,
) => React.ReactElement;
