import * as React from 'react';
import { clsx } from 'clsx';

import { useClosable } from '../_util/hooks';
import { withPureRenderTheme } from '../_util/PurePanel';
import { cloneElement } from '../_util/reactNode';
import { ConfigContext } from '../config-provider';
import { RawPurePanel as PopoverRawPurePanel } from '../popover/PurePanel';
import type { TourStepProps } from './interface';
import TourPanel from './panelRender';
import useStyle from './style';

export interface PurePanelProps extends TourStepProps {}

const PurePanel: React.FC<PurePanelProps> = (props) => {
    throw new Error("STUB");
};

export default withPureRenderTheme(PurePanel);
