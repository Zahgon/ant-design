import * as React from 'react';

import { isFunction } from '../../_util/is';
import { ConfigContext } from '../../config-provider';
import defaultLocale from '../../locale/en_US';
import useLocale from '../../locale/useLocale';
import type { ConfigUpdate } from '../confirm';
import ConfirmDialog from '../ConfirmDialog';
import type { ModalFuncProps } from '../interface';

export interface HookModalProps {
  afterClose: () => void;
  config: ModalFuncProps;
  onConfirm?: (confirmed: boolean) => void;
  /**
   * Do not throw if is await mode
   */
  isSilent?: () => boolean;
}

export interface HookModalRef {
  destroy: () => void;
  update: (config: ConfigUpdate) => void;
}

const HookModal = React.forwardRef<HookModalRef, HookModalProps>((props, ref) => {
    throw new Error("STUB");
});

export default HookModal;
