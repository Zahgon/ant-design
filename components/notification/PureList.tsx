import * as React from 'react';
import { NotificationList } from '@rc-component/notification';
import type { NotificationListConfig } from '@rc-component/notification';
import { clsx } from 'clsx';

import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { IconType, NotificationPlacement, NotificationSemanticAllType } from './interface';
import { getCloseIcon, TypeIcon } from './PurePanel';
import useStyle from './style';

interface PureListItem {
  key: React.Key;
  title: React.ReactNode;
  description: React.ReactNode;
  type: IconType;
  actions?: React.ReactNode;
  duration?: number | false;
  showProgress?: boolean;
}

export interface PureListProps {
  items: PureListItem[];
  placement?: NotificationPlacement;
  classNames?: NotificationSemanticAllType['classNames'];
  style?: React.CSSProperties;
}

/** @private Internal Component. Do not use in your production. */
const PureList: React.FC<PureListProps> = (props) => {
    throw new Error("STUB");
};

export default PureList;
