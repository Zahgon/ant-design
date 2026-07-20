import * as React from 'react';
import StarFilled from '@ant-design/icons/StarFilled';
import RcRate from '@rc-component/rate';
import { clsx } from 'clsx';

import { isPlainObject } from '../_util/is';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import Tooltip from '../tooltip';
import type { TooltipProps } from '../tooltip';
import useStyle from './style';

type RateRef = React.ComponentRef<typeof RcRate>;
type RcRateProps = React.ComponentPropsWithoutRef<typeof RcRate>;
type RcCharacterRender = NonNullable<RcRateProps['characterRender']>;

export interface RateProps extends RcRateProps {
  rootClassName?: string;
  tooltips?: (TooltipProps | string)[];
  size?: SizeType;
}

const Rate = React.forwardRef<RateRef, RateProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Rate.displayName = 'Rate';
}

export default Rate;
