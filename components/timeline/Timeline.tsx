import * as React from 'react';
import { UnstableContext } from '@rc-component/steps';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isNonNullable, isNumber } from '../_util/is';
import type { GetProp, GetProps, LiteralUnion } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import Steps from '../steps';
import type { StepsProps, StepsSemanticType } from '../steps';
import { InternalContext } from '../steps/context';
import { genCssVar } from '../theme/util/genStyleUtils';
import useStyle from './style';
import useItems from './useItems';

const stepInternalContext = {
  rootComponent: 'ol',
  itemComponent: 'li',
};

export type ItemPosition = 'left' | 'right' | 'start' | 'end';

export type ItemPlacement = 'start' | 'end';

export type TimelineMode = ItemPosition | 'alternate';

type Color = 'blue' | 'red' | 'green' | 'gray';

export interface TimelineItemType {
  // Style
  color?: LiteralUnion<Color>;
  className?: string;
  style?: React.CSSProperties;
  classNames?: GetProp<StepsProps, 'items'>[number]['classNames'];
  styles?: GetProp<StepsProps, 'items'>[number]['styles'];

  // Design
  placement?: ItemPlacement;
  /** @deprecated please use `placement` instead */
  position?: ItemPosition;
  loading?: boolean;

  // Data
  key?: React.Key;
  title?: React.ReactNode;
  content?: React.ReactNode;
  /** @deprecated Please use `title` instead */
  label?: React.ReactNode;
  /** @deprecated Please use `content` instead */
  children?: React.ReactNode;

  // Icon
  icon?: React.ReactNode;
  /** @deprecated Please use `icon` instead */
  dot?: React.ReactNode;
}

export type TimelineSemanticType = {
  classNames?: Omit<StepsSemanticType['classNames'], 'itemSubtitle'>;
  styles?: Omit<StepsSemanticType['styles'], 'itemSubtitle'>;
};

export type TimelineSemanticAllType = GenerateSemantic<TimelineSemanticType, TimelineProps>;

export interface TimelineProps {
  // Style
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  classNames?: TimelineSemanticAllType['classNamesAndFn'];
  styles?: TimelineSemanticAllType['stylesAndFn'];
  rootClassName?: string;

  // Design
  variant?: StepsProps['variant'];
  mode?: TimelineMode;
  orientation?: 'horizontal' | 'vertical';
  titleSpan?: string | number;

  // Data
  items?: TimelineItemType[];
  children?: React.ReactNode;

  /** @deprecated Please add pending item in `items` directly */
  pending?: React.ReactNode;
  /** @deprecated Please add pending item in `items` directly */
  pendingDot?: React.ReactNode;
  reverse?: boolean;
}

type CompoundedComponent = React.FC<TimelineProps> & {
  Item: React.FC<TimelineItemType>;
};

const Timeline: CompoundedComponent = (props) => {
    throw new Error("STUB");
};

Timeline.Item = (() => {
    throw new Error("STUB");
}) as React.FC<TimelineItemType>;

if (process.env.NODE_ENV !== 'production') {
  Timeline.displayName = 'Timeline';
}

export default Timeline;
