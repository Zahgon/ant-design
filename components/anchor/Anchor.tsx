import * as React from 'react';
import { useEvent } from '@rc-component/util';
import { clsx } from 'clsx';
import scrollIntoView from 'scroll-into-view-if-needed';

import getScroll from '../_util/getScroll';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction, isNumber, isPlainObject } from '../_util/is';
import scrollTo from '../_util/scrollTo';
import { devUseWarning } from '../_util/warning';
import Affix from '../affix';
import type { AffixProps } from '../affix';
import { ConfigContext, useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { AnchorLinkBaseProps } from './AnchorLink';
import AnchorLink from './AnchorLink';
import AnchorContext from './context';
import useStyle from './style';

export interface AnchorLinkItemProps extends AnchorLinkBaseProps {
  key: React.Key;
  children?: AnchorLinkItemProps[];
}

export type AnchorContainer = HTMLElement | Window;

function getDefaultContainer() {
    throw new Error("STUB");
}

function getOffsetTop(element: HTMLElement, container: AnchorContainer): number {
  if (!element.getClientRects().length) {
    return 0;
  }

  const rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      return rect.top - element.ownerDocument.documentElement!.clientTop;
    }
    return rect.top - (container as HTMLElement).getBoundingClientRect().top;
  }

  return rect.top;
}

const sharpMatcherRegex = /#([^\t\r\n\f\v]+)$/;

interface Section {
  link: string;
  top: number;
}

export type AnchorSemanticType = {
  classNames?: {
    root?: string;
    item?: string;
    itemTitle?: string;
    indicator?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
    itemTitle?: React.CSSProperties;
    indicator?: React.CSSProperties;
  };
};

export type AnchorSemanticAllType = GenerateSemantic<AnchorSemanticType, AnchorProps>;

export interface AnchorProps {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  classNames?: AnchorSemanticAllType['classNamesAndFn'];
  styles?: AnchorSemanticAllType['stylesAndFn'];
  /**
   * @deprecated Please use `items` instead.
   */
  children?: React.ReactNode;
  offsetTop?: number;
  bounds?: number;
  affix?: boolean | Omit<AffixProps, 'offsetTop' | 'target' | 'children'>;
  showInkInFixed?: boolean;
  getContainer?: () => AnchorContainer;
  /** Return customize highlight anchor */
  getCurrentAnchor?: (activeLink: string) => string;
  onClick?: (
    e: React.MouseEvent<HTMLElement>,
    link: { title: React.ReactNode; href: string },
  ) => void;
  /** Scroll to target offset value, if none, it's offsetTop prop value or 0. */
  targetOffset?: number;
  /** Listening event when scrolling change active link */
  onChange?: (currentActiveLink: string) => void;
  items?: AnchorLinkItemProps[];
  direction?: AnchorDirection;
  replace?: boolean;
}

export interface AnchorState {
  activeLink: null | string;
}

export interface AnchorDefaultProps extends AnchorProps {
  prefixCls: string;
  affix: boolean;
  showInkInFixed: boolean;
  getContainer: () => AnchorContainer;
}

export type AnchorDirection = 'vertical' | 'horizontal';

export interface AntAnchor {
  registerLink: (link: string, targetOffset?: number) => void;
  unregisterLink: (link: string) => void;
  activeLink: string | null;
  scrollTo: (link: string, targetOffset?: number) => void;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: { title: React.ReactNode; href: string },
  ) => void;
  direction: AnchorDirection;
  classNames?: AnchorSemanticAllType['classNames'];
  styles?: AnchorSemanticAllType['styles'];
}

const Anchor: React.FC<AnchorProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Anchor.displayName = 'Anchor';
}

export default Anchor;
