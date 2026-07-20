import * as React from 'react';
import { createTheme, StyleContext as CssInJsStyleContext } from '@ant-design/cssinjs';
import IconContext from '@ant-design/icons/lib/components/Context';
import { merge, useMemo } from '@rc-component/util';

import { isFunction, isPlainObject } from '../_util/is';
import warning, { devUseWarning, WarningContext } from '../_util/warning';
import type { WarningContextProps } from '../_util/warning';
import ValidateMessagesContext from '../form/validateMessagesContext';
import type { Locale } from '../locale';
import LocaleProvider, { ANT_MARK } from '../locale';
import type { LocaleContextProps } from '../locale/context';
import LocaleContext from '../locale/context';
import defaultLocale from '../locale/en_US';
import { defaultTheme, DesignTokenContext } from '../theme/context';
import defaultSeedToken from '../theme/themes/seed';
import UniqueProvider from '../tooltip/UniqueProvider';
import type {
  AlertConfig,
  AnchorStyleConfig,
  BadgeConfig,
  BorderBeamConfig,
  BreadcrumbConfig,
  ButtonConfig,
  CalendarConfig,
  CardConfig,
  CardMetaConfig,
  CascaderConfig,
  CheckboxConfig,
  CollapseConfig,
  ColorPickerConfig,
  ComponentStyleConfig,
  ConfigConsumerProps,
  CSPConfig,
  DatePickerConfig,
  DescriptionsConfig,
  DirectionType,
  DividerConfig,
  DrawerConfig,
  DropdownConfig,
  EmptyConfig,
  FlexConfig,
  FloatButtonConfig,
  FloatButtonGroupConfig,
  FormConfig,
  ImageConfig,
  InputConfig,
  InputNumberConfig,
  InputPasswordConfig,
  InputSearchConfig,
  ListConfig,
  MasonryConfig,
  MentionsConfig,
  MenuConfig,
  MessageConfig,
  ModalConfig,
  NotificationConfig,
  OTPConfig,
  PaginationConfig,
  PopconfirmConfig,
  PopoverConfig,
  PopupOverflow,
  ProgressConfig,
  QRcodeConfig,
  RadioConfig,
  RangePickerConfig,
  ResultConfig,
  RibbonConfig,
  SegmentedConfig,
  SelectConfig,
  SkeletonConfig,
  SliderConfig,
  SpaceConfig,
  SpinConfig,
  SplitterConfig,
  StatisticConfig,
  StepsConfig,
  SwitchStyleConfig,
  TableConfig,
  TabsConfig,
  TagConfig,
  TextAreaConfig,
  ThemeConfig,
  TimelineConfig,
  TimePickerConfig,
  TooltipConfig,
  TourConfig,
  TransferConfig,
  TreeConfig,
  TreeSelectConfig,
  TypographyConfig,
  UploadConfig,
  Variant,
  WaveConfig,
} from './context';
import {
  ConfigConsumer,
  ConfigContext,
  defaultIconPrefixCls,
  defaultPrefixCls,
  Variants,
} from './context';
import type { RenderEmptyHandler } from './defaultRenderEmpty';
import { DisabledContextProvider } from './DisabledContext';
import useConfig from './hooks/useConfig';
import useTheme from './hooks/useTheme';
import MotionWrapper from './MotionWrapper';
import PropWarning from './PropWarning';
import type { SizeType } from './SizeContext';
import SizeContext, { SizeContextProvider } from './SizeContext';
import useStyle from './style';

/**
 * This component registers icon styles inside the DesignTokenContext.Provider
 * so that CSS variables use the correct cssVar key from the theme config.
 */
const IconStyle: React.FC<{ iconPrefixCls: string; csp?: CSPConfig }> = ({
  iconPrefixCls,
  csp,
}) => {
    throw new Error("STUB");
};

export type { Variant };

export { Variants };

/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */
let existThemeConfig = false;

export const warnContext: (componentName: string) => void =
  process.env.NODE_ENV !== 'production'
    ? (componentName: string) => {
        throw new Error("STUB");
    }
    : /* istanbul ignore next */
      null!;

export {
  ConfigConsumer,
  type ConfigConsumerProps,
  ConfigContext,
  type CSPConfig,
  defaultIconPrefixCls,
  defaultPrefixCls,
  type DirectionType,
  type RenderEmptyHandler,
  type ThemeConfig,
};

export const configConsumerProps = [
  'getTargetContainer',
  'getPopupContainer',
  'rootPrefixCls',
  'getPrefixCls',
  'renderEmpty',
  'csp',
  'autoInsertSpaceInButton',
  'locale',
];

// These props is used by `useContext` directly in sub component
const PASSED_PROPS: Exclude<
  keyof ConfigConsumerProps,
  'rootPrefixCls' | 'getPrefixCls' | 'warning'
>[] = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'input',
  'pagination',
  'form',
  'select',
  'button',
];

export interface ConfigProviderProps {
  getTargetContainer?: () => HTMLElement | Window | ShadowRoot;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement | ShadowRoot;
  prefixCls?: string;
  iconPrefixCls?: string;
  children?: React.ReactNode;
  renderEmpty?: RenderEmptyHandler;
  csp?: CSPConfig;
  /** @deprecated Please use `{ button: { autoInsertSpace: boolean }}` instead */
  autoInsertSpaceInButton?: boolean;
  variant?: Variant;
  form?: FormConfig;
  input?: InputConfig;
  inputPassword?: InputPasswordConfig;
  inputSearch?: InputSearchConfig;
  otp?: OTPConfig;
  inputNumber?: InputNumberConfig;
  textArea?: TextAreaConfig;
  select?: SelectConfig;
  pagination?: PaginationConfig;
  /**
   * @descCN 语言包配置，语言包可到 `antd/locale` 目录下寻找。
   * @descEN Language package setting, you can find the packages in `antd/locale`.
   */
  locale?: Locale;
  componentSize?: SizeType;
  componentDisabled?: boolean;
  /**
   * @descCN 设置布局展示方向。
   * @descEN Set direction of layout.
   * @default ltr
   */
  direction?: DirectionType;
  space?: SpaceConfig;
  splitter?: SplitterConfig;
  /**
   * @descCN 设置 `false` 时关闭虚拟滚动。
   * @descEN Close the virtual scrolling when setting `false`.
   * @default true
   */
  virtual?: boolean;
  /** @deprecated Please use `popupMatchSelectWidth` instead */
  dropdownMatchSelectWidth?: boolean;
  popupMatchSelectWidth?: boolean;
  popupOverflow?: PopupOverflow;
  theme?: ThemeConfig;
  warning?: WarningContextProps;
  alert?: AlertConfig;
  affix?: ComponentStyleConfig;
  anchor?: AnchorStyleConfig;
  app?: ComponentStyleConfig;
  button?: ButtonConfig;
  calendar?: CalendarConfig;
  carousel?: ComponentStyleConfig;
  cascader?: CascaderConfig;
  treeSelect?: TreeSelectConfig;
  collapse?: CollapseConfig;
  divider?: DividerConfig;
  drawer?: DrawerConfig;
  typography?: TypographyConfig;
  skeleton?: SkeletonConfig;
  spin?: SpinConfig;
  segmented?: SegmentedConfig;
  statistic?: StatisticConfig;
  steps?: StepsConfig;
  image?: ImageConfig;
  layout?: ComponentStyleConfig;
  list?: ListConfig;
  mentions?: MentionsConfig;
  modal?: ModalConfig;
  progress?: ProgressConfig;
  result?: ResultConfig;
  slider?: SliderConfig;
  masonry?: MasonryConfig;
  breadcrumb?: BreadcrumbConfig;
  menu?: MenuConfig;
  floatButton?: FloatButtonConfig;
  floatButtonGroup?: FloatButtonGroupConfig;
  checkbox?: CheckboxConfig;
  descriptions?: DescriptionsConfig;
  empty?: EmptyConfig;
  badge?: BadgeConfig;
  borderBeam?: BorderBeamConfig;
  radio?: RadioConfig;
  rate?: ComponentStyleConfig;
  ribbon?: RibbonConfig;
  switch?: SwitchStyleConfig;
  transfer?: TransferConfig;
  avatar?: ComponentStyleConfig;
  message?: MessageConfig;
  tag?: TagConfig;
  table?: TableConfig;
  card?: CardConfig;
  cardMeta?: CardMetaConfig;
  tabs?: TabsConfig;
  timeline?: TimelineConfig;
  timePicker?: TimePickerConfig;
  upload?: UploadConfig;
  notification?: NotificationConfig;
  tree?: TreeConfig;
  colorPicker?: ColorPickerConfig;
  datePicker?: DatePickerConfig;
  rangePicker?: RangePickerConfig;
  dropdown?: DropdownConfig;
  flex?: FlexConfig;
  /**
   * Wave is special component which only patch on the effect of component interaction.
   */
  wave?: WaveConfig;
  tour?: TourConfig;
  tooltip?: TooltipConfig;
  popover?: PopoverConfig;
  popconfirm?: PopconfirmConfig;
  watermark?: ComponentStyleConfig;
  qrcode?: QRcodeConfig;
}

interface ProviderChildrenProps extends ConfigProviderProps {
  parentContext: ConfigConsumerProps;
  legacyLocale: Locale;
}

type holderRenderType = (children: React.ReactNode) => React.ReactNode;

let globalPrefixCls: string;
let globalIconPrefixCls: string;
let globalTheme: ThemeConfig;
let globalHolderRender: holderRenderType | undefined;

function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}

function getGlobalIconPrefixCls() {
    throw new Error("STUB");
}

export interface GlobalConfigProps {
  prefixCls?: string;
  iconPrefixCls?: string;
  theme?: ThemeConfig;
  holderRender?: holderRenderType;
}

const setGlobalConfig = (props: GlobalConfigProps) => {
    throw new Error("STUB");
};

export const globalConfig = () => ({
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
        throw new Error("STUB");
    },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
      throw new Error("STUB");
  },
  getTheme: () => { throw new Error("STUB"); },
  holderRender: globalHolderRender,
});

const ProviderChildren: React.FC<ProviderChildrenProps> = (props) => {
    throw new Error("STUB");
};

const ConfigProvider: React.FC<ConfigProviderProps> & {
  /** @private internal Usage. do not use in your production */
  ConfigContext: typeof ConfigContext;
  /** @deprecated Please use `ConfigProvider.useConfig().componentSize` instead */
  SizeContext: typeof SizeContext;
  config: typeof setGlobalConfig;
  useConfig: typeof useConfig;
} = (props) => {
    throw new Error("STUB");
};

ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig;

Object.defineProperty(ConfigProvider, 'SizeContext', {
  get: () => {
        throw new Error("STUB");
    },
});

if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = 'ConfigProvider';
}

export default ConfigProvider;
