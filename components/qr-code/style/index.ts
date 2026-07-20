import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import { FastColor } from '@ant-design/fast-color';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

/**
 * @desc QRCode 组件的 Token
 * @descEN Token for QRCode component
 */
interface QRCodeToken extends FullToken<'QRCode'> {
  /**
   * @desc QRCode 文字颜色
   * @descEN Text color of QRCode
   */
  QRCodeTextColor: string;
  /**
   * @desc QRCode 遮罩背景颜色
   * @descEN Cover background color of QRCode
   */
  QRCodeCoverBackgroundColor: string;
}

const genQRCodeStyle: GenerateStyle<QRCodeToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'QRCode'> = (token) => { throw new Error("STUB"); };

export default genStyleHooks<'QRCode'>(
  'QRCode',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
