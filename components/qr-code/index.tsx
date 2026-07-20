import React from 'react';
import { QRCodeCanvas, QRCodeSVG } from '@rc-component/qrcode';
import { omit, pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isNumber } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import { useLocale } from '../locale';
import { useToken } from '../theme/internal';
import type { QRCodeProps, QRProps, QRPropsCanvas, QRPropsSvg } from './interface';
import QRcodeStatus from './QrcodeStatus';
import useStyle from './style/index';

export type { QRCodeProps, QRProps, QRPropsCanvas, QRPropsSvg };

const QRCode: React.FC<QRCodeProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  QRCode.displayName = 'QRCode';
}

export default QRCode;
