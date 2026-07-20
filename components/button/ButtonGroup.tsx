import * as React from 'react';
import { clsx } from 'clsx';

import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import type { SizeType } from '../config-provider/SizeContext';
import { useToken } from '../theme/internal';

export interface ButtonGroupProps {
  size?: SizeType;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  children?: React.ReactNode;
}

export const GroupSizeContext = React.createContext<SizeType>(undefined);

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
    throw new Error("STUB");
};

export default ButtonGroup;
