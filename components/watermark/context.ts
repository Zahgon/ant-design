import * as React from 'react';
import { useEvent } from '@rc-component/util';

export interface WatermarkContextProps {
  add: (ele: HTMLElement) => void;
  remove: (ele: HTMLElement) => void;
}

function voidFunc() {
    throw new Error("STUB");
}

const WatermarkContext = React.createContext<WatermarkContextProps>({
  add: voidFunc,
  remove: voidFunc,
});

export function usePanelRef(panelSelector?: string) {
  const watermark = React.useContext(WatermarkContext);

  const panelEleRef = React.useRef<HTMLElement>(null);
  const panelRef = useEvent((ele: HTMLElement | null) => {
      throw new Error("STUB");
  });

  return panelRef;
}

export default WatermarkContext;
