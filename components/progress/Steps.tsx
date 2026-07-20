import * as React from 'react';
import { clsx } from 'clsx';

import type { ProgressProps, ProgressSemanticAllType } from './progress';
import { getSize } from './utils';

interface ProgressStepsProps extends Omit<ProgressProps, 'classNames' | 'styles'> {
  steps: number;
  strokeColor?: string | string[];
  railColor?: string;
  /** @deprecated Please use `railColor` instead */
  trailColor?: string;
  classNames: NonNullable<ProgressSemanticAllType['classNames']>;
  styles: NonNullable<ProgressSemanticAllType['styles']>;
}

const Steps: React.FC<ProgressStepsProps> = (props) => {
    throw new Error("STUB");
};

export default Steps;
