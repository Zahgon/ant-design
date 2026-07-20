import * as React from 'react';
import { omit } from '@rc-component/util';

import { isPlainObject } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import type { BlockProps, EllipsisConfig } from './Base';
import Base from './Base';

export interface TextProps
  extends BlockProps<'span'>,
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'type' | keyof BlockProps<'span'>> {
  ellipsis?: boolean | Omit<EllipsisConfig, 'expandable' | 'rows' | 'onExpand'>;
}

const Text = React.forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
    throw new Error("STUB");
});

export default Text;
