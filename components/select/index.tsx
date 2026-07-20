// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
import * as React from 'react';
import type {
  BaseOptionType,
  BaseSelectRef,
  DefaultOptionType,
  OptionProps,
  SelectProps as RcSelectProps,
  SearchConfig,
} from '@rc-component/select';
import RcSelect, { OptGroup, Option } from '@rc-component/select';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { useZIndex } from '../_util/hooks';
import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import type { SelectCommonPlacement } from '../_util/motion';
import { getTransitionName } from '../_util/motion';
import normalizeIcon from '../_util/normalizeIcon';
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
import useVariants from '../form/hooks/useVariants';
import { useCompactItemContext } from '../space/Compact';
import { useToken } from '../theme/internal';
import mergedBuiltinPlacements from './mergedBuiltinPlacements';
import useStyle from './style';
import useIcons from './useIcons';
import usePopupRender from './usePopupRender';
import useShowArrow from './useShowArrow';

type RawValue = string | number;

export type {
  BaseOptionType,
  DefaultOptionType,
  OptionProps,
  BaseSelectRef as RefSelectProps,
  SearchConfig,
};

export interface LabeledValue {
  key?: string;
  value: RawValue;
  label: React.ReactNode;
}

export type SelectSemanticType = {
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
    clear?: string;
    popup?: {
      root?: string;
      listItem?: string;
      list?: string;
    };
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
    clear?: React.CSSProperties;
    popup?: {
      root?: React.CSSProperties;
      listItem?: React.CSSProperties;
      list?: React.CSSProperties;
    };
  };
};

export type SelectSemanticAllType = GenerateSemantic<SelectSemanticType, SelectProps>;

export type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[] | undefined;

export interface InternalSelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends Omit<RcSelectProps<ValueType, OptionType>, 'mode' | 'styles' | 'classNames'> {
  rootClassName?: string;
  prefix?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  mode?: 'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE' | 'combobox';
  /** @deprecated Use `variant` instead. */
  bordered?: boolean;
  /**
   * @deprecated `showArrow` is deprecated which will be removed in next major version. It will be a
   *   default behavior, you can hide it by setting `suffixIcon` to null.
   */
  showArrow?: boolean;
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant;
  classNames?: SelectSemanticAllType['classNamesAndFn'];
  styles?: SelectSemanticAllType['stylesAndFn'];
  loadingIcon?: React.ReactNode;
  showSearch?: boolean | (SearchConfig<OptionType> & { searchIcon?: React.ReactNode });
}

export interface SelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends Omit<
    InternalSelectProps<ValueType, OptionType>,
    | 'mode'
    | 'getInputElement'
    | 'getRawInputElement'
    | 'backfill'
    | 'placement'
    | 'dropdownClassName'
    | 'dropdownStyle'
  > {
  placement?: SelectCommonPlacement;
  mode?: 'multiple' | 'tags';
  status?: InputStatus;
  /** @deprecated Please use `classNames.popup.root` instead */
  popupClassName?: string;
  /** @deprecated Please use `classNames.popup.root` instead */
  dropdownClassName?: string;
  /** @deprecated Please use `styles.popup` instead */
  dropdownStyle?: React.CSSProperties;
  /** @deprecated Please use `popupRender` instead */
  dropdownRender?: SelectProps['popupRender'];
  /** @deprecated Please use `onOpenChange` instead */
  onDropdownVisibleChange?: SelectProps['onPopupVisibleChange'];
  /** @deprecated Please use `popupMatchSelectWidth` instead */
  dropdownMatchSelectWidth?: boolean | number;
  popupMatchSelectWidth?: boolean | number;
  onOpenChange?: (visible: boolean) => void;
}

const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

const InternalSelect = <
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  props: SelectProps<ValueType, OptionType>,
  ref: React.Ref<BaseSelectRef>,
) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  InternalSelect.displayName = 'Select';
}

const Select = React.forwardRef(InternalSelect) as unknown as (<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  props: React.PropsWithChildren<SelectProps<ValueType, OptionType>> &
    React.RefAttributes<BaseSelectRef>,
) => React.ReactElement) & {
  displayName?: string;
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
  /** @deprecated Please use `options` instead. */
  Option: typeof Option;
  /** @deprecated Please use `options` instead. */
  OptGroup: typeof OptGroup;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};

// We don't care debug panel
/* istanbul ignore next */
const PurePanel = genPurePanel(Select, 'popupAlign');

Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

if (process.env.NODE_ENV !== 'production') {
  Select.displayName = 'Select';
}

export default Select;
