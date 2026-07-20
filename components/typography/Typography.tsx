import * as React from 'react';
import type { JSX } from 'react';
import { clsx } from 'clsx';

import type { DirectionType } from '../config-provider';
import type { BaseTypographyProps, TypographySemanticType } from './Base';
import { useTypographySemantic } from './hooks/useTypographySemantic';
import useStyle from './style';

export interface TypographyProps<C extends keyof JSX.IntrinsicElements = any>
  extends BaseTypographyProps {
  /** @internal */
  component?: C;
}

interface InternalProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  component?: keyof JSX.IntrinsicElements;
  direction?: DirectionType;
  classNames?: TypographySemanticType['classNames'];
  styles?: TypographySemanticType['styles'];
  prefixCls: string;
}
const InternalTypography = React.forwardRef<HTMLElement, InternalProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  InternalTypography.displayName = 'InternalTypography';
}

const Typography = React.forwardRef<HTMLElement, TypographyProps<keyof JSX.IntrinsicElements>>(
  (props, ref) => {
        throw new Error("STUB");
    },
);

if (process.env.NODE_ENV !== 'production') {
  Typography.displayName = 'Typography';
}

export default Typography;
export { InternalTypography };
