import React from 'react';
import { raf } from '@rc-component/util';

/**
 * When click on the label,
 * the event will be stopped to prevent the label from being clicked twice.
 * label click -> input click -> label click again
 */
export default function useBubbleLock(
  onOriginInputClick?: React.MouseEventHandler<HTMLInputElement>,
) {
  const labelClickLockRef = React.useRef<number | null>(null);

  const clearLock = () => {
    raf.cancel(labelClickLockRef.current!);
    labelClickLockRef.current = null;
  };

  const onLabelClick: React.MouseEventHandler<HTMLLabelElement> = () => {
      throw new Error("STUB");
  };

  const onInputClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
      throw new Error("STUB");
  };

  return [onLabelClick, onInputClick] as const;
}
