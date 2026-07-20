import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

export type IconWrapperProps = {
  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const IconWrapper = forwardRef<HTMLSpanElement, IconWrapperProps>((props, ref) => {
    throw new Error("STUB");
});

export default IconWrapper;
