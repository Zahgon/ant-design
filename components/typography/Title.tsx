import * as React from 'react';
import type { JSX } from 'react';

import { devUseWarning } from '../_util/warning';
import type { BlockProps } from './Base';
import Base from './Base';

const TITLE_ELE_LIST = [1, 2, 3, 4, 5] as const;

export interface TitleProps
  extends Omit<BlockProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>, 'strong'>,
    Omit<
      React.HTMLAttributes<HTMLHeadElement>,
      'type' | keyof BlockProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>
    > {
  level?: (typeof TITLE_ELE_LIST)[number];
}

const Title = React.forwardRef<HTMLElement, TitleProps>((props, ref) => {
    throw new Error("STUB");
});

export default Title;
