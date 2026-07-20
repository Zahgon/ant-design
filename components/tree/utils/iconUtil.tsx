import * as React from 'react';
import CaretDownFilled from '@ant-design/icons/CaretDownFilled';
import FileOutlined from '@ant-design/icons/FileOutlined';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import MinusSquareOutlined from '@ant-design/icons/MinusSquareOutlined';
import PlusSquareOutlined from '@ant-design/icons/PlusSquareOutlined';
import { clsx } from 'clsx';

import { isFunction, isPlainObject } from '../../_util/is';
import { cloneElement } from '../../_util/reactNode';
import type { AntTreeNodeProps, SwitcherIcon, TreeLeafIcon } from '../Tree';

interface SwitcherIconProps {
  prefixCls: string;
  treeNodeProps: AntTreeNodeProps;
  switcherIcon?: SwitcherIcon;
  switcherLoadingIcon?: React.ReactNode;
  showLine?: boolean | { showLeafIcon: boolean | TreeLeafIcon };
}

const SwitcherIconCom: React.FC<SwitcherIconProps> = (props) => {
    throw new Error("STUB");
};

export default SwitcherIconCom;
