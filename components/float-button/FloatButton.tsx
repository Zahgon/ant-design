import React from 'react';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import convertToTooltipProps from '../_util/convertToTooltipProps';
import { useZIndex } from '../_util/hooks';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { devUseWarning } from '../_util/warning';
import Badge from '../badge';
import type { BadgeProps } from '../badge';
import type { ButtonSemanticType } from '../button/Button';
import Button from '../button/Button';
import type { ButtonHTMLType } from '../button/buttonHelpers';
import { ConfigContext } from '../config-provider';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import Tooltip from '../tooltip';
import type { TooltipProps } from '../tooltip';
import type BackTop from './BackTop';
import { GroupContext } from './context';
import type FloatButtonGroup from './FloatButtonGroup';
import type PurePanel from './PurePanel';
import useStyle from './style';

export type FloatButtonElement = HTMLAnchorElement & HTMLButtonElement;

export interface FloatButtonRef {
  nativeElement: FloatButtonElement | null;
}

export type FloatButtonType = 'default' | 'primary';

export type FloatButtonShape = 'circle' | 'square';

export type FloatButtonGroupTrigger = 'click' | 'hover';

export type FloatButtonBadgeProps = Omit<BadgeProps, 'status' | 'text' | 'title' | 'children'>;

export type FloatButtonSemanticType = ButtonSemanticType;

export type FloatButtonSemanticAllType = GenerateSemantic<
  FloatButtonSemanticType,
  FloatButtonProps
>;

export interface FloatButtonProps extends React.DOMAttributes<FloatButtonElement> {
  // Style
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  classNames?: FloatButtonSemanticAllType['classNamesAndFn'];
  styles?: FloatButtonSemanticAllType['stylesAndFn'];

  // Others
  icon?: React.ReactNode;
  /** @deprecated Please use `content` instead. */
  description?: React.ReactNode;
  content?: React.ReactNode;
  type?: FloatButtonType;
  shape?: FloatButtonShape;
  tooltip?: React.ReactNode | TooltipProps;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  badge?: FloatButtonBadgeProps;
  disabled?: boolean;
  /**
   * @since 5.21.0
   * @default button
   */
  htmlType?: ButtonHTMLType;
  'aria-label'?: React.HtmlHTMLAttributes<HTMLElement>['aria-label'];
}

export const floatButtonPrefixCls = 'float-btn';

const InternalFloatButton = React.forwardRef<FloatButtonElement, FloatButtonProps>((props, ref) => {
    throw new Error("STUB");
});

type CompoundedComponent = typeof InternalFloatButton & {
  Group: typeof FloatButtonGroup;
  BackTop: typeof BackTop;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};

const FloatButton = InternalFloatButton as CompoundedComponent;

if (process.env.NODE_ENV !== 'production') {
  FloatButton.displayName = 'FloatButton';
}

export default FloatButton;
