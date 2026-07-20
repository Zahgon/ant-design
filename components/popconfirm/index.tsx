import * as React from 'react';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import { omit, useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import type { RenderFunction } from '../_util/getRenderPropValue';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { devUseWarning } from '../_util/warning';
import type { ButtonProps, LegacyButtonType } from '../button/Button';
import { useComponentConfig } from '../config-provider/context';
import type { PopoverProps, PopoverSemanticType } from '../popover';
import Popover from '../popover';
import type { AbstractTooltipProps, TooltipRef } from '../tooltip';
import useMergedArrow from '../tooltip/hook/useMergedArrow';
import PurePanel, { Overlay } from './PurePanel';
import useStyle from './style';

export type PopconfirmSemanticType = {
  classNames?: PopoverSemanticType['classNames'] & {
    icon?: string;
  };
  styles?: PopoverSemanticType['styles'] & {
    icon?: React.CSSProperties;
  };
};

export type PopconfirmSemanticAllType = GenerateSemantic<PopconfirmSemanticType, PopconfirmProps>;

export interface PopconfirmProps extends AbstractTooltipProps {
  title: React.ReactNode | RenderFunction;
  description?: React.ReactNode | RenderFunction;
  disabled?: boolean;
  onConfirm?: (e?: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e?: React.MouseEvent<HTMLElement>) => void;
  okText?: React.ReactNode;
  okType?: LegacyButtonType;
  cancelText?: React.ReactNode;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  showCancel?: boolean;
  icon?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  onPopupClick?: (e: React.MouseEvent<HTMLElement>) => void;
  classNames?: PopconfirmSemanticAllType['classNamesAndFn'];
  styles?: PopconfirmSemanticAllType['stylesAndFn'];
}

export interface PopconfirmState {
  open?: boolean;
}

const InternalPopconfirm = React.forwardRef<TooltipRef, PopconfirmProps>((props, ref) => {
    throw new Error("STUB");
});

type CompoundedComponent = typeof InternalPopconfirm & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};

const Popconfirm = InternalPopconfirm as CompoundedComponent;

// We don't care debug panel
/* istanbul ignore next */
Popconfirm._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

if (process.env.NODE_ENV !== 'production') {
  Popconfirm.displayName = 'Popconfirm';
}

export default Popconfirm;
