import * as React from 'react';
import type { JSX } from 'react';
import EditOutlined from '@ant-design/icons/EditOutlined';
import type { AutoSizeType } from '@rc-component/input';
import ResizeObserver from '@rc-component/resize-observer';
import { composeRef, omit, toArray, useControlledState, useLayoutEffect } from '@rc-component/util';
import { clsx } from 'clsx';

import type { GenerateSemantic } from '../../_util/hooks/useMergeSemantic/semanticType';
import { isFunction, isReactRenderable } from '../../_util/is';
import { isStyleSupport } from '../../_util/styleChecker';
import type { DirectionType } from '../../config-provider';
import useLocale from '../../locale/useLocale';
import type { TooltipProps } from '../../tooltip';
import Tooltip from '../../tooltip';
import Editable from '../Editable';
import useCopyClick from '../hooks/useCopyClick';
import useMergedConfig from '../hooks/useMergedConfig';
import usePrevious from '../hooks/usePrevious';
import useTooltipProps from '../hooks/useTooltipProps';
import { useTypographySemantic } from '../hooks/useTypographySemantic';
import type { TypographyProps } from '../Typography';
import { InternalTypography } from '../Typography';
import CopyBtn from './CopyBtn';
import Ellipsis from './Ellipsis';
import EllipsisTooltip from './EllipsisTooltip';
import { isEleEllipsis, isValidText } from './util';

export type BaseType = 'secondary' | 'success' | 'warning' | 'danger';

export type TypographySemanticType = {
  classNames?: {
    root?: string;
    actions?: string;
    action?: string;
    textarea?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    actions?: React.CSSProperties;
    action?: React.CSSProperties;
    textarea?: React.CSSProperties;
  };
};

export interface BaseTypographyProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  classNames?: TypographySemanticAllType['classNamesAndFn'];
  styles?: TypographySemanticAllType['stylesAndFn'];
  children?: React.ReactNode;
  'aria-label'?: string;
  direction?: DirectionType;
  /** @private */
  component?: keyof JSX.IntrinsicElements;
}

export type TypographySemanticAllType = GenerateSemantic<
  TypographySemanticType,
  BaseTypographyProps
>;

export interface CopyConfig {
  text?: string | (() => string | Promise<string>);
  onCopy?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  tooltips?: React.ReactNode;
  format?: 'text/plain' | 'text/html';
  tabIndex?: number;
}

export interface ActionsConfig {
  placement?: 'start' | 'end';
}

interface EditConfig {
  text?: string;
  editing?: boolean;
  icon?: React.ReactNode;
  tooltip?: React.ReactNode;
  onStart?: () => void;
  onChange?: (value: string) => void;
  onCancel?: () => void;
  onEnd?: () => void;
  maxLength?: number;
  autoSize?: boolean | AutoSizeType;
  triggerType?: ('icon' | 'text')[];
  enterIcon?: React.ReactNode;
  tabIndex?: number;
}

export interface EllipsisConfig {
  rows?: number;
  expandable?: boolean | 'collapsible';
  suffix?: string;
  symbol?: React.ReactNode | ((expanded: boolean) => React.ReactNode);
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpand?: (e: React.MouseEvent<HTMLElement, MouseEvent>, info: { expanded: boolean }) => void;
  onEllipsis?: (ellipsis: boolean) => void;
  tooltip?: React.ReactNode | TooltipProps;
}

export interface BlockProps<
  C extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements,
> extends TypographyProps<C> {
  /**
   * @since 6.4.0
   */
  actions?: ActionsConfig;
  title?: string;
  editable?: boolean | EditConfig;
  copyable?: boolean | CopyConfig;
  type?: BaseType;
  disabled?: boolean;
  ellipsis?: boolean | EllipsisConfig;
  // decorations
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
  italic?: boolean;
}

function wrapperDecorations(
  { mark, code, underline, delete: del, strong, keyboard, italic }: BlockProps,
  content: React.ReactNode,
) {
  let currentContent = content;

  function wrap(tag: string, needed?: boolean) {
    if (!needed) {
      return;
    }

    currentContent = React.createElement(tag, {}, currentContent);
  }

  wrap('strong', strong);
  wrap('u', underline);
  wrap('del', del);
  wrap('code', code);
  wrap('mark', mark);
  wrap('kbd', keyboard);
  wrap('i', italic);

  return currentContent;
}

const ELLIPSIS_STR = '...';

const DECORATION_PROPS = [
  'delete',
  'mark',
  'code',
  'underline',
  'strong',
  'keyboard',
  'italic',
] as const;

const Base = React.forwardRef<HTMLElement, BlockProps>((props, ref) => {
    throw new Error("STUB");
});

export default Base;
