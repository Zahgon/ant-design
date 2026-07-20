import React, { useContext } from 'react';
import { render, unmount } from '@rc-component/util';

import { isFunction } from '../_util/is';
import warning from '../_util/warning';
import ConfigProvider, { ConfigContext, globalConfig, warnContext } from '../config-provider';
import type { ConfirmDialogProps } from './ConfirmDialog';
import ConfirmDialog from './ConfirmDialog';
import destroyFns from './destroyFns';
import type { ModalFuncProps } from './interface';
import { getConfirmLocale } from './locale';

let defaultRootPrefixCls = '';

function getRootPrefixCls() {
  return defaultRootPrefixCls;
}

export type ConfigUpdate = ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps);

export type ModalFunc = (props: ModalFuncProps) => {
  destroy: () => void;
  update: (configUpdate: ConfigUpdate) => void;
};

export type ModalStaticFunctions = {
  info: ModalFunc;
  success: ModalFunc;
  error: ModalFunc;
  warning: ModalFunc;
  confirm: ModalFunc;
  /** @deprecated Please use `warning` instead */
  warn: ModalFunc;
};

const ConfirmDialogWrapper: React.FC<ConfirmDialogProps> = (props) => {
    throw new Error("STUB");
};

export default function confirm(config: ModalFuncProps) {
  const global = globalConfig();

  if (process.env.NODE_ENV !== 'production' && !global.holderRender) {
    warnContext('Modal');
  }

  const container = document.createDocumentFragment();
  let currentConfig = { ...config, close, open: true } as any;
  let timeoutId: ReturnType<typeof setTimeout>;

  function destroy(...args: any[]) {
    const triggerCancel = args.some((param) => { throw new Error("STUB"); });
    if (triggerCancel) {
      config.onCancel?.(() => {
          throw new Error("STUB");
      }, ...args.slice(1));
    }
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }

    unmount(container).then(() => {
        throw new Error("STUB");
    });
  }

  const scheduleRender = (props: ConfirmDialogProps) => {
    clearTimeout(timeoutId);

    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    timeoutId = setTimeout(() => {
        throw new Error("STUB");
    });
  };

  function close(...args: any[]) {
    currentConfig = {
      ...currentConfig,
      open: false,
      afterClose: () => {
          throw new Error("STUB");
      },
    };

    scheduleRender(currentConfig);
  }

  function update(configUpdate: ConfigUpdate) {
    if (isFunction(configUpdate)) {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = { ...currentConfig, ...configUpdate };
    }
    scheduleRender(currentConfig);
  }

  scheduleRender(currentConfig);

  destroyFns.push(close);

  return {
    destroy: close,
    update,
  };
}

export function withWarn(props: ModalFuncProps): ModalFuncProps {
    throw new Error("STUB");
}

export function withInfo(props: ModalFuncProps): ModalFuncProps {
  return {
    ...props,
    type: 'info',
  };
}

export function withSuccess(props: ModalFuncProps): ModalFuncProps {
  return {
    ...props,
    type: 'success',
  };
}

export function withError(props: ModalFuncProps): ModalFuncProps {
  return {
    ...props,
    type: 'error',
  };
}

export function withConfirm(props: ModalFuncProps): ModalFuncProps {
  return {
    ...props,
    type: 'confirm',
  };
}

export function modalGlobalConfig({ rootPrefixCls }: { rootPrefixCls: string }) {
    throw new Error("STUB");
}
