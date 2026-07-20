import * as React from 'react';
import type { JSX } from 'react';
import { Field, FieldContext, ListContext } from '@rc-component/form';
import type { FieldProps, InternalNamePath, Meta, RuleObject } from '@rc-component/form';
import { supportRef, useState } from '@rc-component/util';
import { clsx } from 'clsx';

import { isFunction, isNonNullable, isPlainObject } from '../../_util/is';
import { cloneElement } from '../../_util/reactNode';
import { devUseWarning } from '../../_util/warning';
import { ConfigContext } from '../../config-provider';
import useCSSVarCls from '../../config-provider/hooks/useCSSVarCls';
import { FormContext, NoStyleItemContext } from '../context';
import type { FormInstance, FormItemLayout } from '../Form';
import type { FormItemInputProps } from '../FormItemInput';
import type { FormItemLabelProps } from '../FormItemLabel';
import useChildren from '../hooks/useChildren';
import useFormItemStatus from '../hooks/useFormItemStatus';
import useFrameState from '../hooks/useFrameState';
import useItemRef from '../hooks/useItemRef';
import useStyle from '../style';
import { getFieldId, toArray } from '../util';
import type { ItemHolderProps } from './ItemHolder';
import ItemHolder from './ItemHolder';
import StatusProvider from './StatusProvider';

const NAME_SPLIT = '__SPLIT__';

interface FieldError {
  errors: string[];
  warnings: string[];
}

const _ValidateStatuses = ['success', 'warning', 'error', 'validating', ''] as const;
export type ValidateStatus = (typeof _ValidateStatuses)[number];

type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;
type RcFieldProps<Values = any> = Omit<FieldProps<Values>, 'children'>;
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;

export type FeedbackIcons = (itemStatus: {
  status: ValidateStatus;
  errors?: React.ReactNode[];
  warnings?: React.ReactNode[];
}) => { [key in ValidateStatus]?: React.ReactNode };

interface MemoInputProps {
  control: object;
  update: any;
  childProps: any[];
}

// https://github.com/ant-design/ant-design/issues/46417
// `getValueProps` may modify the value props name,
// we should check if the control is similar.
function isSimilarControl(a: object, b: object) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  return (
    keysA.length === keysB.length &&
    keysA.every((key) => {
        throw new Error("STUB");
    })
  );
}

const MemoInput = React.memo<React.PropsWithChildren<MemoInputProps>>(
  (props) => { throw new Error("STUB"); },
  (prev, next) =>
    { throw new Error("STUB"); },
);

export interface FormItemProps<Values = any>
  extends Omit<FormItemLabelProps, 'requiredMark'>, FormItemInputProps, RcFieldProps<Values> {
  prefixCls?: string;
  noStyle?: boolean;
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  children?: ChildrenType<Values>;
  id?: string;
  hasFeedback?: boolean | { icons: FeedbackIcons };
  validateStatus?: ValidateStatus;
  required?: boolean;
  hidden?: boolean;
  initialValue?: any;
  messageVariables?: Record<string, string>;
  layout?: FormItemLayout;
}

function genEmptyMeta(): Meta {
    throw new Error("STUB");
}

function InternalFormItem<Values = any>(props: FormItemProps<Values>): React.ReactElement {
    throw new Error("STUB");
}

type InternalFormItemType = typeof InternalFormItem;

type CompoundedComponent = InternalFormItemType & {
  useStatus: typeof useFormItemStatus;
};

const FormItem = InternalFormItem as CompoundedComponent;
FormItem.useStatus = useFormItemStatus;

export default FormItem;
