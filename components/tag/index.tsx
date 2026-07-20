import * as React from 'react';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import type { PresetColorType, PresetStatusColorType } from '../_util/colors';
import { pickClosable, useClosable } from '../_util/hooks';
import type { ClosableType } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isFunction } from '../_util/is';
import { cloneElement, replaceElement } from '../_util/reactNode';
import type { LiteralUnion } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import Wave from '../_util/wave';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import CheckableTag from './CheckableTag';
import CheckableTagGroup from './CheckableTagGroup';
import useColor from './hooks/useColor';
import useStyle from './style';
import PresetCmp from './style/presetCmp';
import StatusCmp from './style/statusCmp';

export type { CheckableTagProps } from './CheckableTag';
export type { CheckableTagGroupProps } from './CheckableTagGroup';

export type TagSemanticType = {
  classNames?: {
    root?: string;
    icon?: string;
    content?: string;
    close?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    icon?: React.CSSProperties;
    content?: React.CSSProperties;
    close?: React.CSSProperties;
  };
};

export type TagSemanticAllType = GenerateSemantic<TagSemanticType, TagProps>;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  color?: LiteralUnion<PresetColorType | PresetStatusColorType>;
  variant?: 'filled' | 'solid' | 'outlined';
  /** Advised to use closeIcon instead. */
  closable?: ClosableType;
  closeIcon?: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  /** @deprecated Please use `variant="filled"` instead */
  bordered?: boolean;
  href?: string;
  target?: string;
  disabled?: boolean;
  classNames?: TagSemanticAllType['classNamesAndFn'];
  styles?: TagSemanticAllType['stylesAndFn'];
}

const InternalTag = React.forwardRef<HTMLSpanElement | HTMLAnchorElement, TagProps>(
  (props, ref) => {
        throw new Error("STUB");
    },
);

export type TagType = typeof InternalTag & {
  CheckableTag: typeof CheckableTag;
  CheckableTagGroup: typeof CheckableTagGroup;
};

const Tag = InternalTag as TagType;

if (process.env.NODE_ENV !== 'production') {
  Tag.displayName = 'Tag';
}

Tag.CheckableTag = CheckableTag;
Tag.CheckableTagGroup = CheckableTagGroup;

export default Tag;
