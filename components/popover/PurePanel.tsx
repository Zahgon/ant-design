import * as React from 'react';
import { Popup } from '@rc-component/tooltip';
import { clsx } from 'clsx';

import type { PopoverProps, PopoverSemanticAllType } from '.';
import { getRenderPropValue } from '../_util/getRenderPropValue';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isReactRenderable } from '../_util/is';
import { ConfigContext } from '../config-provider';
import useStyle from './style';

interface OverlayProps {
  prefixCls?: string;
  title?: React.ReactNode;
  content?: React.ReactNode;
  classNames?: PopoverSemanticAllType['classNames'];
  styles?: PopoverSemanticAllType['styles'];
}

export const Overlay: React.FC<OverlayProps> = (props) => {
    throw new Error("STUB");
};

export interface PurePanelProps extends Omit<PopoverProps, 'children'> {
  children?: React.ReactNode;
}

interface RawPurePanelProps extends PopoverProps {
  hashId: string;
}

export const RawPurePanel: React.FC<RawPurePanelProps> = (props) => {
    throw new Error("STUB");
};

const PurePanel: React.FC<PurePanelProps> = (props) => {
    throw new Error("STUB");
};

export default PurePanel;
