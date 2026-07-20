import * as React from 'react';

import { usePatchElement } from '../../_util/hooks';
import type { ModalFunc, ModalStaticFunctions } from '../confirm';
import { withConfirm, withError, withInfo, withSuccess, withWarn } from '../confirm';
import destroyFns from '../destroyFns';
import type { ModalFuncProps } from '../interface';
import type { HookModalRef } from './HookModal';
import HookModal from './HookModal';

let uuid = 0;

interface ElementsHolderRef {
  patchElement: ReturnType<typeof usePatchElement>[1];
}

// Add `then` field for `ModalFunc` return instance.
export type ModalFuncWithPromise = (...args: Parameters<ModalFunc>) => ReturnType<ModalFunc> & {
  then: <T>(resolve: (confirmed: boolean) => T, reject: VoidFunction) => Promise<T>;
};

export type HookAPI = Omit<Record<keyof ModalStaticFunctions, ModalFuncWithPromise>, 'warn'>;

const ElementsHolder = React.memo(
  React.forwardRef<ElementsHolderRef>((_props, ref) => {
      throw new Error("STUB");
  }),
);

function useModal(): readonly [instance: HookAPI, contextHolder: React.ReactElement] {
  const holderRef = React.useRef<ElementsHolderRef>(null);

  // ========================== Effect ==========================
  const [actionQueue, setActionQueue] = React.useState<VoidFunction[]>([]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [actionQueue]);

  // =========================== Hook ===========================
  const getConfirmFunc = React.useCallback(
    (withFunc: (config: ModalFuncProps) => ModalFuncProps) =>
      { throw new Error("STUB"); },
    [],
  );

  const fns = React.useMemo<HookAPI>(
    () => { throw new Error("STUB"); },
    [getConfirmFunc],
  );
  return [fns, <ElementsHolder key="modal-holder" ref={holderRef} />] as const;
}

export default useModal;
