import * as React from 'react';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import type {
  EditableConfig,
  GetIndicatorSize,
  MoreProps,
  TabsProps as RcTabsProps,
  Tab,
} from '@rc-component/tabs';
import RcTabs from '@rc-component/tabs';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import useAnimateConfig from './hooks/useAnimateConfig';
import useLegacyItems from './hooks/useLegacyItems';
import useStyle from './style';
import TabPane from './TabPane';
import type { TabPaneProps } from './TabPane';

export type TabsType = 'line' | 'card' | 'editable-card';

export type TabPosition = 'top' | 'right' | 'bottom' | 'left';

export type TabPlacement = 'top' | 'end' | 'bottom' | 'start';

export type { TabPaneProps };

export type TabsSemanticType = {
  classNames?: {
    root?: string;
    item?: string;
    remove?: string;
    indicator?: string;
    body?: string;
    content?: string;
    header?: string;
    popup?: { root?: string };
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
    remove?: React.CSSProperties;
    indicator?: React.CSSProperties;
    body?: React.CSSProperties;
    content?: React.CSSProperties;
    header?: React.CSSProperties;
    popup?: { root?: React.CSSProperties };
  };
};

export type TabsSemanticAllType = GenerateSemantic<TabsSemanticType, TabsProps>;

export interface CompatibilityProps {
  /** @deprecated Please use `destroyOnHidden` instead */
  destroyInactiveTabPane?: boolean;
}

export interface TabsRef {
  nativeElement: React.ComponentRef<typeof RcTabs> | null;
}

export interface BaseTabsProps {
  type?: TabsType;
  size?: SizeType;
  hideAdd?: boolean;
  centered?: boolean;
  className?: string;
  rootClassName?: string;
  classNames?: TabsSemanticAllType['classNamesAndFn'];
  styles?: TabsSemanticAllType['stylesAndFn'];
  /** @deprecated please use `tabPlacement` instead */
  tabPosition?: TabPosition;
  tabPlacement?: TabPlacement;
  onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
  children?: React.ReactNode;
  /** @deprecated Please use `indicator={{ size: ... }}` instead */
  indicatorSize?: GetIndicatorSize;
  items?: (Tab & CompatibilityProps)[];
}

export interface TabsProps
  extends BaseTabsProps,
    CompatibilityProps,
    Omit<RcTabsProps, 'editable' | 'items' | 'classNames' | 'styles' | 'popupClassName'> {
  addIcon?: React.ReactNode;
  moreIcon?: React.ReactNode;
  more?: MoreProps;
  removeIcon?: React.ReactNode;
  /** @deprecated Please use `classNames.popup` instead */
  popupClassName?: string;
}

const InternalTabs = React.forwardRef<TabsRef, TabsProps>((props, ref) => {
    throw new Error("STUB");
});

type CompoundedComponent = typeof InternalTabs & { TabPane: typeof TabPane };

const Tabs = InternalTabs as CompoundedComponent;
Tabs.TabPane = TabPane;

if (process.env.NODE_ENV !== 'production') {
  Tabs.displayName = 'Tabs';
}

export default Tabs;
