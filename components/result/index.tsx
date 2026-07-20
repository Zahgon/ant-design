import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import WarningFilled from '@ant-design/icons/WarningFilled';
import { pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import type { HTMLAriaDataAttributes } from '../_util/aria-data-attrs';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isReactRenderable } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import noFound from './noFound';
import serverError from './serverError';
import useStyle from './style';
import unauthorized from './unauthorized';

export const IconMap = {
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  info: ExclamationCircleFilled,
  warning: WarningFilled,
};

export const ExceptionMap = {
  '404': noFound,
  '500': serverError,
  '403': unauthorized,
};

export type ExceptionStatusType = 403 | 404 | 500 | '403' | '404' | '500';

export type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;

export type ResultSemanticType = {
  classNames?: {
    root?: string;
    title?: string;
    subTitle?: string;
    body?: string;
    extra?: string;
    icon?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    title?: React.CSSProperties;
    subTitle?: React.CSSProperties;
    body?: React.CSSProperties;
    extra?: React.CSSProperties;
    icon?: React.CSSProperties;
  };
};

export type ResultSemanticAllType = GenerateSemantic<ResultSemanticType, ResultProps>;

export interface ResultProps extends HTMLAriaDataAttributes {
  icon?: React.ReactNode;
  status?: ResultStatusType;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  classNames?: ResultSemanticAllType['classNamesAndFn'];
  styles?: ResultSemanticAllType['stylesAndFn'];
}

// ExceptionImageMap keys
const ExceptionStatus = Object.keys(ExceptionMap);

/**
 * Render icon if ExceptionStatus includes ,render svg image else render iconNode
 *
 * @param prefixCls
 * @param {status, icon}
 */

interface IconProps {
  className: string;
  icon: React.ReactNode;
  status: ResultStatusType;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ icon, status, className, style }) => {
    throw new Error("STUB");
};

interface ExtraProps {
  extra: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Extra: React.FC<ExtraProps> = ({ className, extra, style }) => {
    throw new Error("STUB");
};

export interface ResultType extends React.FC<ResultProps> {
  PRESENTED_IMAGE_404: React.FC;
  PRESENTED_IMAGE_403: React.FC;
  PRESENTED_IMAGE_500: React.FC;
}

const Result: ResultType = (props) => {
    throw new Error("STUB");
};

Result.PRESENTED_IMAGE_403 = ExceptionMap['403'];
Result.PRESENTED_IMAGE_404 = ExceptionMap['404'];
Result.PRESENTED_IMAGE_500 = ExceptionMap['500'];

if (process.env.NODE_ENV !== 'production') {
  Result.displayName = 'Result';
}

export default Result;
