import type { ReactNode } from 'react';
import React, { useContext } from 'react';
import { clsx } from 'clsx';

import type { AnyObject, CustomComponent } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useMessage from '../message/useMessage';
import useModal from '../modal/useModal';
import useNotification from '../notification/useNotification';
import type { AppConfig, useAppProps } from './context';
import AppContext, { AppConfigContext } from './context';
import useStyle from './style';

export interface AppProps<P = AnyObject> extends AppConfig {
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  prefixCls?: string;
  children?: ReactNode;
  component?: CustomComponent<P> | false;
}

const App = React.forwardRef<HTMLElement, AppProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  App.displayName = 'App';
}

export default App;
