import { raf } from '@rc-component/util';

function throttleByAnimationFrame<T extends any[]>(fn: (...args: T) => void) {
  let requestId: number | null = null;

  const later = (args: T) => () => {
      throw new Error("STUB");
  };

  const throttled = (...args: T) => {
      throw new Error("STUB");
  };

  throttled.cancel = () => {
      throw new Error("STUB");
  };

  return throttled;
}

export default throttleByAnimationFrame;
