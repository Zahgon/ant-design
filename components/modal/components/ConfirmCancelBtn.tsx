import type { FC } from 'react';
import React, { useContext } from 'react';

import ActionButton from '../../_util/ActionButton';
import type { ConfirmDialogProps } from '../ConfirmDialog';
import { ModalContext } from '../context';

export interface ConfirmCancelBtnProps
  extends Pick<
    ConfirmDialogProps,
    'cancelButtonProps' | 'isSilent' | 'rootPrefixCls' | 'close' | 'onConfirm' | 'onCancel'
  > {
  autoFocusButton?: false | 'ok' | 'cancel' | null;
  cancelTextLocale?: React.ReactNode;
  mergedOkCancel?: boolean;
  onClose?: () => void;
}

const ConfirmCancelBtn: FC = () => {
    throw new Error("STUB");
};

export default ConfirmCancelBtn;
