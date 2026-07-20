import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import type { Meta, NamePath } from '@rc-component/form';
import { clsx } from 'clsx';

import type { FeedbackIcons, ValidateStatus } from '.';
import { FormContext, FormItemInputContext } from '../context';
import type { FormItemStatusContextProps } from '../context';
import { getStatus } from '../util';

const iconMap = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined,
};

export interface StatusProviderProps {
  children?: React.ReactNode;
  validateStatus?: ValidateStatus;
  prefixCls: string;
  meta: Meta;
  errors: React.ReactNode[];
  warnings: React.ReactNode[];
  hasFeedback?: boolean | { icons?: FeedbackIcons };
  noStyle?: boolean;
  name?: NamePath;
}

function StatusProvider({
  children,
  errors,
  warnings,
  hasFeedback,
  validateStatus,
  prefixCls,
  meta,
  noStyle,
  name,
}: StatusProviderProps) {
    throw new Error("STUB");
}

export default StatusProvider;
