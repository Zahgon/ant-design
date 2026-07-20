import * as React from 'react';
import { useState } from '@rc-component/util';

import Button from '../button/Button';
import type { ButtonProps, LegacyButtonType } from '../button/Button';
import { convertLegacyProps } from '../button/buttonHelpers';
import { isThenable } from './is';

export interface ActionButtonProps {
  type?: LegacyButtonType;
  actionFn?: (...args: any[]) => any | PromiseLike<any>;
  close?: (...args: any[]) => void;
  autoFocus?: boolean;
  prefixCls: string;
  buttonProps?: ButtonProps;
  emitEvent?: boolean;
  quitOnNullishReturnValue?: boolean;
  children?: React.ReactNode;

  /**
   * Do not throw if is await mode
   */
  isSilent?: () => boolean;
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
    throw new Error("STUB");
};

export default ActionButton;
