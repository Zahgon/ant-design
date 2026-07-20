import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { omit, toArray, useComposeRef, useLayoutEffect } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isNumber, isPlainObject, isReactRenderable } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import Wave from '../_util/wave';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import { useCompactItemContext } from '../space/Compact';
import Group, { GroupSizeContext } from './ButtonGroup';
import type {
  ButtonColorType,
  ButtonHTMLType,
  ButtonShape,
  ButtonType,
  ButtonVariantType,
} from './buttonHelpers';
import { isTwoCNChar, isUnBorderedButtonVariant, spaceChildren } from './buttonHelpers';
import DefaultLoadingIcon from './DefaultLoadingIcon';
import IconWrapper from './IconWrapper';
import useStyle from './style';
import Compact from './style/compact';

export type LegacyButtonType = ButtonType | 'danger';

export type ButtonSemanticType = {
  classNames?: {
    root?: string;
    icon?: string;
    content?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    icon?: React.CSSProperties;
    content?: React.CSSProperties;
  };
};

export type ButtonSemanticAllType = GenerateSemantic<ButtonSemanticType, BaseButtonProps>;

export interface BaseButtonProps {
  type?: ButtonType;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  icon?: React.ReactNode;
  /** @deprecated please use `iconPlacement` instead */
  iconPosition?: 'start' | 'end';
  iconPlacement?: 'start' | 'end';
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number; icon?: React.ReactNode };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  [key: `data-${string}`]: string;
  classNames?: ButtonSemanticAllType['classNamesAndFn'];
  styles?: ButtonSemanticAllType['stylesAndFn'];
  // FloatButton reuse the Button as sub component,
  // But this should not consume context semantic classNames and styles.
  // Use props here to avoid context solution cost for normal usage.
  /** @private Only for internal usage. Do not use in your production */
  _skipSemantic?: boolean;
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type' | 'color'
>;

export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {
  href?: string;
  htmlType?: ButtonHTMLType;
  autoInsertSpace?: boolean;
}

type LoadingConfigType = {
  loading: boolean;
  delay: number;
};

function getLoadingConfig(loading: BaseButtonProps['loading']): LoadingConfigType {
  if (isPlainObject(loading)) {
    let delay = loading?.delay;
    delay = isNumber(delay) ? delay : 0;
    return {
      loading: delay <= 0,
      delay,
    };
  }

  return {
    loading: !!loading,
    delay: 0,
  };
}

type ColorVariantPairType = [color?: ButtonColorType, variant?: ButtonVariantType];

const ButtonTypeMap: Partial<Record<ButtonType, ColorVariantPairType>> = {
  default: ['default', 'outlined'],
  primary: ['primary', 'solid'],
  dashed: ['default', 'dashed'],
  // `link` is not a real color but we should compatible with it
  link: ['link' as ButtonColorType, 'link'],
  text: ['default', 'text'],
};

const InternalCompoundedButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
    throw new Error("STUB");
});

type CompoundedComponent = typeof InternalCompoundedButton & {
  /** @deprecated Please use `Space.Compact` */
  Group: typeof Group;
  /** @internal */
  __ANT_BUTTON: boolean;
};

const Button = InternalCompoundedButton as CompoundedComponent;

Button.Group = Group;
Button.__ANT_BUTTON = true;

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}

export default Button;
