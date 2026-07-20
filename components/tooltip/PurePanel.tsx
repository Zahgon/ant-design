import * as React from 'react';
import { Popup } from '@rc-component/tooltip';
import { clsx } from 'clsx';

import type { TooltipProps } from '.';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { ConfigContext } from '../config-provider';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useStyle from './style';
import { parseColor } from './util';

export interface PurePanelProps extends Omit<TooltipProps, 'children'> {}

/** @private Internal Component. Do not use in your production. */
const PurePanel: React.FC<PurePanelProps> = (props) => {
    throw new Error("STUB");
};

export default PurePanel;
