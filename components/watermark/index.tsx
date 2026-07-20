import React, { useEffect } from 'react';
import { useMutateObserver } from '@rc-component/mutate-observer';
import { useEvent } from '@rc-component/util';
import { clsx } from 'clsx';

import { useComponentConfig } from '../config-provider/context';
import { useToken } from '../theme/internal';
import WatermarkContext from './context';
import type { WatermarkContextProps } from './context';
import useClips, { FontGap } from './useClips';
import useRafDebounce from './useRafDebounce';
import useSingletonCache from './useSingletonCache';
import useWatermark from './useWatermark';
import { getCanvasFont, getContentLines, getPixelRatio, reRendering } from './utils';

export interface WatermarkFont {
  color?: CanvasFillStrokeStyles['fillStyle'];
  fontSize?: number | string;
  fontWeight?: 'normal' | 'lighter' | 'bold' | 'bolder' | number;
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
  fontFamily?: string;
  textAlign?: CanvasTextAlign;
}

export interface WatermarkText {
  text: string;
  font?: WatermarkFont;
}

export type WatermarkContent = string | WatermarkText;

export interface WatermarkProps {
  zIndex?: number;
  rotate?: number;
  width?: number;
  height?: number;
  image?: string;
  content?: WatermarkContent | WatermarkContent[];
  font?: WatermarkFont;
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  gap?: [number, number];
  offset?: [number, number];
  children?: React.ReactNode;
  inherit?: boolean;
  /**
   * @since 6.0.0
   */
  onRemove?: () => void;
}

/**
 * Only return `next` when size changed.
 * This is only used for elements compare, not a shallow equal!
 */
function getSizeDiff<T>(prev: Set<T>, next: Set<T>) {
  return prev.size === next.size ? prev : next;
}

const DEFAULT_GAP_X = 100;
const DEFAULT_GAP_Y = 100;
const WATERMARK_Z_INDEX_OFFSET = 1;

const fixedStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
};

const Watermark: React.FC<WatermarkProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Watermark.displayName = 'Watermark';
}

export default Watermark;
