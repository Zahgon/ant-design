import * as React from 'react';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import { LayoutContext } from './context';
import useHasSider from './hooks/useHasSider';
import useStyle from './style';

export interface GeneratorProps {
  suffixCls?: string;
  tagName: 'header' | 'footer' | 'main' | 'div';
  displayName: string;
}

export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  suffixCls?: string;
  rootClassName?: string;
  hasSider?: boolean;
}

interface BasicPropsWithTagName extends BasicProps {
  tagName: 'header' | 'footer' | 'main' | 'div';
}

const generator = ({ suffixCls, tagName, displayName }: GeneratorProps) => {
  return (Component: React.ComponentType<BasicPropsWithTagName & React.RefAttributes<any>>) => {
      throw new Error("STUB");
  };
};

const Basic = React.forwardRef<HTMLDivElement, BasicPropsWithTagName>((props, ref) => {
    throw new Error("STUB");
});

const BasicLayout = React.forwardRef<HTMLDivElement, BasicPropsWithTagName>((props, ref) => {
    throw new Error("STUB");
});

const Layout = generator({
  tagName: 'div',
  displayName: 'Layout',
})(BasicLayout);

const Header = generator({
  suffixCls: 'header',
  tagName: 'header',
  displayName: 'Header',
})(Basic);

const Footer = generator({
  suffixCls: 'footer',
  tagName: 'footer',
  displayName: 'Footer',
})(Basic);

const Content = generator({
  suffixCls: 'content',
  tagName: 'main',
  displayName: 'Content',
})(Basic);

export { Content, Footer, Header };

export default Layout;
