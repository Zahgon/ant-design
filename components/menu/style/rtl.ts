import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { CssUtil } from 'antd-style';

import type { MenuToken } from '.';
import type { GenerateStyle } from '../../theme/internal';

const getRTLStyle: GenerateStyle<MenuToken & CssUtil, CSSObject> = ({
  componentCls,
  menuArrowOffset,
  calc,
}) => { throw new Error("STUB"); };

export default getRTLStyle;
