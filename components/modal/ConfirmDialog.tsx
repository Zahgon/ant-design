import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import fallbackProp from '../_util/fallbackProp';
import { CONTAINER_MAX_OFFSET, normalizeMaskConfig } from '../_util/hooks';
import { isFunction, isPlainObject, isReactRenderable } from '../_util/is';
import { getTransitionName } from '../_util/motion';
import { devUseWarning } from '../_util/warning';
import type { ThemeConfig } from '../config-provider';
import ConfigProvider from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import { useLocale } from '../locale';
import useToken from '../theme/useToken';
import CancelBtn from './components/ConfirmCancelBtn';
import OkBtn from './components/ConfirmOkBtn';
import type { ModalContextProps } from './context';
import { ModalContextProvider } from './context';
import type { ModalFuncProps, ModalLocale } from './interface';
import Modal from './Modal';
import Confirm from './style/confirm';

const CONFIRM_OMIT_SEMANTIC_NAMES = ['body'] as const;

type ConfirmContentSemantic = {
  classNames: { body?: string };
  styles: { body?: React.CSSProperties };
};

export interface ConfirmDialogProps extends ModalFuncProps {
  prefixCls: string;
  afterClose?: () => void;
  close?: (...args: any[]) => void;
  /**
   * `close` prop support `...args` that pass to the developer
   * that we can not break this.
   * Provider `onClose` for internal usage
   */
  onConfirm?: (confirmed: boolean) => void;
  autoFocusButton?: null | 'ok' | 'cancel';
  rootPrefixCls?: string;
  iconPrefixCls?: string;

  /**
   * Only passed by static method
   */
  theme?: ThemeConfig;

  /** @private Internal Usage. Do not override this */
  locale?: ModalLocale;

  /**
   * Do not throw if is await mode
   */
  isSilent?: () => boolean;
}

export const ConfirmContent: React.FC<
  ConfirmDialogProps & {
    confirmPrefixCls: string;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
  }
> = (props) => {
    throw new Error("STUB");
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
    throw new Error("STUB");
};

const ConfirmDialogWrapper: React.FC<ConfirmDialogProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  ConfirmDialog.displayName = 'ConfirmDialog';
  ConfirmDialogWrapper.displayName = 'ConfirmDialogWrapper';
}

export default ConfirmDialogWrapper;
