import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';

import type { PanelComponentToken, PickerPanelToken } from '../../date-picker/style';
import {
  genPanelStyle,
  initPanelComponentToken,
  initPickerPanelToken,
} from '../../date-picker/style';
import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 年选择器宽度
   * @descEN Width of year select
   */
  yearControlWidth: number | string;
  /**
   * @desc 月选择器宽度
   * @descEN Width of month select
   */
  monthControlWidth: number | string;
  /**
   * @desc 迷你日历内容高度
   * @descEN Height of mini calendar content
   */
  miniContentHeight: number | string;
  /**
   * @desc 完整日历背景色
   * @descEN Background color of full calendar
   */
  fullBg: string;
  /**
   * @desc 完整日历面板背景色
   * @descEN Background color of full calendar panel
   */
  fullPanelBg: string;
  /**
   * @desc 日期项选中背景色
   * @descEN Background color of selected date item
   */
  itemActiveBg: string;
}

interface CalendarToken extends FullToken<'Calendar'>, PickerPanelToken, PanelComponentToken {
  /**
   * @desc 日历类名
   * @descEN Calendar class name
   */
  calendarCls: string;
  /**
   * @desc 日期值高度
   * @descEN Date value height
   */
  dateValueHeight: number | string;
  /**
   * @desc 周高度
   * @descEN Week height
   */
  weekHeight: number | string;
  /**
   * @desc 日期内容高度
   * @descEN Date content height
   */
  dateContentHeight: number | string;
}

export const genCalendarStyles: GenerateStyle<CalendarToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Calendar'> = (token) => { throw new Error("STUB"); };

export default genStyleHooks(
  'Calendar',
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
