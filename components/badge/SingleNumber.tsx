import * as React from 'react';
import { clsx } from 'clsx';

export interface UnitNumberProps {
  prefixCls: string;
  value: string | number;
  offset?: number;
  current?: boolean;
}

const UnitNumber: React.FC<Readonly<UnitNumberProps>> = (props) => {
    throw new Error("STUB");
};

export interface SingleNumberProps {
  prefixCls: string;
  value: string;
  count: number;
}

function getOffset(start: number, end: number, unit: -1 | 1) {
  let index = start;
  let offset = 0;

  while ((index + 10) % 10 !== end) {
    index += unit;
    offset += unit;
  }

  return offset;
}

const SingleNumber: React.FC<Readonly<SingleNumberProps>> = (props) => {
    throw new Error("STUB");
};

export default SingleNumber;
