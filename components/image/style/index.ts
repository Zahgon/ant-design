import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import { FastColor } from '@ant-design/fast-color';

import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import { genFocusOutline, genFocusStyle } from '../../style';
import { inkFlow1, inkFlow2, inkFlow3, progressActive } from './progressAnimation';

export interface ComponentToken {
  /**
   * @desc 预览浮层 z-index
   * @descEN z-index of preview popup
   */
  zIndexPopup: number;
  /**
   * @desc 预览操作图标大小
   * @descEN Size of preview operation icon
   */
  previewOperationSize: number;
  /**
   * @desc 预览操作图标颜色
   * @descEN Color of preview operation icon
   */
  previewOperationColor: string;
  /**
   * @desc 预览操作图标悬浮颜色
   * @descEN Color of hovered preview operation icon
   */
  previewOperationHoverColor: string;
  /**
   * @desc 预览操作图标禁用颜色
   * @descEN Disabled color of preview operation icon
   */
  previewOperationColorDisabled: string;
  /**
   * @desc 加载动画基础时长
   * @descEN Base duration of loading animation
   */
  progressAnimationDuration: string;
}

/**
 * @desc Image 组件的 Token
 * @descEN Token for Image component
 */
export interface ImageToken extends FullToken<'Image'> {
  /**
   * @desc 预览类名
   * @descEN Preview class name
   */
  previewCls: string;
  /**
   * @desc 预览切换按钮尺寸
   * @descEN Size of preview switch button
   */
  imagePreviewSwitchSize: number;
}

export type PositionType = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky' | undefined;

export const genBoxStyle = (position?: PositionType): CSSObject => ({
  position: position || 'absolute',
  inset: 0,
});

export const genImageCoverStyle: GenerateStyle<ImageToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const genImageProgressStyle: GenerateStyle<ImageToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const genImagePreviewStyle: GenerateStyle<ImageToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genImageStyle: GenerateStyle<ImageToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genPreviewMotion: GenerateStyle<ImageToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Image'> = (token) => { throw new Error("STUB"); };

export default genStyleHooks(
  'Image',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
