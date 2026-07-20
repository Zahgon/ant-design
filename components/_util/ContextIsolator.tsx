import React from 'react';

import { NoFormStyle } from '../form/context';
import { NoCompactStyle } from '../space/Compact';
import { isReactRenderable } from './is';

const ContextIsolator: React.FC<
  Readonly<React.PropsWithChildren<Partial<Record<'space' | 'form', boolean>>>>
> = (props) => {
    throw new Error("STUB");
};

export default ContextIsolator;
