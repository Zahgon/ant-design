import * as React from 'react';
import EnterOutlined from '@ant-design/icons/EnterOutlined';
import type { TextAreaProps } from '@rc-component/input';
import { KeyCode } from '@rc-component/util';
import { clsx } from 'clsx';

import { cloneElement } from '../_util/reactNode';
import type { GetProp } from '../_util/type';
import type { DirectionType } from '../config-provider';
import type { TextAreaRef } from '../input/TextArea';
import TextArea from '../input/TextArea';
import useStyle from './style';
import type { TypographyProps } from './Typography';

interface EditableProps {
  prefixCls: string;
  value: string;
  'aria-label'?: string;
  onSave: (value: string) => void;
  onCancel: () => void;
  onEnd?: () => void;
  className?: string;
  style?: React.CSSProperties;
  direction?: DirectionType;
  maxLength?: number;
  autoSize?: TextAreaProps['autoSize'];
  enterIcon?: React.ReactNode;
  component?: string;
  classNames: NonNullable<GetProp<TypographyProps, 'classNames', 'Return'>>;
  styles: NonNullable<GetProp<TypographyProps, 'styles', 'Return'>>;
}

const Editable: React.FC<EditableProps> = (props) => {
    throw new Error("STUB");
};

export default Editable;
