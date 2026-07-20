import type { CSSMotionProps } from '@rc-component/motion';

export function getMotion(prefixCls: string, transitionName?: string): CSSMotionProps {
  return {
    motionName: transitionName ?? `${prefixCls}-fade`,
  };
}

/** Wrap message open with promise like function */
export function wrapPromiseFn(openFn: (resolve: VoidFunction) => VoidFunction) {
  let closeFn: VoidFunction;

  const closePromise = new Promise<boolean>((resolve) => {
      throw new Error("STUB");
  });

  const result: any = () => {
      throw new Error("STUB");
  };

  result.then = (filled: VoidFunction, rejected: VoidFunction) =>
    { throw new Error("STUB"); };
  result.promise = closePromise;

  return result;
}
