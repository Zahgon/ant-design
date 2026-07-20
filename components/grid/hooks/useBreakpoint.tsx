import { useRef } from 'react';
import { useLayoutEffect } from '@rc-component/util';

import { useForceUpdate } from '../../_util/hooks';
import type { ScreenMap } from '../../_util/responsiveObserver';
import useResponsiveObserver from '../../_util/responsiveObserver';

function useBreakpoint(refreshOnChange: boolean, defaultScreens: null): ScreenMap | null;
function useBreakpoint(refreshOnChange?: boolean, defaultScreens?: ScreenMap): ScreenMap;

function useBreakpoint(
  refreshOnChange = true,
  defaultScreens: ScreenMap | null = {} as ScreenMap,
): ScreenMap | null {
  const screensRef = useRef<ScreenMap | null>(defaultScreens);
  const [, forceUpdate] = useForceUpdate();
  const responsiveObserver = useResponsiveObserver();

  useLayoutEffect(() => {
      throw new Error("STUB");
  }, [refreshOnChange]);

  return screensRef.current;
}

export default useBreakpoint;
