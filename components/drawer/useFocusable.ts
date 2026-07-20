import { useMemo } from 'react';

export type OmitFocusType = 'focusTriggerAfterClose' | 'focusTrap' | 'autoFocusButton';

export interface FocusableConfig {
  focusTriggerAfterClose?: boolean;
  trap?: boolean;
}

export default function useFocusable(
  focusable?: FocusableConfig,
  defaultTrap?: boolean,
  legacyFocusTriggerAfterClose?: FocusableConfig['focusTriggerAfterClose'],
) {
  return useMemo(() => {
      throw new Error("STUB");
  }, [focusable, defaultTrap, legacyFocusTriggerAfterClose]);
}
