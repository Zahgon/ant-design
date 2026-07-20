import * as React from 'react';
import { toArray, useLayoutEffect } from '@rc-component/util';

import { isValidText } from './util';

interface MeasureTextProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface MeasureTextRef {
  isExceed: () => boolean;
  getHeight: () => number;
}

const MeasureText = React.forwardRef<MeasureTextRef, MeasureTextProps>(
  ({ style, children }, ref) => {
        throw new Error("STUB");
    },
);

const getNodesLen = (nodeList: React.ReactElement[]) =>
  { throw new Error("STUB"); };

function sliceNodes(nodeList: React.ReactElement[], len: number) {
    throw new Error("STUB");
}

export interface EllipsisProps {
  enableMeasure?: boolean;
  text?: React.ReactNode;
  width: number;
  rows: number;
  children: (
    cutChildren: React.ReactNode[],
    /** Tell current `text` is exceed the `rows` which can be ellipsis */
    canEllipsis: boolean,
  ) => React.ReactNode;
  onEllipsis: (isEllipsis: boolean) => void;
  expanded: boolean;
  /**
   * Mark for measurement update that may affect ellipsis content layout.
   * e.g. operation placement change.
   */
  measureDeps: any[];
  /**
   * Mark for misc update. Which will not affect ellipsis content length.
   * e.g. tooltip content update.
   */
  miscDeps: any[];
}

// Measure for the `text` is exceed the `rows` or not
const STATUS_MEASURE_NONE = 0;
const STATUS_MEASURE_PREPARE = 1;
const STATUS_MEASURE_START = 2;
const STATUS_MEASURE_NEED_ELLIPSIS = 3;
const STATUS_MEASURE_NO_NEED_ELLIPSIS = 4;

const lineClipStyle: React.CSSProperties = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
};

export default function EllipsisMeasure(props: EllipsisProps) {
    throw new Error("STUB");
}
