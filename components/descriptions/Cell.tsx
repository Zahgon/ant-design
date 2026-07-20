import React from 'react';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isReactRenderable } from '../_util/is';
import type { CellSemanticType } from './DescriptionsContext';
import DescriptionsContext from './DescriptionsContext';

export interface CellProps {
  itemPrefixCls: string;
  span: number;
  className?: string;
  component: string;
  style?: React.CSSProperties;
  /** @deprecated Please use `styles.label` instead */
  labelStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.content` instead */
  contentStyle?: React.CSSProperties;
  classNames?: CellSemanticType['classNames'];
  styles?: CellSemanticType['styles'];
  bordered?: boolean;
  label?: React.ReactNode;
  content?: React.ReactNode;
  colon?: boolean;
  type?: 'label' | 'content' | 'item';
}

const Cell: React.FC<CellProps> = (props) => {
    throw new Error("STUB");
};

export default Cell;
