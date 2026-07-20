import * as React from 'react';
import { List } from '@rc-component/form';
import type { StoreValue, ValidatorRule } from '@rc-component/form';

import { isNumber } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import { FormItemPrefixContext } from './context';

export interface FormListFieldData {
  name: number;
  key: number;
}

export interface FormListOperation {
  add: (defaultValue?: StoreValue, insertIndex?: number) => void;
  remove: (index: number | number[]) => void;
  move: (from: number, to: number) => void;
}

export interface FormListProps {
  prefixCls?: string;
  name: string | number | (string | number)[];
  rules?: ValidatorRule[];
  initialValue?: any[];
  children: (
    fields: FormListFieldData[],
    operation: FormListOperation,
    meta: { errors: React.ReactNode[]; warnings: React.ReactNode[] },
  ) => React.ReactNode;
}

const FormList: React.FC<FormListProps> = ({
  prefixCls: customizePrefixCls,
  children,
  ...props
}) => {
    throw new Error("STUB");
};

export default FormList;
