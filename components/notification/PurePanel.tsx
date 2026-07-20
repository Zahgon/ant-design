import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { Notification as RcNotification } from '@rc-component/notification';
import type { NotificationProps as RcNotificationProps } from '@rc-component/notification';
import { clsx } from 'clsx';

import { pickClosable, useClosable } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isPlainObject, isReactRenderable } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { IconType, NotificationSemanticType } from './interface';
import useStyle, { PurePanelStyle } from './style';

export type AnchorSemanticAllType = GenerateSemantic<NotificationSemanticType, PurePanelProps>;

export const TypeIcon = {
  info: <InfoCircleFilled />,
  success: <CheckCircleFilled />,
  error: <CloseCircleFilled />,
  warning: <ExclamationCircleFilled />,
  loading: <LoadingOutlined />,
};

export function getCloseIcon(prefixCls: string, closeIcon?: React.ReactNode): React.ReactNode {
  if (closeIcon === null || closeIcon === false) {
    return null;
  }
  return closeIcon || <CloseOutlined className={`${prefixCls}-close-icon`} />;
}

export interface PurePanelProps
  extends Omit<
    RcNotificationProps,
    'prefixCls' | 'classNames' | 'styles' | 'title' | 'description' | 'icon' | 'actions' | 'role'
  > {
  prefixCls?: string;
  icon?: React.ReactNode;
  /** @deprecated Please use `title` instead */
  message?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** @deprecated Please use `actions` instead */
  btn?: React.ReactNode;
  actions?: React.ReactNode;
  type?: IconType;
  role?: 'alert' | 'status';
  classNames?: AnchorSemanticAllType['classNamesAndFn'];
  styles?: AnchorSemanticAllType['stylesAndFn'];
  closeIcon?: React.ReactNode;
}

/** @private Internal Component. Do not use in your production. */
const PurePanel: React.FC<PurePanelProps> = (props) => {
    throw new Error("STUB");
};

export default PurePanel;
