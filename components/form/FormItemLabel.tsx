import * as React from 'react';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import { clsx } from 'clsx';

import convertToTooltipProps from '../_util/convertToTooltipProps';
import { isFunction } from '../_util/is';
import type { ColProps } from '../grid/col';
import Col from '../grid/col';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';
import type { TooltipProps } from '../tooltip';
import Tooltip from '../tooltip';
import type { FormContextProps } from './context';
import { FormContext } from './context';
import type { RequiredMark } from './Form';
import type { FormLabelAlign } from './interface';

export type FormTooltipProps = TooltipProps & {
  icon?: React.ReactElement;
};

export type FormItemTooltipType = FormTooltipProps | React.ReactNode;

export interface FormItemLabelProps {
  colon?: boolean;
  htmlFor?: string;
  label?: React.ReactNode;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  /**
   * @internal Used for pass `requiredMark` from `<Form />`
   */
  requiredMark?: RequiredMark;
  tooltip?: FormItemTooltipType;
  vertical?: boolean;
}

const FormItemLabel: React.FC<FormItemLabelProps & { required?: boolean; prefixCls: string }> = ({
  prefixCls,
  label,
  htmlFor,
  labelCol,
  labelAlign,
  colon,
  required,
  requiredMark,
  tooltip,
  vertical,
}) => {
    throw new Error("STUB");
};

export default FormItemLabel;
