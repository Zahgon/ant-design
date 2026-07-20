import React from 'react';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';

import Button from '../button/Button';
import type { DirectionType } from '../config-provider';

export interface TransferOperationProps {
  className?: string;
  actions: React.ReactNode[];
  moveToLeft?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  moveToRight?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  leftActive?: boolean;
  rightActive?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  direction?: DirectionType;
  oneWay?: boolean;
}

type ButtonElementType = React.ReactElement<{
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}>;

function getArrowIcon(type: 'left' | 'right', direction?: DirectionType) {
  const isRight = type === 'right';
  if (direction !== 'rtl') {
    return isRight ? <RightOutlined /> : <LeftOutlined />;
  }
  return isRight ? <LeftOutlined /> : <RightOutlined />;
}

interface ActionProps {
  type: 'left' | 'right';
  actions: React.ReactNode[];
  moveToLeft?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  moveToRight?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  leftActive?: boolean;
  rightActive?: boolean;
  direction?: DirectionType;
  disabled?: boolean;
}

const Action: React.FC<ActionProps> = ({
  type,
  actions,
  moveToLeft,
  moveToRight,
  leftActive,
  rightActive,
  direction,
  disabled,
}) => {
    throw new Error("STUB");
};

const Actions: React.FC<TransferOperationProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Actions.displayName = 'Actions';
}

export default Actions;
