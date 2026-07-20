import { raf } from '@rc-component/util';

import { easeInOutCubic } from './easings';
import getScroll, { isWindow } from './getScroll';
import { isFunction } from './is';

interface ScrollToOptions {
  /** Scroll container, default as window */
  getContainer?: () => HTMLElement | Window | Document;
  /** Scroll end callback */
  callback?: () => void;
  /** Animation duration, default as 450 */
  duration?: number;
}

export default function scrollTo(y: number, options: ScrollToOptions = {}) {
  const { getContainer = () => { throw new Error("STUB"); }, callback, duration = 450 } = options;
  const container = getContainer();
  const scrollTop = getScroll(container);
  const startTime = Date.now();

  let rafId: number;

  const frameFunc = () => {
      throw new Error("STUB");
  };
  rafId = raf(frameFunc);

  return () => {
      throw new Error("STUB");
  };
}
