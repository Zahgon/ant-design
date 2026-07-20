import React from 'react';
import ReloadOutlined from '@ant-design/icons/ReloadOutlined';

import Button from '../button/Button';
import type { Locale } from '../locale';
import Spin from '../spin';
import type { QRCodeProps, StatusRenderInfo } from './interface';

export type QRcodeStatusProps = {
  prefixCls: string;
  locale?: Locale['QRCode'];
  onRefresh?: QRCodeProps['onRefresh'];
  statusRender?: QRCodeProps['statusRender'];
  status: StatusRenderInfo['status'];
};

const defaultSpin = <Spin />;

export default function QRcodeStatus({
  prefixCls,
  locale,
  onRefresh,
  statusRender,
  status,
}: QRcodeStatusProps) {
    throw new Error("STUB");
}
