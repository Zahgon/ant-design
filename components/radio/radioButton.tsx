import * as React from 'react';

import type { AbstractCheckboxProps } from '../checkbox/Checkbox';
import { ConfigContext } from '../config-provider';
import { RadioOptionTypeContextProvider } from './context';
import type { RadioChangeEvent, RadioRef } from './interface';
import Radio from './radio';

export type RadioButtonProps = AbstractCheckboxProps<RadioChangeEvent>;

const RadioButton: React.ForwardRefRenderFunction<RadioRef, RadioButtonProps> = (props, ref) => {
    throw new Error("STUB");
};

export default React.forwardRef<RadioRef, RadioButtonProps>(RadioButton);
