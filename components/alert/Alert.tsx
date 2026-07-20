import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import CSSMotion from '@rc-component/motion';
import { composeRef, pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import type { ClosableType } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isNonNullable, isPlainObject } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useStyle from './style';

export interface AlertRef {
  nativeElement: HTMLDivElement;
}

export type AlertVariant = 'outlined' | 'filled';

export type AlertSemanticType = {
  classNames?: {
    root?: string;
    icon?: string;
    section?: string;
    title?: string;
    description?: string;
    actions?: string;
    close?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    icon?: React.CSSProperties;
    section?: React.CSSProperties;
    title?: React.CSSProperties;
    description?: React.CSSProperties;
    actions?: React.CSSProperties;
    close?: React.CSSProperties;
  };
};
export type AlertSemanticAllType = GenerateSemantic<AlertSemanticType, AlertProps>;

export interface AlertProps {
  /** Type of Alert styles, options:`success`, `info`, `warning`, `error` */
  type?: 'success' | 'info' | 'warning' | 'error';
  /**
   * Variant of Alert style
   * @since 6.4.0
   */
  variant?: AlertVariant;
  /** Whether Alert can be closed */
  closable?:
    | boolean
    | (Exclude<ClosableType, boolean> & {
        /** Callback when close Alert */
        onClose?: React.MouseEventHandler<HTMLButtonElement>;
      });
  /**
   * @deprecated please use `closable.closeIcon` instead.
   * Close text to show
   */
  closeText?: React.ReactNode;
  /** Content of Alert */
  title?: React.ReactNode;
  /**
   * @deprecated please use `title` instead.
   */
  message?: React.ReactNode;
  /** Additional content of Alert */
  description?: React.ReactNode;
  /**
   * @deprecated please use `closable.onClose` instead.
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  /** Trigger when animation ending of Alert */
  /**
   * @deprecated please use `closable.afterClose` instead.
   */
  afterClose?: () => void;
  /** Whether to show icon */
  showIcon?: boolean;
  /** https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#aria-role-attribute */
  role?: string;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  classNames?: AlertSemanticAllType['classNamesAndFn'];
  styles?: AlertSemanticAllType['stylesAndFn'];
  rootClassName?: string;
  banner?: boolean;
  icon?: React.ReactNode;
  /**
   * @deprecated please use `closable.closeIcon` instead.
   */
  closeIcon?: React.ReactNode;
  action?: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  id?: string;
}

interface IconNodeProps {
  type: AlertProps['type'];
  icon: AlertProps['icon'];
  prefixCls: AlertProps['prefixCls'];
  description: AlertProps['description'];
  className?: string;
  style?: React.CSSProperties;
  successIcon?: React.ReactNode;
  infoIcon?: React.ReactNode;
  warningIcon?: React.ReactNode;
  errorIcon?: React.ReactNode;
}

const IconNode: React.FC<IconNodeProps> = (props) => {
    throw new Error("STUB");
};

type CloseIconProps = {
  isClosable: boolean;
  prefixCls: AlertProps['prefixCls'];
  closeIcon: AlertProps['closeIcon'];
  handleClose: AlertProps['onClose'];
  ariaProps: React.AriaAttributes;
  className?: string;
  style?: React.CSSProperties;
};

const CloseIconNode: React.FC<CloseIconProps> = (props) => {
    throw new Error("STUB");
};

const Alert = React.forwardRef<AlertRef, AlertProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Alert.displayName = 'Alert';
}

export default Alert;
