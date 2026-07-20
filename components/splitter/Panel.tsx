import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

import type { InternalPanelProps, PanelProps } from './interface';

export const InternalPanel = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<InternalPanelProps>
>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  InternalPanel.displayName = 'Panel';
}

const Panel: React.FC<React.PropsWithChildren<PanelProps>> = () => { throw new Error("STUB"); };

export default Panel;
