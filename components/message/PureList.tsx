import * as React from 'react';
import { NotificationList } from '@rc-component/notification';
import type { NotificationListConfig } from '@rc-component/notification';
import { clsx } from 'clsx';

import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { MessageSemanticAllType, NoticeType } from './interface';
import { getMessageIcon } from './PurePanel';
import useStyle from './style';

interface PureListItem {
  key: React.Key;
  content: React.ReactNode;
  type: NoticeType;
  duration?: number | false;
}

export interface PureListProps {
  items: PureListItem[];
  classNames?: MessageSemanticAllType['classNames'];
  style?: React.CSSProperties;
}

/** @private Internal Component. Do not use in your production. */
const PureList: React.FC<PureListProps> = (props) => {
    throw new Error("STUB");
};

export default PureList;
