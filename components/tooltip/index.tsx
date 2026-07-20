import * as React from 'react';
import RcTooltip from '@rc-component/tooltip';
import type { BuildInPlacements } from '@rc-component/trigger';
import { useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import type { PresetColorType } from '../_util/colors';
import ContextIsolator from '../_util/ContextIsolator';
import type { RenderFunction } from '../_util/getRenderPropValue';
import { useZIndex } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../_util/is';
import { getTransitionName } from '../_util/motion';
import type { AdjustOverflow, PlacementsConfig } from '../_util/placements';
import getPlacements from '../_util/placements';
import { cloneElement, isFragment } from '../_util/reactNode';
import type { LiteralUnion } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import ZIndexContext from '../_util/zindexContext';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import TableMeasureRowContext from '../table/TableMeasureRowContext';
import { useToken } from '../theme/internal';
import useMergedArrow from './hook/useMergedArrow';
import PurePanel from './PurePanel';
import useStyle from './style';
import UniqueProvider from './UniqueProvider';
import { parseColor } from './util';

type RcTooltipProps = React.ComponentPropsWithoutRef<typeof RcTooltip>;
type RcTooltipRef = React.ComponentRef<typeof RcTooltip>;
type Placements = NonNullable<RcTooltipProps['builtinPlacements']>;

export type { AdjustOverflow, PlacementsConfig };

export interface TooltipRef {
  forceAlign: VoidFunction;
  /** Wrapped dom element. Not promise valid if child not support ref */
  nativeElement: HTMLElement;
  /** Popup dom element */
  popupElement: HTMLDivElement;
}

export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

// https://github.com/react-component/tooltip
// https://github.com/yiminghe/dom-align
export interface TooltipAlignConfig {
  points?: [string, string];
  offset?: [number | string, number | string];
  targetOffset?: [number | string, number | string];
  overflow?: { adjustX: boolean; adjustY: boolean };
  useCssRight?: boolean;
  useCssBottom?: boolean;
  useCssTransform?: boolean;
}
// remove this after RcTooltip switch visible to open.
interface LegacyTooltipProps
  extends Partial<
    Omit<
      RcTooltipProps,
      | 'children'
      | 'visible'
      | 'defaultVisible'
      | 'onVisibleChange'
      | 'afterVisibleChange'
      | 'destroyTooltipOnHide'
      | 'classNames'
      | 'styles'
    >
  > {
  open?: RcTooltipProps['visible'];
  defaultOpen?: RcTooltipProps['defaultVisible'];
  onOpenChange?: RcTooltipProps['onVisibleChange'];
  afterOpenChange?: RcTooltipProps['afterVisibleChange'];
}

export type TooltipSemanticType = {
  classNames?: {
    root?: string;
    container?: string;
    arrow?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    container?: React.CSSProperties;
    arrow?: React.CSSProperties;
  };
};

export type TooltipSemanticAllType = GenerateSemantic<TooltipSemanticType, TooltipProps>;

export interface AbstractTooltipProps extends LegacyTooltipProps {
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  color?: LiteralUnion<PresetColorType>;
  placement?: TooltipPlacement;
  builtinPlacements?: Placements;
  openClassName?: string;
  arrow?: boolean | { pointAtCenter?: boolean };
  autoAdjustOverflow?: boolean | AdjustOverflow;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  children?: React.ReactNode;

  /**
   * @since 5.25.0
   */
  destroyOnHidden?: boolean;

  // ===================== Legacy ==============================
  /** @deprecated Please use `destroyOnHidden` instead */
  destroyTooltipOnHide?: boolean | { keepParent?: boolean };

  /** @deprecated Please use `styles.root` instead */
  overlayStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.container` instead */
  overlayInnerStyle?: React.CSSProperties;
  /** @deprecated Please use `classNames.root` instead */
  overlayClassName?: string;
}

export interface TooltipProps extends AbstractTooltipProps {
  title?: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
  classNames?: TooltipSemanticAllType['classNamesAndFn'];
  styles?: TooltipSemanticAllType['stylesAndFn'];
}

interface InternalTooltipProps extends TooltipProps {
  /**
   * @internal
   * Internal props type with hidden properties
   */
  'data-popover-inject'?: boolean;
}

const InternalTooltip = React.forwardRef<TooltipRef, InternalTooltipProps>((props, ref) => {
    throw new Error("STUB");
});

type CompoundedComponent = typeof InternalTooltip & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
  UniqueProvider: typeof UniqueProvider;
};

const Tooltip = InternalTooltip as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = 'Tooltip';
}

Tooltip._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
Tooltip.UniqueProvider = UniqueProvider;

export default Tooltip;
