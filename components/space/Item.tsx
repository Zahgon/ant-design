import * as React from 'react';
import { clsx } from 'clsx';

import type { SpaceSemanticAllType } from '.';
import { isReactRenderable } from '../_util/is';
import { SpaceContext } from './context';
import type { SpaceContextType } from './context';

export interface ItemProps {
  className: string;
  children: React.ReactNode;
  prefix: string;
  index: number;
  separator?: React.ReactNode;
  style?: React.CSSProperties;
  classNames?: SpaceSemanticAllType['classNames'];
  styles?: SpaceSemanticAllType['styles'];
}

const Item: React.FC<ItemProps> = (props) => {
    throw new Error("STUB");
};

export default Item;
