import type React from 'react';
import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import { getMediaSize } from '../../grid/style';
import { genFocusOutline, genFocusStyle, resetComponent } from '../../style';
import { initFadeMotion, initZoomMotion } from '../../style/motion';
import type {
  AliasToken,
  FullToken,
  GenerateStyle,
  GenStyleFn,
  GlobalToken,
  TokenWithCommonCls,
} from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
  /**
   * @desc 顶部背景色
   * @descEN Background color of header
   */
  headerBg: string;
  /**
   * @desc 标题行高
   * @descEN Line height of title
   */
  titleLineHeight: number | string;
  /**
   * @desc 标题字体大小
   * @descEN Font size of title
   */
  titleFontSize: number | string;
  /**
   * @desc 标题字体颜色
   * @descEN Font color of title
   */
  titleColor: string;
  /**
   * @desc 内容区域背景色
   * @descEN Background color of content
   */
  contentBg: string;
  /**
   * @desc 底部区域背景色
   * @descEN Background color of footer
   */
  footerBg: string;

  /** @internal */
  contentPadding: number | string;
  /** @internal */
  headerPadding: string | number;
  /** @internal */
  headerBorderBottom: string;
  /** @internal */
  headerMarginBottom: number;
  /** @internal */
  bodyPadding: number;
  /** @internal */
  footerPadding: string | number;
  /** @internal */
  footerBorderTop: string;
  /** @internal */
  footerBorderRadius: string | number;
  /** @internal */
  footerMarginTop: string | number;
  /** @internal */
  confirmBodyPadding: string | number;
  /** @internal */
  confirmIconMarginInlineEnd: string | number;
  /** @internal */
  confirmBtnsMarginTop: string | number;
}

/**
 * @desc Modal 组件的 Token
 * @descEN Token for Modal component
 */
export interface ModalToken extends FullToken<'Modal'> {
  /**
   * @desc 模态框头部高度
   * @descEN Height of modal header
   */
  modalHeaderHeight: number | string;
  /**
   * @desc 模态框底部边框颜色
   * @descEN Border color of modal footer
   */
  modalFooterBorderColorSplit: string;
  /**
   * @desc 模态框底部边框样式
   * @descEN Border style of modal footer
   */
  modalFooterBorderStyle: string;
  /**
   * @desc 模态框底部边框宽度
   * @descEN Border width of modal footer
   */
  modalFooterBorderWidth: number | string;
  /**
   * @desc 模态框关闭图标颜色
   * @descEN Color of modal close icon
   */
  modalCloseIconColor: string;
  /**
   * @desc 模态框关闭图标悬停颜色
   * @descEN Hover color of modal close icon
   */
  modalCloseIconHoverColor: string;
  /**
   * @desc 模态框关闭按钮尺寸
   * @descEN Size of modal close button
   */
  modalCloseBtnSize: number | string;
  /**
   * @desc 模态框确认图标尺寸
   * @descEN Size of modal confirm icon
   */
  modalConfirmIconSize: number | string;
  /**
   * @desc 模态框标题高度
   * @descEN Height of modal title
   */
  modalTitleHeight: number | string;
}

function box(position: React.CSSProperties['position']): React.CSSProperties {
  return {
    position,
    inset: 0,
  };
}

export const genModalMaskStyle: GenerateStyle<TokenWithCommonCls<AliasToken>> = (token) => {
    throw new Error("STUB");
};

const genModalStyle: GenerateStyle<ModalToken> = (token) => {
    throw new Error("STUB");
};

const genRTLStyle: GenerateStyle<ModalToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

const genResponsiveWidthStyle: GenerateStyle<ModalToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export const prepareToken = (token: Parameters<GenStyleFn<'Modal'>>[0]) => {
    throw new Error("STUB");
};

export const prepareComponentToken = (token: GlobalToken) => { throw new Error("STUB"); };

export default genStyleHooks(
  'Modal',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    unitless: {
      titleLineHeight: true,
    },
  },
);
