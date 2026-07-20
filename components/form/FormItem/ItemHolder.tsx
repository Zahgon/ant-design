import * as React from 'react';
import type { Meta } from '@rc-component/form';
import { isVisible, omit, useLayoutEffect } from '@rc-component/util';
import { clsx } from 'clsx';

import type { FormItemProps } from '.';
import { isNonNullable } from '../../_util/is';
import { Row } from '../../grid';
import type { ReportMetaChange } from '../context';
import { FormContext, NoStyleItemContext } from '../context';
import FormItemInput from '../FormItemInput';
import FormItemLabel from '../FormItemLabel';
import useDebounce from '../hooks/useDebounce';
import { getStatus } from '../util';
import StatusProvider from './StatusProvider';

export interface ItemHolderProps extends FormItemProps {
  prefixCls: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  errors: React.ReactNode[];
  warnings: React.ReactNode[];
  meta: Meta;
  children?: React.ReactNode;
  fieldId?: string;
  isRequired?: boolean;
  onSubItemMetaChange: ReportMetaChange;
}

export default function ItemHolder(props: ItemHolderProps) {
    throw new Error("STUB");
}
