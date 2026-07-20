import * as React from 'react';
import { KeyCode } from '@rc-component/util';

export interface FilterDropdownMenuWrapperProps {
  className?: string;
}

const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
  const { keyCode } = event;
  if (keyCode === KeyCode.ENTER) {
    event.stopPropagation();
  }
};

const FilterDropdownMenuWrapper = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<FilterDropdownMenuWrapperProps>
>((props, ref) => { throw new Error("STUB"); });

if (process.env.NODE_ENV !== 'production') {
  FilterDropdownMenuWrapper.displayName = 'FilterDropdownMenuWrapper';
}

export default FilterDropdownMenuWrapper;
