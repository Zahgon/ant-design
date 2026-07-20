import type { FC } from 'react';
import React, { useContext } from 'react';

import Button from '../../button/Button';
import { convertLegacyProps } from '../../button/buttonHelpers';
import { ModalContext } from '../context';
import type { ModalProps } from '../interface';

export interface NormalOkBtnProps
  extends Pick<ModalProps, 'confirmLoading' | 'okType' | 'okButtonProps' | 'onOk'> {
  okTextLocale?: React.ReactNode;
}

const NormalOkBtn: FC = () => {
    throw new Error("STUB");
};

export default NormalOkBtn;
