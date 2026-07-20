import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { Notification as RcNotification } from '@rc-component/notification';
import type { NotificationProps as RcNotificationProps } from '@rc-component/notification';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { ArgsProps, MessageSemanticAllType, NoticeType } from './interface';
import useStyle, { PurePanelStyle } from './style';

export const TypeIcon = {
  info: <InfoCircleFilled />,
  success: <CheckCircleFilled />,
  error: <CloseCircleFilled />,
  warning: <ExclamationCircleFilled />,
  loading: <LoadingOutlined />,
};

export const getMessageIcon = (type?: NoticeType, icon?: React.ReactNode) =>
  icon || (type && TypeIcon[type]) || null;

export interface MessageContentProps {
  type?: NoticeType;
  icon?: React.ReactNode;
}

export interface PurePanelProps
  extends Omit<
      RcNotificationProps,
      'prefixCls' | 'classNames' | 'styles' | 'title' | 'description' | 'icon' | 'actions'
    >,
    MessageContentProps {
  prefixCls?: string;
  content?: React.ReactNode;
  classNames?: MessageSemanticAllType['classNamesAndFn'];
  styles?: MessageSemanticAllType['stylesAndFn'];
}

/** @private Internal Component. Do not use in your production. */
const PurePanel: React.FC<PurePanelProps> = (props) => {
    throw new Error("STUB");
};

export default PurePanel;
