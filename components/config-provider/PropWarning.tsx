import * as React from 'react';

import { devUseWarning } from '../_util/warning';

export interface PropWarningProps {
  dropdownMatchSelectWidth?: boolean;
}

/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */
const PropWarning = React.memo<PropWarningProps>((props) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  PropWarning.displayName = 'PropWarning';
}

export default process.env.NODE_ENV !== 'production' ? PropWarning : () => { throw new Error("STUB"); };
