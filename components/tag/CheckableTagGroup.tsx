import React, { useImperativeHandle, useMemo } from 'react';
import type { ReactNode } from 'react';
import { pickAttrs, useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { isPlainObject } from '../_util/is';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import CheckableTag from './CheckableTag';
import useStyle from './style';

export type CheckableTagOption<CheckableTagValue> = {
  value: CheckableTagValue;
  label: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

interface CheckableTagGroupSingleProps<CheckableTagValue> {
  multiple?: false;
  value?: CheckableTagValue | null;
  defaultValue?: CheckableTagValue | null;
  onChange?: (value: CheckableTagValue | null) => void;
}

interface CheckableTagGroupMultipleProps<CheckableTagValue> {
  multiple: true;
  value?: CheckableTagValue[];
  defaultValue?: CheckableTagValue[];
  onChange?: (value: CheckableTagValue[]) => void;
}

export type CheckableTagGroupSemanticType = {
  classNames?: {
    root?: string;
    item?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
  };
};

export type CheckableTagGroupSemanticAllType = GenerateSemantic<
  CheckableTagGroupSemanticType,
  CheckableTagGroupBaseProps<any>
>;

type CheckableTagGroupBaseProps<CheckableTagValue> = {
  // style
  prefixCls?: string;
  rootClassName?: string;
  options?: (CheckableTagOption<CheckableTagValue> | CheckableTagValue)[];
  disabled?: boolean;
} & (
  | CheckableTagGroupSingleProps<CheckableTagValue>
  | CheckableTagGroupMultipleProps<CheckableTagValue>
) &
  Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style' | 'id' | 'role'> & {
    [key: `data-${string}`]: any;
    [key: `aria-${string}`]: any;
  };

export type CheckableTagGroupProps<CheckableTagValue = any> =
  CheckableTagGroupBaseProps<CheckableTagValue> & {
    classNames?: CheckableTagGroupSemanticAllType['classNamesAndFn'];
    styles?: CheckableTagGroupSemanticAllType['stylesAndFn'];
  };

export interface CheckableTagGroupRef {
  nativeElement: HTMLDivElement;
}

type CheckableTagValue = string | number;

const CheckableTagGroup = React.forwardRef<
  CheckableTagGroupRef,
  CheckableTagGroupProps<CheckableTagValue>
>((props, ref) => {
    throw new Error("STUB");
}) as (<CheckableTagValue extends string | number>(
  props: CheckableTagGroupProps<CheckableTagValue> & { ref?: React.Ref<CheckableTagGroupRef> },
) => React.ReactElement<any>) & { displayName?: string };

if (process.env.NODE_ENV !== 'production') {
  CheckableTagGroup.displayName = 'CheckableTagGroup';
}

export default CheckableTagGroup;
