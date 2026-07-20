import * as React from 'react';
import CSSMotion from '@rc-component/motion';
import { composeRef, raf, render, unmount } from '@rc-component/util';
import { clsx } from 'clsx';

import type { WaveProps } from '.';
import { ConfigContext } from '../../config-provider';
import { genCssVar } from '../../theme/util/genStyleUtils';
import { isTransitionEvent } from '../is';
import { TARGET_CLS } from './interface';
import type { ShowWaveEffect } from './interface';
import { getTargetWaveColor } from './util';

function validateNum(value: number) {
  return Number.isNaN(value) ? 0 : value;
}

export interface WaveEffectProps {
  className: string;
  target: HTMLElement;
  component?: string;
  colorSource?: WaveProps['colorSource'];
}

const WaveEffect: React.FC<WaveEffectProps> = (props) => {
    throw new Error("STUB");
};

const showWaveEffect: ShowWaveEffect = (target, info) => {
    throw new Error("STUB");
};

export default showWaveEffect;
