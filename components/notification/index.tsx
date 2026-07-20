import React, { useContext } from 'react';
import { render } from '@rc-component/util';

import { AppConfigContext } from '../app/context';
import ConfigProvider, { ConfigContext, globalConfig, warnContext } from '../config-provider';
import type { ArgsProps, GlobalConfigProps, NotificationInstance } from './interface';
import PureList from './PureList';
import PurePanel from './PurePanel';
import useNotification, { useInternalNotification } from './useNotification';

export type { ArgsProps };

let notification: GlobalNotification | null = null;

let act: (callback: VoidFunction) => Promise<void> | void = (callback: VoidFunction) => callback();

interface GlobalNotification {
  fragment: DocumentFragment;
  instance?: NotificationInstance | null;
  sync?: VoidFunction;
}

type Task = { type: 'open'; config: ArgsProps } | { type: 'destroy'; key?: React.Key };

let taskQueue: Task[] = [];

let defaultGlobalConfig: GlobalConfigProps = {};

function getGlobalContext() {
    throw new Error("STUB");
}

interface GlobalHolderRef {
  instance: NotificationInstance;
  sync: () => void;
}

const GlobalHolder = React.forwardRef<
  GlobalHolderRef,
  { notificationConfig: GlobalConfigProps; sync: () => void }
>((props, ref) => {
    throw new Error("STUB");
});

const GlobalHolderWrapper = React.forwardRef<GlobalHolderRef, unknown>((_, ref) => {
    throw new Error("STUB");
});

const flushNotificationQueue = () => {
  if (!notification) {
    const holderFragment = document.createDocumentFragment();

    const newNotification: GlobalNotification = {
      fragment: holderFragment,
    };

    notification = newNotification;

    // Delay render to avoid sync issue
    act(() => {
        throw new Error("STUB");
    });

    return;
  }

  // Notification not ready
  if (!notification.instance) {
    return;
  }

  // >>> Execute task
  taskQueue.forEach((task) => {
      throw new Error("STUB");
  });

  // Clean up
  taskQueue = [];
};

// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================

function setNotificationGlobalConfig(config: GlobalConfigProps) {
    throw new Error("STUB");
}

function open(config: ArgsProps) {
  const global = globalConfig();

  if (process.env.NODE_ENV !== 'production' && !global.holderRender) {
    warnContext('notification');
  }

  taskQueue.push({ type: 'open', config });
  flushNotificationQueue();
}

const destroy: BaseMethods['destroy'] = (key) => {
  taskQueue.push({ type: 'destroy', key });
  flushNotificationQueue();
};

interface BaseMethods {
  open: (config: ArgsProps) => void;
  destroy: (key?: React.Key) => void;
  config: (config: GlobalConfigProps) => void;
  useNotification: typeof useNotification;
  /** @private Internal Component. Do not use in your production. */
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
  /** @private Internal Component. Do not use in your production. */
  _InternalListDoNotUseOrYouWillBeFired: typeof PureList;
}

type StaticFn = (config: ArgsProps) => void;

interface NoticeMethods {
  success: StaticFn;
  info: StaticFn;
  warning: StaticFn;
  error: StaticFn;
}

const methods: (keyof NoticeMethods)[] = ['success', 'info', 'warning', 'error'];

const baseStaticMethods: BaseMethods = {
  open,
  destroy,
  config: setNotificationGlobalConfig,
  useNotification,
  _InternalPanelDoNotUseOrYouWillBeFired: PurePanel,
  _InternalListDoNotUseOrYouWillBeFired: PureList,
};

const staticMethods = baseStaticMethods as NoticeMethods & BaseMethods;

methods.forEach((type: keyof NoticeMethods) => {
    throw new Error("STUB");
});

// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = () => {
    throw new Error("STUB");
};

let _actWrapper: (wrapper: (fn: () => void) => void) => void = noop;
if (process.env.NODE_ENV === 'test') {
  _actWrapper = (wrapper) => {
      throw new Error("STUB");
  };
}
const actWrapper = _actWrapper;
export { actWrapper };

let _actDestroy = noop;
if (process.env.NODE_ENV === 'test') {
  _actDestroy = () => {
      throw new Error("STUB");
  };
}
const actDestroy = _actDestroy;
export { actDestroy };

export default staticMethods;
