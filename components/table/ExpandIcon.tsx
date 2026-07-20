import * as React from 'react';
import { clsx } from 'clsx';

import type { AnyObject } from '../_util/type';
import type { TableLocale } from './interface';

interface DefaultExpandIconProps<RecordType = AnyObject> {
  prefixCls: string;
  record: RecordType;
  expanded: boolean;
  expandable: boolean;
  onExpand: (record: RecordType, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function renderExpandIcon(locale: TableLocale) {
  return <RecordType extends AnyObject = AnyObject>(props: DefaultExpandIconProps<RecordType>) => {
      throw new Error("STUB");
  };
}

export default renderExpandIcon;
