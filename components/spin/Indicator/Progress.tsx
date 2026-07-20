import * as React from 'react';
import { useLayoutEffect } from '@rc-component/util';
import { clsx } from 'clsx';

export interface ProgressProps {
  prefixCls: string;
  percent: number;
}

const viewSize = 100;
const borderWidth = viewSize / 5;
const radius = viewSize / 2 - borderWidth / 2;
const circumference = radius * 2 * Math.PI;
const position = 50;

interface CircleProps {
  dotClassName?: string;
  style?: React.CSSProperties;
  hasCircleCls?: boolean;
}

const CustomCircle: React.FC<Readonly<CircleProps>> = (props) => {
    throw new Error("STUB");
};

const Progress: React.FC<Readonly<ProgressProps>> = ({ percent, prefixCls }) => {
    throw new Error("STUB");
};

export default Progress;
