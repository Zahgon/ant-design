import type { FC } from 'react';
import React, { useState } from 'react';
import { clsx } from 'clsx';

import type { InputNumberProps } from '../../input-number';
import InputNumber from '../../input-number';

interface ColorSteppersProps {
  prefixCls: string;
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number | null) => void;
  className?: string;
  prefix?: (prefixCls: string) => React.ReactNode;
  formatter?: InputNumberProps<number>['formatter'];
}

const ColorSteppers: FC<ColorSteppersProps> = ({
  prefixCls,
  min = 0,
  max = 100,
  value,
  onChange,
  className,
  formatter,
}) => {
    throw new Error("STUB");
};

export default ColorSteppers;
