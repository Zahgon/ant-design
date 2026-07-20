import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import { genNoMotionStyle } from '../../style/motion';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';
import { genCssVar } from '../../theme/util/genStyleUtils';

export interface ComponentToken {
  /**
   * @desc 拖拽标识元素大小
   * @descEN Drag and drop the identity element size
   * @deprecated Please use `splitBarDraggableSize` instead.
   */
  resizeSpinnerSize: number;
  /**
   * @desc 拖拽标识元素大小
   * @descEN Drag and drop the identity element size
   */
  splitBarDraggableSize: number;
  /**
   * @desc 拖拽元素显示大小
   * @descEN Drag the element display size
   */
  splitBarSize: number;
  /**
   * @desc 拖拽触发区域大小
   * @descEN Drag and drop trigger area size
   */
  splitTriggerSize: number;
}

interface SplitterToken extends FullToken<'Splitter'> {}

const centerStyle: CSSObject = {
  position: 'absolute',
  top: '50%',
  left: {
    _skip_check_: true,
    value: '50%',
  },
  transform: 'translate(-50%, -50%)',
};

const genSplitterStyle: GenerateStyle<SplitterToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export const prepareComponentToken: GetDefaultToken<'Splitter'> = (token) => {
    throw new Error("STUB");
};

// ============================== Export ==============================
export default genStyleHooks('Splitter', genSplitterStyle, prepareComponentToken);
