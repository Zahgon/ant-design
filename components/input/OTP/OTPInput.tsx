import * as React from 'react';
import { raf } from '@rc-component/util';
import { clsx } from 'clsx';

import { ConfigContext } from '../../config-provider';
import Input from '../Input';
import type { InputProps, InputRef } from '../Input';

export interface OTPInputProps extends Omit<InputProps, 'onChange'> {
  index: number;
  onChange: (index: number, value: string) => void;
  /** Tell parent to do active offset */
  onActiveChange: (nextIndex: number) => void;

  mask?: boolean | string;
}

const OTPInput = React.forwardRef<InputRef, OTPInputProps>((props, ref) => {
    throw new Error("STUB");
});

export default OTPInput;
