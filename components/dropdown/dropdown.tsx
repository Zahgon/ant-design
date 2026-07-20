import * as React from 'react';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import RcDropdown from '@rc-component/dropdown';
import type { MenuProps as RcMenuProps } from '@rc-component/menu';
import type { AlignType } from '@rc-component/trigger';
import { getNodeRef, omit, useComposeRef, useControlledState, useEvent } from '@rc-component/util';
import { clsx } from 'clsx';

import { useZIndex } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isPlainObject, isPrimitive } from '../_util/is';
import type { AdjustOverflow } from '../_util/placements';
import getPlacements from '../_util/placements';
import genPurePanel from '../_util/PurePanel';
import { cloneElement } from '../_util/reactNode';
import { devUseWarning } from '../_util/warning';
import zIndexContext from '../_util/zindexContext';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { MenuProps } from '../menu';
import Menu from '../menu';
import { OverrideProvider } from '../menu/OverrideContext';
import { useToken } from '../theme/internal';
import useStyle from './style';

const _Placements = [
  'topLeft',
  'topCenter',
  'topRight',
  'bottomLeft',
  'bottomCenter',
  'bottomRight',
  'top',
  'bottom',
  'left',
  'leftTop',
  'leftBottom',
  'right',
  'rightTop',
  'rightBottom',
] as const;

type Placement = (typeof _Placements)[number];

type DropdownPlacement = Exclude<Placement, 'topCenter' | 'bottomCenter'>;

export type DropdownArrowOptions = {
  pointAtCenter?: boolean;
};
export type DropdownSemanticType = {
  classNames?: {
    root?: string;
    item?: string;
    itemTitle?: string;
    itemIcon?: string;
    itemContent?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
    itemTitle?: React.CSSProperties;
    itemIcon?: React.CSSProperties;
    itemContent?: React.CSSProperties;
  };
};

export type DropdownSemanticAllType = GenerateSemantic<DropdownSemanticType, DropdownProps>;

export interface DropdownProps {
  classNames?: DropdownSemanticAllType['classNamesAndFn'];
  styles?: DropdownSemanticAllType['stylesAndFn'];
  menu?: MenuProps & { activeKey?: RcMenuProps['activeKey'] };
  autoFocus?: boolean;
  arrow?: boolean | DropdownArrowOptions;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  /** @deprecated Please use `popupRender` instead */
  dropdownRender?: (originNode: React.ReactNode) => React.ReactNode;
  popupRender?: (originNode: React.ReactNode) => React.ReactNode;
  onOpenChange?: (open: boolean, info: { source: 'trigger' | 'menu' }) => void;
  open?: boolean;
  disabled?: boolean;
  /** @deprecated Please use `destroyOnHidden` instead */
  destroyPopupOnHide?: boolean;
  /**
   * @since 5.25.0
   */
  destroyOnHidden?: boolean;
  align?: AlignType;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  transitionName?: string;
  placement?: Placement;
  /** @deprecated please use `classNames.root` instead.*/
  overlayClassName?: string;
  /** @deprecated please use `styles.root` instead.*/
  overlayStyle?: React.CSSProperties;
  forceRender?: boolean;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  openClassName?: string;
  children?: React.ReactNode;
  autoAdjustOverflow?: boolean | AdjustOverflow;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  DropdownProps & React.RefAttributes<HTMLElement>
> & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof WrapPurePanel;
};

const Dropdown: CompoundedComponent = React.forwardRef<HTMLElement, DropdownProps>((props, ref) => {
    throw new Error("STUB");
}) as CompoundedComponent;

// We don't care debug panel
const PurePanel = genPurePanel(Dropdown, 'align', undefined, 'dropdown', (prefixCls) => { throw new Error("STUB"); });

/* istanbul ignore next */
const WrapPurePanel: React.FC<DropdownProps> = (props) => { throw new Error("STUB"); };

Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;

if (process.env.NODE_ENV !== 'production') {
  Dropdown.displayName = 'Dropdown';
}

export default Dropdown;
