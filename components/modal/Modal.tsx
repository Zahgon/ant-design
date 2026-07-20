import * as React from 'react';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import Dialog from '@rc-component/dialog';
import type { DialogProps } from '@rc-component/dialog';
import { composeRef, omit } from '@rc-component/util';
import { clsx } from 'clsx';

import ContextIsolator from '../_util/ContextIsolator';
import { pickClosable, useClosable, useMergedMask, useZIndex } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isNonNullable, isNumber, isPlainObject } from '../_util/is';
import { getTransitionName } from '../_util/motion';
import type { Breakpoint } from '../_util/responsiveObserver';
import { canUseDocElement } from '../_util/styleChecker';
import { devUseWarning } from '../_util/warning';
import ZIndexContext from '../_util/zindexContext';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useFocusable from '../drawer/useFocusable';
import Skeleton from '../skeleton';
import { usePanelRef } from '../watermark/context';
import type { ModalProps, ModalSemanticAllType, MousePosition } from './interface';
import { Footer, renderCloseIcon } from './shared';
import useStyle from './style';

let mousePosition: MousePosition;

type ModalSemanticName = keyof NonNullable<ModalSemanticAllType['classNames']>;
type ModalSemanticRenderInfo = {
  classNames: NonNullable<ModalSemanticAllType['classNamesNoString']>;
  styles: NonNullable<ModalSemanticAllType['styles']>;
};

interface InternalModalProps extends ModalProps {
  _semanticOmit?: readonly ModalSemanticName[];
  _renderSemanticContent?: (semantic: ModalSemanticRenderInfo) => React.ReactNode;
}

// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = (e: MouseEvent) => {
    throw new Error("STUB");
};

// 只有点击事件支持从鼠标位置动画展开
if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

const Modal: React.FC<ModalProps> = (props) => {
    throw new Error("STUB");
};

export default Modal;
