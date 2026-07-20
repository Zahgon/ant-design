/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';
import BackTop from './BackTop';
import FloatButton, { floatButtonPrefixCls } from './FloatButton';
import type { FloatButtonProps } from './FloatButton';
import FloatButtonGroup from './FloatButtonGroup';
import type { FloatButtonGroupProps } from './FloatButtonGroup';

export interface PureFloatButtonProps extends Omit<FloatButtonProps, 'target'> {
  backTop?: boolean;
}

type ClassNamesType = PureFloatButtonProps['classNames'] | FloatButtonGroupProps['classNames'];
type StylesType = PureFloatButtonProps['styles'] | FloatButtonGroupProps['styles'];

export interface PurePanelProps
  extends Omit<PureFloatButtonProps, 'classNames' | 'styles'>,
    Omit<FloatButtonGroupProps, 'children' | 'classNames' | 'styles'> {
  /** Convert to FloatGroup when configured */
  items?: PureFloatButtonProps[];
  classNames?: ClassNamesType;
  styles?: StylesType;
}

const PureFloatButton: React.FC<PureFloatButtonProps> = ({ backTop, ...props }) =>
  { throw new Error("STUB"); };

/** @private Internal Component. Do not use in your production. */
const PurePanel: React.FC<PurePanelProps> = ({
  className,
  items,
  classNames: cls,
  styles,
  prefixCls: customizePrefixCls,
  ...restProps
}) => {
    throw new Error("STUB");
};

export default PurePanel;
