import React, { useContext } from 'react';

import type { ConfigConsumerProps } from '.';
import { ConfigContext } from '.';
import Empty from '../empty';

type ComponentName =
  | 'Table'
  | 'Table.filter' /* 👈 5.20.0+ */
  | 'List'
  | 'Select'
  | 'TreeSelect'
  | 'Cascader'
  | 'Transfer'
  | 'Mentions';

interface EmptyProps {
  componentName?: ComponentName;
}

const DefaultRenderEmpty: React.FC<EmptyProps> = (props) => {
    throw new Error("STUB");
};

export type RenderEmptyHandler = (componentName?: ComponentName) => React.ReactNode;

export default DefaultRenderEmpty;
