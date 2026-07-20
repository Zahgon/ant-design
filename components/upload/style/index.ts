import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import { genCollapseMotion } from '../../style/motion';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genDraggerStyle from './dragger';
import genListStyle from './list';
import genMotionStyle from './motion';
import { genPictureCardStyle, genPictureStyle } from './picture';
import genRtlStyle from './rtl';

export interface ComponentToken {
  /**
   * @desc 操作按扭颜色
   * @descEN Action button color
   */
  actionsColor: string;
  /**
   * @desc 卡片类型文件列表项的尺寸（对 picture-card 和 picture-circle 生效）
   * @descEN Size of list items in card type (affects both picture-card and picture-circle)
   */
  pictureCardSize: number;
}

export interface UploadToken extends FullToken<'Upload'> {
  uploadThumbnailSize: number | string;
  uploadProgressOffset: number | string;
  uploadPicCardSize: number | string;
}

const genBaseStyle: GenerateStyle<UploadToken, CSSObject> = (token) => {
  const { componentCls, colorTextDisabled } = token;

  return {
    [`${componentCls}-wrapper`]: {
      ...resetComponent(token),

      [componentCls]: {
        outline: 0,
        "input[type='file']": {
          cursor: 'pointer',
        },
      },

      [`${componentCls}-select`]: {
        display: 'inline-block',
      },

      [`${componentCls}-hidden`]: {
        display: 'none',
      },

      [`${componentCls}-disabled`]: {
        color: colorTextDisabled,
        cursor: 'not-allowed',
      },
    },
  };
};

export const prepareComponentToken: GetDefaultToken<'Upload'> = (token) => { throw new Error("STUB"); };

// ============================== Export ==============================
export default genStyleHooks(
  'Upload',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
