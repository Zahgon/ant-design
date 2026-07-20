import type { CSSObject } from '@ant-design/cssinjs';

import type { DrawerToken } from '.';
import type { GenerateStyle } from '../../theme/internal';

type Direction = 'left' | 'right' | 'top' | 'bottom';

const getMoveTranslate = (direction: Direction) => {
  const value = '100%';
  return {
    left: `translateX(-${value})`,
    right: `translateX(${value})`,
    top: `translateY(-${value})`,
    bottom: `translateY(${value})`,
  }[direction];
};

const getEnterLeaveStyle = (startStyle: React.CSSProperties, endStyle: React.CSSProperties) => ({
  '&-enter, &-appear': {
    ...startStyle,
    '&-active': endStyle,
  },
  '&-leave': {
    ...endStyle,
    '&-active': startStyle,
  },
});

const getFadeStyle = (from: number, duration: string) => ({
  '&-enter, &-appear, &-leave': {
    '&-start': {
      transition: 'none',
    },
    '&-active': {
      transition: `all ${duration}`,
    },
  },
  ...getEnterLeaveStyle(
    {
      opacity: from,
    },
    {
      opacity: 1,
    },
  ),
});

const getPanelMotionStyles = (direction: Direction, duration: string) => [
  getFadeStyle(0.7, duration),
  getEnterLeaveStyle(
    {
      transform: getMoveTranslate(direction),
    },
    {
      transform: 'none',
    },
  ),
];

const genMotionStyle: GenerateStyle<DrawerToken, CSSObject> = (token) => {
    throw new Error("STUB");
};

export default genMotionStyle;
