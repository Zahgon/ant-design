import * as React from 'react';
import type {
  BaseOptionType,
  DefaultOptionType,
  FieldNames,
  CascaderProps as RcCascaderProps,
  SearchConfig,
} from '@rc-component/cascader';
import RcCascader from '@rc-component/cascader';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { useZIndex } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isNumber, isPlainObject, isString } from '../_util/is';
import type { SelectCommonPlacement } from '../_util/motion';
import { getTransitionName } from '../_util/motion';
import genPurePanel from '../_util/PurePanel';
import type { InputStatus } from '../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
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
import type { SelectSemanticType } from '../select';
import mergedBuiltinPlacements from '../select/mergedBuiltinPlacements';
import useSelectStyle from '../select/style';
import useSelectIcons from '../select/useIcons';
import usePopupRender from '../select/usePopupRender';
import useShowArrow from '../select/useShowArrow';
import { useCompactItemContext } from '../space/Compact';
import useBase from './hooks/useBase';
import useCheckable from './hooks/useCheckable';
import useIcons from './hooks/useIcons';
import CascaderPanel from './Panel';
import useStyle from './style';

// Align the design since we use `@rc-component/select` in root. This help:
// - List search content will show all content
// - Hover opacity style
// - Search filter match case

export type { BaseOptionType, DefaultOptionType };

export type FieldNamesType = FieldNames;

export type FilledFieldNamesType = Required<FieldNamesType>;

export type CascaderSemanticType = {
  classNames?: {
    root?: string;
    prefix?: string;
    suffix?: string;
    input?: string;
    placeholder?: string;
    content?: string;
    item?: string;
    itemContent?: string;
    itemRemove?: string;
    popup?: NonNullable<SelectSemanticType['classNames']>['popup'];
  };
  styles?: {
    root?: React.CSSProperties;
    prefix?: React.CSSProperties;
    suffix?: React.CSSProperties;
    input?: React.CSSProperties;
    placeholder?: React.CSSProperties;
    content?: React.CSSProperties;
    item?: React.CSSProperties;
    itemContent?: React.CSSProperties;
    itemRemove?: React.CSSProperties;
    popup?: NonNullable<SelectSemanticType['styles']>['popup'];
  };
};

export type CascaderSemanticAllType = GenerateSemantic<CascaderSemanticType, CascaderProps>;

const { SHOW_CHILD, SHOW_PARENT } = RcCascader;

const highlightKeyword = (str: string, lowerKeyword: string, prefixCls?: string) => {
  const cells = str
    .toLowerCase()
    .split(lowerKeyword)
    .reduce<string[]>(
      (list, cur, index) => { throw new Error("STUB"); },
      [],
    );
  const fillCells: React.ReactNode[] = [];
  let start = 0;

  cells.forEach((cell, index) => {
      throw new Error("STUB");
  });

  return fillCells;
};

const defaultSearchRender: SearchConfig['render'] = (inputValue, path, prefixCls, fieldNames) => {
    throw new Error("STUB");
};

export interface CascaderProps<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
  Multiple extends boolean = boolean,
> extends Omit<
    RcCascaderProps<OptionType, ValueField, Multiple>,
    'checkable' | 'classNames' | 'styles'
  > {
  multiple?: Multiple;
  size?: SizeType;
  /**
   * @deprecated `showArrow` is deprecated which will be removed in next major version. It will be a
   *   default behavior, you can hide it by setting `suffixIcon` to null.
   */
  showArrow?: boolean;
  disabled?: boolean;
  /** @deprecated Use `variant` instead. */
  bordered?: boolean;
  placement?: SelectCommonPlacement;
  suffixIcon?: React.ReactNode;
  showSearch?:
    | boolean
    | (SearchConfig<OptionType, keyof OptionType> & { searchIcon?: React.ReactNode });
  options?: OptionType[];
  status?: InputStatus;

  rootClassName?: string;
  /** @deprecated Please use `classNames.popup.root` instead */
  popupClassName?: string;
  /** @deprecated Please use `classNames.popup.root` instead */
  dropdownClassName?: string;
  /** @deprecated Please use `styles.popup.root` instead */
  dropdownStyle?: React.CSSProperties;
  /** @deprecated Please use `popupRender` instead */
  dropdownRender?: (menu: React.ReactElement) => React.ReactElement;
  popupRender?: (menu: React.ReactElement) => React.ReactElement;
  /** @deprecated Please use `styles.popup.listItem` instead */
  dropdownMenuColumnStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.popup.listItem` instead */
  popupMenuColumnStyle?: React.CSSProperties;
  /** @deprecated Please use `onOpenChange` instead */
  onDropdownVisibleChange?: (visible: boolean) => void;
  /** @deprecated Please use `onOpenChange` instead */
  onPopupVisibleChange?: (visible: boolean) => void;
  onOpenChange?: (visible: boolean) => void;
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant;
  classNames?: CascaderSemanticAllType['classNamesAndFn'];
  styles?: CascaderSemanticAllType['stylesAndFn'];
}

export type CascaderAutoProps<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
> =
  | (CascaderProps<OptionType, ValueField> & { multiple?: false })
  | (CascaderProps<OptionType, ValueField, true> & { multiple: true });

export interface CascaderRef {
  focus: () => void;
  blur: () => void;
}

const Cascader = React.forwardRef<CascaderRef, CascaderProps<any>>((props, ref) => {
    throw new Error("STUB");
}) as unknown as (<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
>(
  props: React.PropsWithChildren<CascaderAutoProps<OptionType, ValueField>> &
    React.RefAttributes<CascaderRef>,
) => React.ReactElement) & {
  displayName: string;
  SHOW_PARENT: typeof SHOW_PARENT;
  SHOW_CHILD: typeof SHOW_CHILD;
  Panel: typeof CascaderPanel;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};
if (process.env.NODE_ENV !== 'production') {
  Cascader.displayName = 'Cascader';
}

// We don't care debug panel
/* istanbul ignore next */
const PurePanel = genPurePanel(Cascader, 'popupAlign', (props: any) => { throw new Error("STUB"); });

Cascader.SHOW_PARENT = SHOW_PARENT;
Cascader.SHOW_CHILD = SHOW_CHILD;
Cascader.Panel = CascaderPanel;
Cascader._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

export default Cascader;
