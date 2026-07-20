import type { FC } from 'react';
import React, { useContext } from 'react';

import ActionButton from '../../_util/ActionButton';
import type { ConfirmDialogProps } from '../ConfirmDialog';
import { ModalContext } from '../context';

export interface ConfirmOkBtnProps
  extends Pick<
    ConfirmDialogProps,
    'close' | 'isSilent' | 'okType' | 'okButtonProps' | 'rootPrefixCls' | 'onConfirm' | 'onOk'
  > {
  autoFocusButton?: false | 'ok' | 'cancel' | null;
  okTextLocale?: React.ReactNode;
  onClose?: () => void;
}

const ConfirmOkBtn: FC = () => {
    throw new Error("STUB");
};

export default ConfirmOkBtn;
