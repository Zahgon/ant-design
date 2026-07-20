import * as React from 'react';
import RcImage from '@rc-component/image';
import type { ImageProps as RcImageProps } from '@rc-component/image';
import { clsx } from 'clsx';

import type { MaskType } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useMergedPreviewConfig from './hooks/useMergedPreviewConfig';
import usePlaceholderConfig, { isPlaceholderConfig } from './hooks/usePlaceholderConfig';
import usePreviewConfig from './hooks/usePreviewConfig';
import PreviewGroup, { icons } from './PreviewGroup';
import Progress from './Progress';
import type { ProgressClassNames, ProgressStyles } from './Progress';
import useStyle from './style';

type OriginPreviewConfig = Omit<
  NonNullable<Exclude<RcImageProps['preview'], boolean>>,
  'maskClosable'
>;

export type DeprecatedPreviewConfig = {
  /** @deprecated Use `open` instead */
  visible?: boolean;
  /** @deprecated Use `classNames.root` instead */
  rootClassName?: string;
  /**
   * @deprecated This has been removed.
   * Preview will always be rendered after show.
   */
  forceRender?: boolean;
  /**
   * @deprecated This has been removed.
   * Preview will always be rendered after show.
   */
  destroyOnClose?: boolean;
  /** @deprecated Use `actionsRender` instead */
  toolbarRender?: OriginPreviewConfig['actionsRender'];
};

export type PreviewConfig = OriginPreviewConfig &
  DeprecatedPreviewConfig & {
    /** @deprecated Use `onOpenChange` instead */
    onVisibleChange?: (visible: boolean, prevVisible: boolean) => void;
    /** @deprecated Use `classNames.cover` instead */
    maskClassName?: string;
    mask?: MaskType | React.ReactNode;
  };

export interface CompositionImage<P> extends React.FC<P> {
  PreviewGroup: typeof PreviewGroup;
}

export interface ImageProgressConfig {
  percent?: number;
  /** Custom render function, receives default progress UI and percent */
  render?: (progress: React.ReactNode, percent: number) => React.ReactNode;
}

export type PlaceholderType =
  | React.ReactNode
  | {
      progress?: boolean | ImageProgressConfig;
    };

export type ImageSemanticType = {
  classNames?: {
    root?: string;
    image?: string;
    cover?: string;
    placeholder?: {
      progress?: ProgressClassNames;
    };
    popup?: {
      root?: string;
      mask?: string;
      body?: string;
      footer?: string;
      actions?: string;
      close?: string;
    };
  };
  styles?: {
    root?: React.CSSProperties;
    image?: React.CSSProperties;
    cover?: React.CSSProperties;
    placeholder?: {
      progress?: ProgressStyles;
    };
    popup?: {
      root?: React.CSSProperties;
      mask?: React.CSSProperties;
      body?: React.CSSProperties;
      footer?: React.CSSProperties;
      actions?: React.CSSProperties;
      close?: React.CSSProperties;
    };
  };
};

export type ImageSemanticAllType = GenerateSemantic<ImageSemanticType, ImageProps>;

export interface ImageProps
  extends Omit<RcImageProps, 'preview' | 'classNames' | 'styles' | 'placeholder'> {
  preview?: boolean | PreviewConfig;
  /** @deprecated Use `styles.root` instead */
  wrapperStyle?: React.CSSProperties;
  classNames?: ImageSemanticAllType['classNamesAndFn'];
  styles?: ImageSemanticAllType['stylesAndFn'];
  placeholder?: PlaceholderType;
}

export type { ProgressClassNames, ProgressStyles };

const Image: CompositionImage<ImageProps> = (props) => {
    throw new Error("STUB");
};

export type { PreviewConfig as ImagePreviewType };

Image.PreviewGroup = PreviewGroup;

if (process.env.NODE_ENV !== 'production') {
  Image.displayName = 'Image';
}

export default Image;
