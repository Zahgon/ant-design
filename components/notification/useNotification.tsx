import React, { useContext, useMemo } from 'react';
import type { FC, PropsWithChildren } from 'react';
import {
  NotificationProvider,
  useNotification as useRcNotification,
} from '@rc-component/notification';
import type {
  NotificationAPI,
  NotificationConfig as RcNotificationConfig,
} from '@rc-component/notification';
import { clsx } from 'clsx';

import { computeClosable, pickClosable } from '../_util/hooks';
import { resolveStyleOrClass, useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isNumber, isPlainObject, isReactRenderable } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import type { NotificationConfig as CPNotificationConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useStackConfig from './hooks/useStackConfig';
import type {
  ArgsProps,
  NotificationConfig,
  NotificationInstance,
  NotificationPlacement,
} from './interface';
import { getCloseIcon, TypeIcon } from './PurePanel';
import useStyle from './style';
import { getCloseIconConfig, getMotion, getPlacementOffsetStyle } from './util';

const DEFAULT_DURATION = 4.5;
const DEFAULT_PLACEMENT: NotificationPlacement = 'topRight';
const DEFAULT_STACK_CONFIG = { offset: 8 };

// ==============================================================================
// ==                                  Holder                                  ==
// ==============================================================================
type HolderProps = NotificationConfig & {
  onAllRemoved?: VoidFunction;
};

interface HolderRef extends NotificationAPI {
  prefixCls: string;
  notification?: CPNotificationConfig;
}

const Wrapper: FC<PropsWithChildren<{ prefixCls: string }>> = ({ children, prefixCls }) => {
    throw new Error("STUB");
};

const renderNotifications: RcNotificationConfig['renderNotifications'] = (
  node,
  { prefixCls, key },
) => { throw new Error("STUB"); };

const Holder = React.forwardRef<HolderRef, HolderProps>((props, ref) => {
    throw new Error("STUB");
});

// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
export function useInternalNotification(
  notificationConfig?: HolderProps,
): readonly [NotificationInstance, React.ReactElement] {
  const holderRef = React.useRef<HolderRef>(null);
  const warning = devUseWarning('Notification');
  const { notification: notificationContext } = React.useContext(ConfigContext);
  // ================================ API ================================
  const wrapAPI = React.useMemo<NotificationInstance>(() => {
      throw new Error("STUB");
  }, [notificationConfig, notificationContext]);

  // ============================== Return ===============================
  return [
    wrapAPI,
    <Holder key="notification-holder" {...notificationConfig} ref={holderRef} />,
  ] as const;
}

export default function useNotification(notificationConfig?: NotificationConfig) {
  return useInternalNotification(notificationConfig);
}
