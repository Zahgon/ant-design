import React from 'react';
import type { DirectionType } from '../../config-provider';

export const offset = 4;

interface DropIndicatorProps {
  dropPosition: -1 | 0 | 1;
  dropLevelOffset: number;
  indent: number;
  prefixCls: string;
  direction: DirectionType;
}

const dropIndicatorRender = (props: DropIndicatorProps) => {
    throw new Error("STUB");
};

export default dropIndicatorRender;
