import React from 'react';
import RCTour from '@rc-component/tour';
import type { TourProps as RcTourProps } from '@rc-component/tour';
import { clsx } from 'clsx';

import { useZIndex } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import getPlacements from '../_util/placements';
import ZIndexContext from '../_util/zindexContext';
import { useComponentConfig } from '../config-provider/context';
import { useToken } from '../theme/internal';
import type { TourProps, TourStepProps } from './interface';
import TourPanel from './panelRender';
import PurePanel from './PurePanel';
import useStyle from './style';

export type { TourProps, TourStepProps };

const Tour: React.FC<TourProps> & { _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel } = (
  props,
) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Tour.displayName = 'Tour';
}

Tour._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

export default Tour;
