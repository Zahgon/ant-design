import type { ReactNode } from 'react';
import React from 'react';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import { pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import { isReactRenderable } from '../_util/is';
import type { ButtonProps } from '../button/Button';
import Button from '../button/Button';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';
import type { TourProps, TourSemanticAllType, TourStepProps } from './interface';

interface TourPanelProps {
  stepProps: Omit<TourStepProps, 'closable'> & {
    closable?: Exclude<TourStepProps['closable'], boolean>;
  };
  current: number;
  type: TourProps['type'];
  indicatorsRender?: TourProps['indicatorsRender'];
  classNames?: TourSemanticAllType['classNames'];
  styles?: TourSemanticAllType['styles'];
  actionsRender?: TourProps['actionsRender'];
}

// Due to the independent design of Panel, it will be too coupled to put in rc-tour,
// so a set of Panel logic is implemented separately in antd.
const TourPanel: React.FC<TourPanelProps> = (props) => {
    throw new Error("STUB");
};

export default TourPanel;
