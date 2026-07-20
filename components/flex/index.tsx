import React from 'react';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { isPresetSize } from '../_util/gapSize';
import { useOrientation } from '../_util/hooks';
import { isNonNullable } from '../_util/is';
import { ConfigContext } from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import type { FlexProps } from './interface';
import useStyle from './style';
import createFlexClassNames from './utils';

const Flex = React.forwardRef<HTMLElement, React.PropsWithChildren<FlexProps>>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Flex.displayName = 'Flex';
}

export default Flex;
