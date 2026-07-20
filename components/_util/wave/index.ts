import React, { useContext, useRef } from 'react';
import { composeRef, getNodeRef, isVisible, supportRef } from '@rc-component/util';
import { clsx } from 'clsx';

import type { ConfigConsumerProps } from '../../config-provider';
import { ConfigContext } from '../../config-provider';
import { cloneElement } from '../reactNode';
import type { WaveComponent } from './interface';
import useStyle from './style';
import useWave from './useWave';

export interface WaveProps {
  disabled?: boolean;
  children?: React.ReactNode;
  component?: WaveComponent;
  colorSource?: 'color' | 'backgroundColor' | 'borderColor' | null;
}

const TRIGGER_TYPE_TO_EVENT_MAP = {
  click: 'click',
  mousedown: 'mousedown',
  mouseup: 'mouseup',
  pointerdown: 'pointerdown',
  pointerup: 'pointerup',
} as const;

const Wave: React.FC<WaveProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Wave.displayName = 'Wave';
}

export default Wave;
