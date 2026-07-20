import type {
  CSSMotionProps,
  MotionEndEventHandler,
  MotionEventHandler,
} from '@rc-component/motion';

import { defaultPrefixCls } from '../config-provider';
import { isTransitionEvent } from './is';

// ================== Collapse Motion ==================
const getCollapsedHeight: MotionEventHandler = () => { throw new Error("STUB"); };

const getRealHeight: MotionEventHandler = (node) => { throw new Error("STUB"); };

const getCurrentHeight: MotionEventHandler = (node) => { throw new Error("STUB"); };

const skipOpacityTransition: MotionEndEventHandler = (_, event) => {
    throw new Error("STUB");
};

const initCollapseMotion = (rootCls = defaultPrefixCls): CSSMotionProps => ({
  motionName: `${rootCls}-motion-collapse`,
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500,
});

const _SelectPlacements = ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'] as const;

export type SelectCommonPlacement = (typeof _SelectPlacements)[number];

const getTransitionName = (rootPrefixCls: string, motion: string, transitionName?: string) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

export { getTransitionName };
export default initCollapseMotion;
