import * as React from 'react';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import CopyOutlined from '@ant-design/icons/CopyOutlined';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { clsx } from 'clsx';

import type { CopyConfig } from '.';
import type { Locale } from '../../locale';
import Tooltip from '../../tooltip';
import { getNode, toCopyConfigList } from './util';

export interface CopyBtnProps extends Omit<CopyConfig, 'onCopy'> {
  prefixCls: string;
  copied: boolean;
  locale: Locale['Text'];
  onCopy: React.MouseEventHandler<HTMLButtonElement>;
  iconOnly: boolean;
  loading: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const CopyBtn: React.FC<CopyBtnProps> = (props) => {
    throw new Error("STUB");
};

export default CopyBtn;
