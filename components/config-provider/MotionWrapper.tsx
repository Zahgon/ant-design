import * as React from 'react';
import { Provider as MotionProvider } from '@rc-component/motion';

import { useToken } from '../theme/internal';

const MotionCacheContext = React.createContext(true);
if (process.env.NODE_ENV !== 'production') {
  MotionCacheContext.displayName = 'MotionCacheContext';
}

export interface MotionWrapperProps {
  children?: React.ReactNode;
}

export default function MotionWrapper(props: MotionWrapperProps): React.ReactElement {
    throw new Error("STUB");
}
