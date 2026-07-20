import * as React from 'react';
import RcMentions from '@rc-component/mentions';
import type { MentionsProps as RcMentionsProps } from '@rc-component/mentions';
import { composeRef } from '@rc-component/util';
import { clsx } from 'clsx';

import { useAllowClear, useZIndex } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import genPurePanel from '../_util/PurePanel';
import type { InputStatus } from '../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import toList from '../_util/toList';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import type { Variant } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import { FormItemInputContext } from '../form/context';
import useVariant from '../form/hooks/useVariants';
import Spin from '../spin';
import useStyle from './style';

export const { Option } = RcMentions;

function loadingFilterOption() {
    throw new Error("STUB");
}

export type MentionPlacement = 'top' | 'bottom';

export type MentionsOptionProps = NonNullable<RcMentionsProps['options']>[number];
type RcMentionsRef = React.ComponentRef<typeof RcMentions>;

export interface OptionProps {
  value: string;
  children: React.ReactNode;
  [key: string]: any;
}

export type MentionSemanticType = {
  classNames?: {
    root?: string;
    textarea?: string;
    popup?: string;
    suffix?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    textarea?: React.CSSProperties;
    popup?: React.CSSProperties;
    suffix?: React.CSSProperties;
  };
};

export type MentionSemanticAllType = GenerateSemantic<MentionSemanticType, MentionProps>;

export interface MentionProps extends Omit<RcMentionsProps, 'suffix' | 'classNames' | 'styles'> {
  rootClassName?: string;
  loading?: boolean;
  status?: InputStatus;
  options?: MentionsOptionProps[];
  popupClassName?: string;
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant;
  classNames?: MentionSemanticAllType['classNamesAndFn'];
  styles?: MentionSemanticAllType['stylesAndFn'];
  size?: SizeType;
}

export interface MentionsProps extends MentionProps {}

export interface MentionsRef extends RcMentionsRef {}

interface MentionsConfig {
  prefix?: string | string[];
  split?: string;
}

interface MentionsEntity {
  prefix: string;
  value: string;
}

const InternalMentions = React.forwardRef<MentionsRef, MentionProps>((props, ref) => {
    throw new Error("STUB");
});

type CompoundedComponent = typeof InternalMentions & {
  Option: typeof Option;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
  getMentions: (value: string, config?: MentionsConfig) => MentionsEntity[];
};

const Mentions = InternalMentions as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  Mentions.displayName = 'Mentions';
}

Mentions.Option = Option;

// We don't care debug panel
/* istanbul ignore next */
const PurePanel = genPurePanel(Mentions, undefined, undefined, 'mentions');
Mentions._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

Mentions.getMentions = (value = '', config: MentionsConfig = {}): MentionsEntity[] => {
    throw new Error("STUB");
};

export default Mentions;
