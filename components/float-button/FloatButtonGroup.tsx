import React from 'react';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import CSSMotion from '@rc-component/motion';
import { useControlledState, useEvent } from '@rc-component/util';
import { clsx } from 'clsx';

import { useZIndex } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import Flex from '../flex';
import Space from '../space';
import { GroupContext } from './context';
import type { GroupContextProps } from './context';
import FloatButton, { floatButtonPrefixCls } from './FloatButton';
import type { FloatButtonGroupTrigger, FloatButtonProps } from './FloatButton';
import useStyle from './style';

export type FloatButtonGroupSemanticType = {
  classNames?: {
    root?: string;
    list?: string;
    item?: string;
    itemIcon?: string;
    itemContent?: string;
    trigger?: string;
    triggerIcon?: string;
    triggerContent?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    list?: React.CSSProperties;
    item?: React.CSSProperties;
    itemIcon?: React.CSSProperties;
    itemContent?: React.CSSProperties;
    trigger?: React.CSSProperties;
    triggerIcon?: React.CSSProperties;
    triggerContent?: React.CSSProperties;
  };
};

export type FloatButtonGroupSemanticAllType = GenerateSemantic<
  FloatButtonGroupSemanticType,
  FloatButtonGroupProps
>;

export interface FloatButtonGroupProps extends Omit<FloatButtonProps, 'classNames' | 'styles'> {
  // Styles
  classNames?: FloatButtonGroupSemanticAllType['classNamesAndFn'];
  styles?: FloatButtonGroupSemanticAllType['stylesAndFn'];

  // Control
  trigger?: FloatButtonGroupTrigger;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  // UI
  closeIcon?: React.ReactNode;
  children: React.ReactNode;
  placement?: 'top' | 'left' | 'right' | 'bottom';
}

const FloatButtonGroup: React.FC<Readonly<FloatButtonGroupProps>> = (props) => {
    throw new Error("STUB");
};

export default FloatButtonGroup;
