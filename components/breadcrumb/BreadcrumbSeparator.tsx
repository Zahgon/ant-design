import * as React from 'react';
import { clsx } from 'clsx';

import { ConfigContext } from '../config-provider';
import BreadcrumbContext from './BreadcrumbContext';

type CompoundedComponent = React.FC<React.PropsWithChildren> & {
  /** @internal */
  __ANT_BREADCRUMB_SEPARATOR: boolean;
};

const BreadcrumbSeparator: CompoundedComponent = ({ children }) => {
    throw new Error("STUB");
};

BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;

export default BreadcrumbSeparator;
