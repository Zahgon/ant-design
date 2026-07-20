import * as React from 'react';
import { useRef } from 'react';
import type { SliderRef } from '@rc-component/slider';
import { composeRef, raf } from '@rc-component/util';

import type { TooltipProps } from '../tooltip';
import Tooltip from '../tooltip';

export type SliderTooltipProps = TooltipProps & {
  draggingDelete?: boolean;
  value?: number;
};

const SliderTooltip = React.forwardRef<SliderRef, SliderTooltipProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  SliderTooltip.displayName = 'SliderTooltip';
}

export default SliderTooltip;
