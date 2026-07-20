import React from 'react';
import { UniqueProvider as RcUniqueProvider } from '@rc-component/trigger';
import type { BuildInPlacements } from '@rc-component/trigger';

import { isFunction } from '../../_util/is';
import type { GetProp } from '../../_util/type';
import MotionContent from './MotionContent';

const cachedPlacements: [key: BuildInPlacements, target: BuildInPlacements] = [null!, null!];

function uniqueBuiltinPlacements(ori: BuildInPlacements): BuildInPlacements {
  if (cachedPlacements[0] !== ori) {
    const target: BuildInPlacements = {};
    Object.keys(ori).forEach((placement) => {
        throw new Error("STUB");
    });
    cachedPlacements[0] = ori;
    cachedPlacements[1] = target;
  }
  return cachedPlacements[1];
}

const UniqueProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    throw new Error("STUB");
};

export default UniqueProvider;
