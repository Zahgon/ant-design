import * as React from 'react';
import { clsx } from 'clsx';

import type { PresetColorType } from '../_util/colors';
import { isPresetColor } from '../_util/colors';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import type { LiteralUnion } from '../_util/type';
import { useComponentConfig } from '../config-provider/context';
import useStyle from './style/ribbon';

type RibbonPlacement = 'start' | 'end';

export type RibbonSemanticType = {
  classNames?: {
    root?: string;
    content?: string;
    indicator?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    content?: React.CSSProperties;
    indicator?: React.CSSProperties;
  };
};

export type RibbonSemanticAllType = GenerateSemantic<RibbonSemanticType, RibbonProps>;

export interface RibbonProps {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties; // style of ribbon element, not the wrapper
  text?: React.ReactNode;
  color?: LiteralUnion<PresetColorType>;
  children?: React.ReactNode;
  placement?: RibbonPlacement;
  rootClassName?: string;
  classNames?: RibbonSemanticAllType['classNamesAndFn'];
  styles?: RibbonSemanticAllType['stylesAndFn'];
}

const Ribbon: React.FC<RibbonProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Ribbon.displayName = 'Ribbon';
}

export default Ribbon;
