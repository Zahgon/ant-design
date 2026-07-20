import * as React from 'react';
import { useControlledState } from '@rc-component/util';

import ConfigProvider, { ConfigContext } from '../config-provider';
import type { AnyObject } from './type';

export function withPureRenderTheme<T extends AnyObject = AnyObject>(Component: React.FC<T>) {
  return (props: T) => { throw new Error("STUB"); };
}

export interface BaseProps {
  prefixCls?: string;
  style?: React.CSSProperties;
}

/* istanbul ignore next */
const genPurePanel = <ComponentProps extends BaseProps = BaseProps>(
  Component: React.ComponentType<Readonly<ComponentProps>>,
  alignPropName?: 'align' | 'dropdownAlign' | 'popupAlign',
  postProps?: (props: ComponentProps) => ComponentProps,
  defaultPrefixCls?: string,
  getDropdownCls?: (prefixCls: string) => string,
) => {
  type WrapProps = ComponentProps & AnyObject;

  const PurePanel: React.FC<WrapProps> = (props) => {
      throw new Error("STUB");
  };

  return withPureRenderTheme<AnyObject>(PurePanel);
};

export default genPurePanel;
