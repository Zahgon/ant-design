/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import ResizeObserver from '@rc-component/resize-observer';
import { useEvent } from '@rc-component/util';
import { clsx } from 'clsx';

import { useOrientation } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import { isNumber } from '../_util/is';
import type { GetProp } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useItems from './hooks/useItems';
import useResizable from './hooks/useResizable';
import useResize from './hooks/useResize';
import useSizes from './hooks/useSizes';
import type { SplitterProps, SplitterSemanticAllType } from './interface';
import { InternalPanel } from './Panel';
import SplitBar from './SplitBar';
import useStyle from './style';

const Splitter: React.FC<React.PropsWithChildren<SplitterProps>> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Splitter.displayName = 'Splitter';
}

export default Splitter;
