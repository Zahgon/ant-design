import * as React from 'react';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  hoverable?: boolean;
  style?: React.CSSProperties;
}

const CardGrid: React.FC<CardGridProps> = ({ prefixCls, className, hoverable = true, ...rest }) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  CardGrid.displayName = 'CardGrid';
}

export default CardGrid;
