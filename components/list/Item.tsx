import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import React, { useContext } from 'react';
import { toArray } from '@rc-component/util';
import { clsx } from 'clsx';

import { isString } from '../_util/is';
import { cloneElement } from '../_util/reactNode';
import { ConfigContext } from '../config-provider';
import { Col } from '../grid';
import { ListContext } from './context';

export type ListItemSemanticName = keyof ListItemSemanticClassNames & keyof ListItemSemanticStyles;

export type ListItemSemanticClassNames = {
  actions?: string;
  extra?: string;
};

export type ListItemSemanticStyles = {
  actions?: React.CSSProperties;
  extra?: React.CSSProperties;
};

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNames?: ListItemSemanticClassNames;
  children?: ReactNode;
  prefixCls?: string;
  style?: CSSProperties;
  styles?: ListItemSemanticStyles;
  extra?: ReactNode;
  actions?: ReactNode[];
  colStyle?: CSSProperties;
}

export interface ListItemMetaProps {
  avatar?: ReactNode;
  className?: string;
  children?: ReactNode;
  description?: ReactNode;
  prefixCls?: string;
  style?: CSSProperties;
  title?: ReactNode;
}

type ListItemClassNamesModule = keyof Exclude<ListItemProps['classNames'], undefined>;
type ListItemStylesModule = keyof Exclude<ListItemProps['styles'], undefined>;

export const Meta: React.FC<ListItemMetaProps> = ({
  prefixCls: customizePrefixCls,
  className,
  avatar,
  title,
  description,
  ...others
}) => {
    throw new Error("STUB");
};

const InternalItem = React.forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
    throw new Error("STUB");
});

export type ListItemTypeProps = typeof InternalItem & {
  Meta: typeof Meta;
};

const Item = InternalItem as ListItemTypeProps;

Item.Meta = Meta;

export default Item;
