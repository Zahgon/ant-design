import React, { forwardRef } from 'react';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import CSSMotion from '@rc-component/motion';
import { clsx } from 'clsx';

import IconWrapper from './IconWrapper';

type InnerLoadingIconProps = {
  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  iconClassName?: string;
};

const InnerLoadingIcon = forwardRef<HTMLSpanElement, InnerLoadingIconProps>((props, ref) => {
    throw new Error("STUB");
});

export type DefaultLoadingIconProps = {
  prefixCls: string;
  existIcon: boolean;
  loading?: boolean | object;
  className?: string;
  style?: React.CSSProperties;
  mount: boolean;
};

const getCollapsedWidth = (): React.CSSProperties => { throw new Error("STUB"); };

const getRealWidth = (node: HTMLElement): React.CSSProperties => { throw new Error("STUB"); };

const DefaultLoadingIcon: React.FC<DefaultLoadingIconProps> = (props) => {
    throw new Error("STUB");
};

export default DefaultLoadingIcon;
