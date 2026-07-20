import * as React from 'react';
import type { CSSMotionProps } from '@rc-component/motion';
import CSSMotion, { CSSMotionList } from '@rc-component/motion';
import { clsx } from 'clsx';

import { isNonNullable } from '../_util/is';
import initCollapseMotion from '../_util/motion';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import { FormContext, FormItemPrefixContext } from './context';
import type { ValidateStatus } from './FormItem';
import useDebounce from './hooks/useDebounce';
import useStyle from './style';

const EMPTY_LIST: React.ReactNode[] = [];

interface ErrorEntity {
  error: React.ReactNode;
  errorStatus?: ValidateStatus;
  key: string;
}

function toErrorEntity(
  error: React.ReactNode,
  prefix: string,
  errorStatus?: ValidateStatus,
  index = 0,
): ErrorEntity {
  return {
    key: typeof error === 'string' ? error : `${prefix}-${index}`,
    error,
    errorStatus,
  };
}

export interface ErrorListProps {
  fieldId?: string;
  help?: React.ReactNode;
  helpStatus?: ValidateStatus;
  errors?: React.ReactNode[];
  warnings?: React.ReactNode[];
  className?: string;
  onVisibleChanged?: (visible: boolean) => void;
}

const ErrorList: React.FC<ErrorListProps> = ({
  help,
  helpStatus,
  errors = EMPTY_LIST,
  warnings = EMPTY_LIST,
  className: rootClassName,
  fieldId,
  onVisibleChanged,
}) => {
    throw new Error("STUB");
};

export default ErrorList;
