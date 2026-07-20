import * as React from 'react';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import { useLocale } from '../locale';
import DefaultEmptyImg from './empty';
import SimpleEmptyImg from './simple';
import useStyle from './style';

const defaultEmptyImg = <DefaultEmptyImg />;
const simpleEmptyImg = <SimpleEmptyImg />;

export interface TransferLocale {
  description: string;
}

export type EmptySemanticType = {
  classNames?: {
    root?: string;
    image?: string;
    description?: string;
    footer?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    image?: React.CSSProperties;
    description?: React.CSSProperties;
    footer?: React.CSSProperties;
  };
};

export type EmptySemanticAllType = GenerateSemantic<EmptySemanticType, EmptyProps>;

export interface EmptyProps {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  /** @deprecated Please use `styles.image` instead */
  imageStyle?: React.CSSProperties;
  image?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  classNames?: EmptySemanticAllType['classNamesAndFn'];
  styles?: EmptySemanticAllType['stylesAndFn'];
}

type CompoundedComponent = React.FC<EmptyProps> & {
  PRESENTED_IMAGE_DEFAULT: React.ReactNode;
  PRESENTED_IMAGE_SIMPLE: React.ReactNode;
};

const Empty: CompoundedComponent = (props) => {
    throw new Error("STUB");
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;

if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = 'Empty';
}

export default Empty;
