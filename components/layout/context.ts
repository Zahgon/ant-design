import * as React from 'react';

export interface LayoutContextProps {
  siderHook: {
    addSider: (id: string) => void;
    removeSider: (id: string) => void;
  };
}

export const LayoutContext = React.createContext<LayoutContextProps>({
  siderHook: {
    addSider: () => { throw new Error("STUB"); },
    removeSider: () => { throw new Error("STUB"); },
  },
});
