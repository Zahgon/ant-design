import * as React from 'react';
import { useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import type { RenderFunction } from '../_util/getRenderPropValue';
import { getRenderPropValue } from '../_util/getRenderPropValue';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isReactRenderable } from '../_util/is';
import { getTransitionName } from '../_util/motion';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import type { AbstractTooltipProps, TooltipRef, TooltipSemanticAllType } from '../tooltip';
import Tooltip from '../tooltip';
import useMergedArrow from '../tooltip/hook/useMergedArrow';
import PurePanel, { Overlay } from './PurePanel';
// CSSINJS
import useStyle from './style';

export type PopoverSemanticType = {
  classNames?: {
    title?: string;
    content?: string;
  } & TooltipSemanticAllType['classNames'];
  styles?: {
    title?: React.CSSProperties;
    content?: React.CSSProperties;
  } & TooltipSemanticAllType['styles'];
};

export type PopoverSemanticAllType = GenerateSemantic<PopoverSemanticType, PopoverProps>;

export interface PopoverProps extends AbstractTooltipProps {
  title?: React.ReactNode | RenderFunction;
  content?: React.ReactNode | RenderFunction;
  onOpenChange?: (open: boolean) => void;
  classNames?: PopoverSemanticAllType['classNamesAndFn'];
  styles?: PopoverSemanticAllType['stylesAndFn'];
}

const InternalPopover = React.forwardRef<TooltipRef, PopoverProps>((props, ref) => {
    throw new Error("STUB");
});

type CompoundedComponent = typeof InternalPopover & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};

const Popover = InternalPopover as CompoundedComponent;

Popover._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

if (process.env.NODE_ENV !== 'production') {
  Popover.displayName = 'Popover';
}

export default Popover;
