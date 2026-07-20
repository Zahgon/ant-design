import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import { initZoomMotion } from '../../style/motion';
import type { ArrowOffsetToken } from '../../style/placementArrow';
import getArrowStyle, { getArrowOffsetToken } from '../../style/placementArrow';
import type { ArrowToken } from '../../style/roundedArrow';
import { getArrowToken } from '../../style/roundedArrow';
import type {
  FullToken,
  GenerateStyle,
  GetDefaultToken,
  PresetColorType,
} from '../../theme/internal';
import { genStyleHooks, mergeToken, PresetColors } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

export interface ComponentToken extends ArrowToken, ArrowOffsetToken {
  /**
   * @deprecated Please use `titleMinWidth` instead
   * @desc 气泡卡片宽度
   * @descEN Width of Popover
   */
  width?: number | string;
  /**
   * @deprecated Please use `titleMinWidth` instead
   * @desc 气泡卡片最小宽度
   * @descEN Min width of Popover
   */
  minWidth?: number | string;
  /**
   * @desc 气泡卡片标题最小宽度
   * @descEN Min width of Popover title
   */
  titleMinWidth: number | string;
  /**
   * @desc 气泡卡片 z-index
   * @descEN z-index of Popover
   */
  zIndexPopup: number;
  /** @internal */
  innerPadding: number;
  /** @internal */
  titlePadding: number | string;
  /** @internal */
  titleMarginBottom: number;
  /** @internal */
  titleBorderBottom: string;
  /** @internal */
  innerContentPadding: number | string;
}

/**
 * @desc Popover 组件的 Token
 * @descEN Token for Popover component
 */
export type PopoverToken = FullToken<'Popover'> & {
  /**
   * @desc 气泡卡片背景色
   * @descEN Background color of Popover
   */
  popoverBg: string;
  /**
   * @desc 气泡卡片文字颜色
   * @descEN Text color of Popover
   */
  popoverColor: string;
};

const FALL_BACK_ORIGIN = '50%';

const genBaseStyle: GenerateStyle<PopoverToken> = (token) => {
  const {
    componentCls,
    popoverColor,
    titleMinWidth,
    fontWeightStrong,
    innerPadding,
    dropShadowPopover,
    colorTextHeading,
    borderRadiusLG,
    zIndexPopup,
    titleMarginBottom,
    colorBgElevated,
    popoverBg,
    titleBorderBottom,
    innerContentPadding,
    titlePadding,
    antCls,
  } = token;

  const [varName, varRef] = genCssVar(antCls, 'tooltip');

  return [
    {
      [componentCls]: {
        ...resetComponent(token),
        position: 'absolute',
        top: 0,
        // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
        left: {
          _skip_check_: true,
          value: 0,
        },
        zIndex: zIndexPopup,
        fontWeight: 'normal',
        whiteSpace: 'normal',
        textAlign: 'start',
        cursor: 'auto',
        userSelect: 'text',
        filter: dropShadowPopover,

        // When use `autoArrow`, origin will follow the arrow position
        [varName('valid-offset-x')]: varRef('arrow-offset-x', 'var(--arrow-x)'),
        transformOrigin: [
          varRef('valid-offset-x', FALL_BACK_ORIGIN),
          `var(--arrow-y, ${FALL_BACK_ORIGIN})`,
        ].join(' '),

        [varName('arrow-background-color')]: colorBgElevated,
        width: 'max-content',
        maxWidth: '100vw',

        '&-rtl': {
          direction: 'rtl',
        },

        '&-hidden': {
          display: 'none',
        },

        [`${componentCls}-content`]: {
          position: 'relative',
        },

        [`${componentCls}-container`]: {
          backgroundColor: popoverBg,
          backgroundClip: 'padding-box',
          borderRadius: borderRadiusLG,
          padding: innerPadding,
        },

        [`${componentCls}-title`]: {
          minWidth: titleMinWidth,
          marginBottom: titleMarginBottom,
          color: colorTextHeading,
          fontWeight: fontWeightStrong,
          borderBottom: titleBorderBottom,
          padding: titlePadding,
        },

        [`${componentCls}-content`]: {
          color: popoverColor,
          padding: innerContentPadding,
        },
      },
    },

    // Arrow Style
    getArrowStyle<PopoverToken>(token, varRef('arrow-background-color'), { arrowShadow: false }),

    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: 'relative',
        maxWidth: 'none',
        margin: token.sizePopupArrow,
        display: 'inline-block',
      },
    },
  ];
};

const genColorStyle: GenerateStyle<PopoverToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Popover'> = (token) => {
    throw new Error("STUB");
};

export default genStyleHooks(
  'Popover',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
  {
    resetStyle: false,
    deprecatedTokens: [
      ['width', 'titleMinWidth'],
      ['minWidth', 'titleMinWidth'],
    ],
  },
);
