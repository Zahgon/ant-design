import * as React from 'react';
import FieldForm, { List, useWatch } from '@rc-component/form';
import type {
  FormRef,
  InternalNamePath,
  FormProps as RcFormProps,
  ValidateErrorEntity,
} from '@rc-component/form';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isPlainObject } from '../_util/is';
import type { Variant } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext, { DisabledContextProvider } from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import SizeContext from '../config-provider/SizeContext';
import type { ColProps } from '../grid/col';
import type { FormContextProps } from './context';
import { FormContext, FormProvider, NoFormStyle, VariantContext } from './context';
import type { FeedbackIcons } from './FormItem';
import type { FormTooltipProps } from './FormItemLabel';
import useForm from './hooks/useForm';
import type { FormInstance } from './hooks/useForm';
import useFormWarning from './hooks/useFormWarning';
import type { FormLabelAlign, ScrollFocusOptions } from './interface';
import useStyle from './style';
import ValidateMessagesContext from './validateMessagesContext';

export type RequiredMark =
  | boolean
  | 'optional'
  | ((labelNode: React.ReactNode, info: { required: boolean }) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';

export type { ScrollFocusOptions };

export type FormSemanticType = {
  classNames?: {
    root?: string;
    label?: string;
    content?: string;
    help?: string;
    helpItem?: string;
    extra?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    label?: React.CSSProperties;
    content?: React.CSSProperties;
    help?: React.CSSProperties;
    helpItem?: React.CSSProperties;
    extra?: React.CSSProperties;
  };
};

export type FormSemanticAllType = GenerateSemantic<FormSemanticType, FormProps>;

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'> {
  classNames?: FormSemanticAllType['classNamesAndFn'];
  styles?: FormSemanticAllType['stylesAndFn'];
  prefixCls?: string;
  colon?: boolean;
  name?: string;
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelWrap?: boolean;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  form?: FormInstance<Values>;
  feedbackIcons?: FeedbackIcons;
  size?: SizeType;
  disabled?: boolean;
  scrollToFirstError?: ScrollFocusOptions | boolean;
  requiredMark?: RequiredMark;
  rootClassName?: string;
  variant?: Variant;
  tooltip?: FormTooltipProps;
}

const InternalForm: React.ForwardRefRenderFunction<FormRef, FormProps> = (props, ref) => {
    throw new Error("STUB");
};

const Form = React.forwardRef<FormRef, FormProps>(InternalForm) as (<Values = any>(
  props: React.PropsWithChildren<FormProps<Values>> & React.RefAttributes<FormRef<Values>>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>;

if (process.env.NODE_ENV !== 'production') {
  Form.displayName = 'Form';
}

export { type FormInstance, List, useForm, useWatch };

export default Form;
