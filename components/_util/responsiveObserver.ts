import React from 'react';

import type { GlobalToken } from '../theme/internal';
import { useToken } from '../theme/internal';
import { isFunction } from './is';

export const responsiveArray = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'] as const;
export const responsiveArrayReversed = [...responsiveArray].reverse();

export type Breakpoint = (typeof responsiveArray)[number];
export type BreakpointMap = Record<Breakpoint, string>;
export type ScreenMap = Partial<Record<Breakpoint, boolean>>;
export type ScreenSizeMap = Partial<Record<Breakpoint, number>>;

type SubscribeFunc = (screens: ScreenMap) => void;

const getResponsiveMap = (token: GlobalToken): BreakpointMap => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`,
  xxxl: `(min-width: ${token.screenXXXL}px)`,
});

/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */
const validateBreakpoints = (token: GlobalToken) => {
  const indexableToken: any = token;
  const revBreakpoints = [...responsiveArray].reverse();

  revBreakpoints.forEach((breakpoint, i) => {
      throw new Error("STUB");
  });
  return token;
};

export const matchScreen = (screens: ScreenMap, screenSizes?: ScreenSizeMap) => {
  if (!screenSizes) {
    return;
  }
  for (const breakpoint of responsiveArray) {
    if (screens[breakpoint] && screenSizes?.[breakpoint] !== undefined) {
      return screenSizes[breakpoint];
    }
  }
};

interface ResponsiveObserverType {
  responsiveMap: BreakpointMap;
  dispatch: (map: ScreenMap) => boolean;
  subscribe: (func: SubscribeFunc) => number;
  unsubscribe: (token: number) => void;
  register: () => void;
  unregister: () => void;
  matchHandlers: Record<
    PropertyKey,
    {
      mql: MediaQueryList;
      listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void;
    }
  >;
}

const useResponsiveObserver = () => {
  const [, token] = useToken();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));

  // To avoid repeat create instance, we add `useMemo` here.
  return React.useMemo<ResponsiveObserverType>(() => {
      throw new Error("STUB");
  }, [responsiveMap]);
};

export default useResponsiveObserver;
