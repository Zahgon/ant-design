import * as React from 'react';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import { clsx } from 'clsx';

import ActionButton from '../_util/ActionButton';
import { getRenderPropValue } from '../_util/getRenderPropValue';
import { isReactRenderable } from '../_util/is';
import Button from '../button/Button';
import { convertLegacyProps } from '../button/buttonHelpers';
import { ConfigContext } from '../config-provider';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';
import type { PopconfirmProps, PopconfirmSemanticAllType } from '.';
import PopoverPurePanel from '../popover/PurePanel';
import useStyle from './style';

export interface PopconfirmLocale {
  okText: string;
  cancelText: string;
}

export interface OverlayProps
  extends Pick<
    PopconfirmProps,
    | 'icon'
    | 'okButtonProps'
    | 'cancelButtonProps'
    | 'cancelText'
    | 'okText'
    | 'okType'
    | 'showCancel'
    | 'title'
    | 'description'
    | 'onPopupClick'
  > {
  prefixCls: string;
  close?: (...args: any[]) => void;
  onConfirm?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  classNames?: PopconfirmSemanticAllType['classNames'];
  styles?: PopconfirmSemanticAllType['styles'];
}

export const Overlay: React.FC<OverlayProps> = (props) => {
    throw new Error("STUB");
};

export interface PurePanelProps
  extends Omit<OverlayProps, 'prefixCls'>,
    Pick<PopconfirmProps, 'placement'> {
  className?: string;
  style?: React.CSSProperties;
  prefixCls?: string;
}

const PurePanel: React.FC<PurePanelProps> = (props) => {
    throw new Error("STUB");
};

export default PurePanel;
