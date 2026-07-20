import * as React from 'react';
import RightOutlined from '@ant-design/icons/RightOutlined';
import type { CollapseProps as RcCollapseProps } from '@rc-component/collapse';
import RcCollapse from '@rc-component/collapse';
import type { CSSMotionProps } from '@rc-component/motion';
import { omit, toArray } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../_util/is';
import initCollapseMotion from '../_util/motion';
import { cloneElement } from '../_util/reactNode';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import type { CollapsibleType } from './CollapsePanel';
import CollapsePanel from './CollapsePanel';
import useStyle from './style';

export type ExpandIconPlacement = 'start' | 'end';

export type CollapseSemanticType = {
  classNames?: {
    root?: string;
    header?: string;
    title?: string;
    body?: string;
    icon?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    header?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
    icon?: React.CSSProperties;
  };
};

export type CollapseSemanticAllType = GenerateSemantic<CollapseSemanticType, CollapseProps>;

export interface CollapseProps extends Pick<RcCollapseProps, 'items'> {
  activeKey?: Array<string | number> | string | number;
  defaultActiveKey?: Array<string | number> | string | number;
  /** 手风琴效果 */
  accordion?: boolean;
  /** @deprecated Please use `destroyOnHidden` instead */
  destroyInactivePanel?: boolean;
  /**
   * @since 5.25.0
   */
  destroyOnHidden?: boolean;
  onChange?: (key: string[]) => void;
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  bordered?: boolean;
  prefixCls?: string;
  expandIcon?: (panelProps: PanelProps) => React.ReactNode;
  expandIconPlacement?: ExpandIconPlacement;
  /** @deprecated Please use `expandIconPlacement` instead */
  expandIconPosition?: ExpandIconPlacement;
  ghost?: boolean;
  size?: SizeType;
  collapsible?: CollapsibleType;
  /**
   * @deprecated use `items` instead
   */
  children?: React.ReactNode;
  classNames?: CollapseSemanticAllType['classNamesAndFn'];
  styles?: CollapseSemanticAllType['stylesAndFn'];
}

interface PanelProps {
  isActive?: boolean;
  header?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  forceRender?: boolean;
  extra?: React.ReactNode;
  collapsible?: CollapsibleType;
  classNames?: CollapseSemanticAllType['classNames'];
  styles?: CollapseSemanticAllType['styles'];
}

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Collapse.displayName = 'Collapse';
}

export default Object.assign(Collapse, { Panel: CollapsePanel });
