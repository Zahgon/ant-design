import * as React from 'react';

import Tooltip from '../../tooltip';
import type { TooltipProps } from '../../tooltip';

export interface EllipsisTooltipProps {
  tooltipProps?: TooltipProps;
  enableEllipsis: boolean;
  isEllipsis?: boolean;
  /** When true, show the ellipsis tooltip; when false, hide it. Fully controlled so tooltip re-opens when moving from copy button back to text. */
  open: boolean;
  children: React.ReactElement;
}

const EllipsisTooltip: React.FC<EllipsisTooltipProps> = ({
  enableEllipsis,
  isEllipsis,
  open,
  children,
  tooltipProps,
}) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  EllipsisTooltip.displayName = 'EllipsisTooltip';
}

export default EllipsisTooltip;
