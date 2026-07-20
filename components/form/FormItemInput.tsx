import * as React from 'react';
import type { JSX } from 'react';
import { get, set, useLayoutEffect } from '@rc-component/util';
import { clsx } from 'clsx';

import { isPlainObject } from '../_util/is';
import { responsiveArrayReversed } from '../_util/responsiveObserver';
import type { ColProps } from '../grid/col';
import Col from '../grid/col';
import { FormContext, FormItemPrefixContext } from './context';
import ErrorList from './ErrorList';
import type { ValidateStatus } from './FormItem';
import FallbackCmp from './style/fallbackCmp';

interface FormItemInputMiscProps {
  prefixCls: string;
  children: React.ReactNode;
  errors: React.ReactNode[];
  warnings: React.ReactNode[];
  marginBottom?: number | null;
  onErrorVisibleChanged?: (visible: boolean) => void;
  /** @internal do not use in any of your production. */
  _internalItemRender?: {
    mark: string;
    render: (
      props: FormItemInputProps & FormItemInputMiscProps,
      domList: {
        input: JSX.Element;
        errorList: JSX.Element | null;
        extra: JSX.Element | null;
      },
    ) => React.ReactNode;
  };
}

export interface FormItemInputProps {
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  extra?: React.ReactNode;
  status?: ValidateStatus;
  help?: React.ReactNode;
  fieldId?: string;
  label?: React.ReactNode;
}
const GRID_MAX = 24;

const FormItemInput: React.FC<FormItemInputProps & FormItemInputMiscProps> = (props) => {
    throw new Error("STUB");
};

export default FormItemInput;
