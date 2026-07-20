import React from 'react';

import type { AbstractTooltipProps } from '..';
import type { TooltipConfig } from '../../config-provider/context';

interface MergedArrow {
  show: boolean;
  pointAtCenter?: boolean;
}
const useMergedArrow = (
  providedArrow?: AbstractTooltipProps['arrow'],
  providedContextArrow?: TooltipConfig['arrow'],
): MergedArrow => {
  const toConfig = (arrow?: boolean | AbstractTooltipProps['arrow']): Partial<MergedArrow> =>
    typeof arrow === 'boolean' ? { show: arrow } : arrow || {};

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [providedArrow, providedContextArrow]);
};
export default useMergedArrow;
