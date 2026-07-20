import React from 'react';
import { clsx } from 'clsx';

import { isNumber, isReactRenderable, isString } from '../_util/is';
import { cloneElement, isFragment } from '../_util/reactNode';
import { PresetColors } from '../theme/interface';
import type { BaseButtonProps, LegacyButtonType } from './Button';

const rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;

export const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

export function convertLegacyProps(
  type?: LegacyButtonType,
): Pick<BaseButtonProps, 'danger' | 'type'> {
  if (type === 'danger') {
    return { danger: true };
  }
  return { type };
}

export function isUnBorderedButtonVariant(type?: ButtonVariantType) {
  return type === 'text' || type === 'link';
}

function splitCNCharsBySpace(
  child: React.ReactElement<any> | string | number,
  needInserted: boolean,
  style?: React.CSSProperties,
  className?: string,
) {
  if (!isReactRenderable(child)) {
    return;
  }

  const SPACE = needInserted ? ' ' : '';

  if (
    !isString(child) &&
    !isNumber(child) &&
    isString(child.type) &&
    isTwoCNChar((child as React.ReactElement<{ children: string }>).props.children)
  ) {
    return cloneElement(child, (oriProps) => {
        throw new Error("STUB");
    });
  }

  if (isString(child)) {
    return (
      <span className={className} style={style}>
        {isTwoCNChar(child) ? child.split('').join(SPACE) : child}
      </span>
    );
  }

  if (isFragment(child)) {
    return (
      <span className={className} style={style}>
        {child}
      </span>
    );
  }

  return cloneElement(child, (oriProps) => { throw new Error("STUB"); });
}

export function spaceChildren(
  children: React.ReactNode,
  needInserted: boolean,
  style?: React.CSSProperties,
  className?: string,
) {
  let isPrevChildPure = false;
  const childList: React.ReactNode[] = [];
  React.Children.forEach(children, (child) => {
      throw new Error("STUB");
  });

  return React.Children.map(childList, (child) =>
    { throw new Error("STUB"); },
  );
}

const _ButtonTypes = ['default', 'primary', 'dashed', 'link', 'text'] as const;
export type ButtonType = (typeof _ButtonTypes)[number];

const _ButtonShapes = ['default', 'circle', 'round', 'square'] as const;
export type ButtonShape = (typeof _ButtonShapes)[number];

const _ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = (typeof _ButtonHTMLTypes)[number];

export const _ButtonVariantTypes = [
  'outlined',
  'dashed',
  'solid',
  'filled',
  'text',
  'link',
] as const;
export type ButtonVariantType = (typeof _ButtonVariantTypes)[number];

export const _ButtonColorTypes = ['default', 'primary', 'danger', ...PresetColors] as const;

export type ButtonColorType = (typeof _ButtonColorTypes)[number];
