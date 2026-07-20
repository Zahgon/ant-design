import * as React from 'react';
import type { CascaderProps as RcCascaderProps } from '@rc-component/cascader';
import { Panel } from '@rc-component/cascader';
import { clsx } from 'clsx';

import type { CascaderProps, DefaultOptionType } from '.';
import { useComponentConfig } from '../config-provider/context';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useBase from './hooks/useBase';
import useCheckable from './hooks/useCheckable';
import useStyle from './style';
import usePanelStyle from './style/panel';
import useIcons from './hooks/useIcons';

type RcPanelProps = React.ComponentProps<typeof Panel>;
type RcPanelPickType = Extract<keyof RcPanelProps, keyof RcCascaderProps>;

export type PanelPickType = Exclude<RcPanelPickType, 'checkable'> | 'multiple' | 'rootClassName';

export type CascaderPanelProps<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
  Multiple extends boolean = boolean,
> = Pick<CascaderProps<OptionType, ValueField, Multiple>, PanelPickType>;

export type CascaderPanelAutoProps<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
> =
  | (CascaderPanelProps<OptionType, ValueField> & { multiple?: false })
  | (CascaderPanelProps<OptionType, ValueField, true> & { multiple: true });

function CascaderPanel<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
>(props: CascaderPanelAutoProps<OptionType, ValueField>) {
    throw new Error("STUB");
}

export default CascaderPanel;
