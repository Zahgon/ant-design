import React, { useRef, useState } from 'react';
import DownOutlined from '@ant-design/icons/DownOutlined';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import UpOutlined from '@ant-design/icons/UpOutlined';
import { useEvent, useLayoutEffect } from '@rc-component/util';
import { clsx } from 'clsx';

import { isNumber } from '../_util/is';
import { genCssVar } from '../theme/util/genStyleUtils';
import type { SplitterProps, SplitterSemanticAllType } from './interface';

export type ShowCollapsibleIconMode = boolean | 'auto';

export interface SplitBarProps {
  index: number;
  active: boolean;
  draggerStyle?: NonNullable<SplitterSemanticAllType['styles']>['dragger'];
  draggerClassName?: NonNullable<SplitterSemanticAllType['classNamesNoString']>['dragger'];
  prefixCls: string;
  rootPrefixCls: string;
  resizable: boolean;
  startCollapsible: boolean;
  endCollapsible: boolean;
  draggerIcon?: SplitterProps['draggerIcon'];
  collapsibleIcon?: NonNullable<SplitterProps['collapsible']>['icon'];
  showStartCollapsibleIcon: ShowCollapsibleIconMode;
  showEndCollapsibleIcon: ShowCollapsibleIconMode;
  onDraggerDoubleClick?: (index: number) => void;
  onOffsetStart: (index: number) => void;
  onOffsetUpdate: (index: number, offsetX: number, offsetY: number, lazyEnd?: boolean) => void;
  onOffsetEnd: (lazyEnd?: boolean) => void;
  onCollapse: (index: number, type: 'start' | 'end') => void;
  vertical: boolean;
  ariaNow: number;
  ariaMin: number;
  ariaMax: number;
  lazy?: boolean;
  containerSize: number;
}

const getValidNumber = (num?: number) => {
  return isNumber(num) && Number.isFinite(num) ? Math.round(num) : 0;
};

const DOUBLE_CLICK_TIME_GAP = 300;

const SplitBar: React.FC<SplitBarProps> = (props) => {
    throw new Error("STUB");
};

export default SplitBar;
