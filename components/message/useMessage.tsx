import * as React from 'react';
import {
  NotificationProvider,
  useNotification as useRcNotification,
} from '@rc-component/notification';
import type {
  NotificationAPI,
  NotificationConfig as RcNotificationConfig,
  NotificationProps as RcNotificationProps,
} from '@rc-component/notification';
import { clsx } from 'clsx';

import { resolveStyleOrClass, useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isFunction, isNonNullable, isPlainObject } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import type { MessageConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useStackConfig from '../notification/hooks/useStackConfig';
import { getPlacementOffsetStyle } from '../notification/util';
import type {
  ArgsProps,
  ConfigOptions,
  MessageInstance,
  MessageType,
  NoticeType,
  TypeOpen,
} from './interface';
import { getMessageIcon } from './PurePanel';
import useStyle from './style';
import { getMotion, wrapPromiseFn } from './util';

const DEFAULT_OFFSET = 8;
const DEFAULT_DURATION = 3;
const DEFAULT_STACK_CONFIG = false;

// ==============================================================================
// ==                                  Holder                                  ==
// ==============================================================================
type HolderProps = ConfigOptions & {
  onAllRemoved?: VoidFunction;
};

interface HolderRef extends NotificationAPI {
  prefixCls: string;
  message?: MessageConfig;
}

const Wrapper: React.FC<React.PropsWithChildren<{ prefixCls: string }>> = ({
  children,
  prefixCls,
}) => {
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
let keyIndex = 0;

export function useInternalMessage(
  messageConfig?: HolderProps,
): readonly [MessageInstance, React.ReactElement] {
  const holderRef = React.useRef<HolderRef>(null);

  const warning = devUseWarning('Message');

  // ================================ API ================================
  const wrapAPI = React.useMemo<MessageInstance>(() => {
      throw new Error("STUB");
  }, []);

  // ============================== Return ===============================
  return [wrapAPI, <Holder key="message-holder" {...messageConfig} ref={holderRef} />] as const;
}

export default function useMessage(messageConfig?: ConfigOptions) {
  return useInternalMessage(messageConfig);
}
