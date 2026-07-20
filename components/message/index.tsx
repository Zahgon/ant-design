import React, { useContext } from 'react';
import { render } from '@rc-component/util';

import { AppConfigContext } from '../app/context';
import ConfigProvider, { ConfigContext, globalConfig, warnContext } from '../config-provider';
import type {
  ArgsProps,
  ConfigOptions,
  MessageInstance,
  MessageType,
  NoticeType,
  TypeOpen,
} from './interface';
import PureList from './PureList';
import PurePanel from './PurePanel';
import useMessage, { useInternalMessage } from './useMessage';
import { wrapPromiseFn } from './util';

export type { ArgsProps };

let message: GlobalMessage | null = null;

let act: (callback: VoidFunction) => Promise<void> | void = (callback) => callback();

interface GlobalMessage {
  fragment: DocumentFragment;
  instance?: MessageInstance | null;
  sync?: VoidFunction;
}

interface OpenTask {
  type: 'open';
  config: ArgsProps;
  resolve: VoidFunction;
  setCloseFn: (closeFn: VoidFunction) => void;
  skipped?: boolean;
}

interface TypeTask {
  type: NoticeType;
  args: Parameters<TypeOpen>;
  resolve: VoidFunction;
  setCloseFn: (closeFn: VoidFunction) => void;
  skipped?: boolean;
}

type Task = OpenTask | TypeTask | { type: 'destroy'; key?: React.Key; skipped?: boolean };

let taskQueue: Task[] = [];

let defaultGlobalConfig: ConfigOptions = {};

function getGlobalContext() {
    throw new Error("STUB");
}

interface GlobalHolderRef {
  instance: MessageInstance;
  sync: () => void;
}

const GlobalHolder = React.forwardRef<
  GlobalHolderRef,
  { messageConfig: ConfigOptions; sync: () => void }
>((props, ref) => {
    throw new Error("STUB");
});

const GlobalHolderWrapper = React.forwardRef<GlobalHolderRef, unknown>((_, ref) => {
    throw new Error("STUB");
});

const flushMessageQueue = () => {
  if (!message) {
    const holderFragment = document.createDocumentFragment();

    const newMessage: GlobalMessage = {
      fragment: holderFragment,
    };

    message = newMessage;

    // Delay render to avoid sync issue
    act(() => {
        throw new Error("STUB");
    });

    return;
  }

  // Notification not ready
  if (!message.instance) {
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

function setMessageGlobalConfig(config: ConfigOptions) {
    throw new Error("STUB");
}

function open(config: ArgsProps): MessageType {
  const result = wrapPromiseFn((resolve) => {
      throw new Error("STUB");
  });

  flushMessageQueue();

  return result;
}

function typeOpen(type: NoticeType, args: Parameters<TypeOpen>): MessageType {
  const global = globalConfig();

  if (process.env.NODE_ENV !== 'production' && !global.holderRender) {
    warnContext('message');
  }

  const result = wrapPromiseFn((resolve) => {
      throw new Error("STUB");
  });

  flushMessageQueue();

  return result;
}

const destroy: BaseMethods['destroy'] = (key) => {
  taskQueue.push({ type: 'destroy', key });
  flushMessageQueue();
};

interface BaseMethods {
  open: (config: ArgsProps) => MessageType;
  destroy: (key?: React.Key) => void;
  config: typeof setMessageGlobalConfig;
  useMessage: typeof useMessage;
  /** @private Internal Component. Do not use in your production. */
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
  /** @private Internal Component. Do not use in your production. */
  _InternalListDoNotUseOrYouWillBeFired: typeof PureList;
}

interface MessageMethods {
  info: TypeOpen;
  success: TypeOpen;
  error: TypeOpen;
  warning: TypeOpen;
  loading: TypeOpen;
}

const methods: (keyof MessageMethods)[] = ['success', 'info', 'warning', 'error', 'loading'];

const baseStaticMethods: BaseMethods = {
  open,
  destroy,
  config: setMessageGlobalConfig,
  useMessage,
  _InternalPanelDoNotUseOrYouWillBeFired: PurePanel,
  _InternalListDoNotUseOrYouWillBeFired: PureList,
};

const staticMethods = baseStaticMethods as MessageMethods & BaseMethods;

methods.forEach((type: keyof MessageMethods) => {
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
