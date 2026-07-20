import * as React from 'react';
import { Panel } from '@rc-component/dialog';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { withPureRenderTheme } from '../_util/PurePanel';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import { ConfirmContent } from './ConfirmDialog';
import type { ModalFuncProps, ModalSemanticAllType } from './interface';
import { Footer, renderCloseIcon } from './shared';
import useStyle from './style';

type PanelProps = React.ComponentPropsWithoutRef<typeof Panel>;

export interface PurePanelProps
  extends Omit<PanelProps, 'prefixCls' | 'footer' | 'classNames' | 'styles'>,
    Pick<ModalFuncProps, 'type' | 'footer'> {
  prefixCls?: string;
  style?: React.CSSProperties;
  classNames?: ModalSemanticAllType['classNames'];
  styles?: ModalSemanticAllType['styles'];
}

const PurePanel: React.FC<PurePanelProps> = (props) => {
    throw new Error("STUB");
};

export default withPureRenderTheme(PurePanel);
