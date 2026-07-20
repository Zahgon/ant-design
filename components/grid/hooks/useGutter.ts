import { isPlainObject } from '../../_util/is';
import type { Breakpoint, ScreenMap } from '../../_util/responsiveObserver';
import { responsiveArray } from '../../_util/responsiveObserver';
import type { RowProps } from '../row';

export type Gap = number | string | undefined;

export default function useGutter(
  gutter: RowProps['gutter'],
  screens: ScreenMap | null,
): [Gap, Gap] {
  const results: [Gap, Gap] = [undefined, undefined];
  const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];

  // By default use as `xs`
  const mergedScreens = screens || {
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
    xxxl: true,
  };

  normalizedGutter.forEach((g, index) => {
      throw new Error("STUB");
  });
  return results;
}
