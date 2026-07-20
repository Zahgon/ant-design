import React from 'react';

import ContextIsolator from '../_util/ContextIsolator';

type RenderFunction<T extends any[]> = (...args: T) => React.ReactNode;

function usePopupRender<T extends [React.ReactElement, ...any[]]>(
  renderFn?: RenderFunction<T>,
): ((...args: T) => React.ReactElement) | undefined {
  return React.useMemo(() => {
      throw new Error("STUB");
  }, [renderFn]);
}

export default usePopupRender;
