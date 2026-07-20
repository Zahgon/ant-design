import * as React from 'react';
import { useRef, useState } from 'react';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import { composeRef } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isPlainObject } from '../_util/is';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import { useLocale } from '../locale';
import useRemovePasswordTimeout from './hooks/useRemovePasswordTimeout';
import type { InputProps, InputRef } from './Input';
import Input from './Input';

const defaultIconRender = (visible: boolean): React.ReactNode =>
  { throw new Error("STUB"); };

interface VisibilityToggle {
  tabIndex?: number;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}

export interface PasswordProps extends InputProps {
  readonly inputPrefixCls?: string;
  readonly action?: 'click' | 'hover';
  visibilityToggle?: boolean | VisibilityToggle;
  /**
   * @since 5.27.0
   */
  suffix?: React.ReactNode;
  iconRender?: (visible: boolean) => React.ReactNode;
}

const actionMap: Record<PropertyKey, keyof React.DOMAttributes<HTMLSpanElement>> = {
  click: 'onClick',
  hover: 'onMouseOver',
};

const Password = React.forwardRef<InputRef, PasswordProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Password.displayName = 'Input.Password';
}

export default Password;
