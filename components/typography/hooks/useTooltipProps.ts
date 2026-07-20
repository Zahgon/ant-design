import { isValidElement, useMemo } from 'react';

import { isPlainObject } from '../../_util/is';
import type { TooltipProps } from '../../tooltip';

const useTooltipProps = (
  tooltip: React.ReactNode | TooltipProps,
  editConfigText: React.ReactNode,
  children: React.ReactNode,
) =>
  useMemo(() => {
      throw new Error("STUB");
  }, [tooltip, editConfigText, children]);

export default useTooltipProps;
