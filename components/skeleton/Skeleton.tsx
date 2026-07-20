import * as React from 'react';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isPlainObject } from '../_util/is';
import { useComponentConfig } from '../config-provider/context';
import type { AvatarProps } from './Avatar';
import SkeletonAvatar from './Avatar';
import SkeletonButton from './Button';
import Element from './Element';
import SkeletonImage from './Image';
import SkeletonInput from './Input';
import SkeletonNode from './Node';
import type { SkeletonParagraphProps } from './Paragraph';
import Paragraph from './Paragraph';
import useStyle from './style';
import type { SkeletonTitleProps } from './Title';
import Title from './Title';

/* This only for skeleton internal. */
type SkeletonAvatarProps = Omit<AvatarProps, 'active'>;

export type SkeletonSemanticType = {
  classNames?: {
    root?: string;
    header?: string;
    section?: string;
    avatar?: string;
    title?: string;
    paragraph?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    header?: React.CSSProperties;
    section?: React.CSSProperties;
    avatar?: React.CSSProperties;
    title?: React.CSSProperties;
    paragraph?: React.CSSProperties;
  };
};

export type SkeletonSemanticAllType = GenerateSemantic<SkeletonSemanticType, SkeletonProps>;

export interface SkeletonProps {
  active?: boolean;
  loading?: boolean;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  avatar?: SkeletonAvatarProps | boolean;
  title?: SkeletonTitleProps | boolean;
  paragraph?: SkeletonParagraphProps | boolean;
  round?: boolean;
  classNames?: SkeletonSemanticAllType['classNamesAndFn'];
  styles?: SkeletonSemanticAllType['stylesAndFn'];
}

function getComponentProps<T>(prop?: T | boolean): T | Record<string, string> {
  if (isPlainObject(prop)) {
    return prop;
  }
  return {};
}

function getAvatarBasicProps(hasTitle: boolean, hasParagraph: boolean): SkeletonAvatarProps {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return { size: 'large', shape: 'square' };
  }

  return { size: 'large', shape: 'circle' };
}

function getTitleBasicProps(hasAvatar: boolean, hasParagraph: boolean): SkeletonTitleProps {
  if (!hasAvatar && hasParagraph) {
    return { width: '38%' };
  }

  if (hasAvatar && hasParagraph) {
    return { width: '50%' };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar: boolean, hasTitle: boolean): SkeletonParagraphProps {
  const basicProps: SkeletonParagraphProps = {};

  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }

  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

type CompoundedComponent = {
  Button: typeof SkeletonButton;
  Avatar: typeof SkeletonAvatar;
  Input: typeof SkeletonInput;
  Image: typeof SkeletonImage;
  Node: typeof SkeletonNode;
};

// Tips: ctx.classNames.root < ctx.className < cpns.classNames.root < cpns.className < rootClassName

const Skeleton: React.FC<React.PropsWithChildren<SkeletonProps>> & CompoundedComponent = (
  props,
) => {
    throw new Error("STUB");
};

Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Input = SkeletonInput;
Skeleton.Image = SkeletonImage;
Skeleton.Node = SkeletonNode;

if (process.env.NODE_ENV !== 'production') {
  Skeleton.displayName = 'Skeleton';
}

export default Skeleton;
