import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import BarsOutlined from '@ant-design/icons/BarsOutlined';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../_util/is';
import type { Breakpoint } from '../_util/responsiveObserver';
import { ConfigContext } from '../config-provider';
import { LayoutContext } from './context';
import useStyle from './style/sider';

const dimensionMaxMap: Record<Breakpoint, string> = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px',
  xxxl: `1839.98px`,
};

const isNumeric = (val: any) =>
  !Number.isNaN(Number.parseFloat(val)) && Number.isFinite(Number(val));

export interface SiderContextProps {
  siderCollapsed?: boolean;
}

export const SiderContext: React.Context<SiderContextProps> = React.createContext({});

export type CollapseType = 'clickTrigger' | 'responsive';

export type SiderTheme = 'light' | 'dark';

export type SiderSemanticType = {
  classNames?: {
    root?: string;
    body?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    body?: React.CSSProperties;
  };
};

export type SiderSemanticAllType = GenerateSemantic<SiderSemanticType, SiderProps>;

export interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  reverseArrow?: boolean;
  onCollapse?: (collapsed: boolean, type: CollapseType) => void;
  zeroWidthTriggerStyle?: React.CSSProperties;
  trigger?: React.ReactNode;
  width?: number | string;
  collapsedWidth?: number | string;
  breakpoint?: Breakpoint;
  theme?: SiderTheme;
  onBreakpoint?: (broken: boolean) => void;
  classNames?: SiderSemanticAllType['classNamesAndFn'];
  styles?: SiderSemanticAllType['stylesAndFn'];
}

export interface SiderState {
  collapsed?: boolean;
  below: boolean;
}

const generateId = (() => {
    throw new Error("STUB");
})();

const Sider = React.forwardRef<HTMLDivElement, SiderProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Sider.displayName = 'Sider';
}

export default Sider;
