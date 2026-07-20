import * as React from 'react';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import { clsx } from 'clsx';

import { devUseWarning } from '../_util/warning';
import Button from '../button';
import type { ButtonHTMLType, ButtonProps } from '../button';
import type { ButtonGroupProps } from '../button/ButtonGroup';
import { ConfigContext } from '../config-provider';
import Space from '../space';
import { useCompactItemContext } from '../space/Compact';
import Dropdown from './dropdown';
import type { DropdownProps } from './dropdown';

export type DropdownButtonType = 'default' | 'primary' | 'dashed' | 'link' | 'text';

export interface DropdownButtonProps extends ButtonGroupProps, DropdownProps {
  type?: DropdownButtonType;
  htmlType?: ButtonHTMLType;
  danger?: boolean;
  disabled?: boolean;
  loading?: ButtonProps['loading'];
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  title?: string;
  buttonsRender?: (buttons: React.ReactNode[]) => React.ReactNode[];
}

type CompoundedComponent = React.FC<DropdownButtonProps> & {
  /** @internal */
  __ANT_BUTTON: boolean;
};

/** @deprecated Please use Space.Compact + Dropdown + Button instead */
const DropdownButton: CompoundedComponent = (props) => {
    throw new Error("STUB");
};

DropdownButton.__ANT_BUTTON = true;

export default DropdownButton;
