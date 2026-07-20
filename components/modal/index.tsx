import type { ModalStaticFunctions } from './confirm';
import confirm, {
  modalGlobalConfig,
  withConfirm,
  withError,
  withInfo,
  withSuccess,
  withWarn,
} from './confirm';
import destroyFns from './destroyFns';
import type { ModalFuncProps } from './interface';
import OriginModal from './Modal';
import PurePanel from './PurePanel';
import useModal from './useModal';

export type { ModalFuncProps, ModalLocale, ModalProps } from './interface';

function modalWarn(props: ModalFuncProps) {
    throw new Error("STUB");
}

type ModalType = typeof OriginModal &
  ModalStaticFunctions & {
    useModal: typeof useModal;
    destroyAll: () => void;
    config: typeof modalGlobalConfig;
    /** @private Internal Component. Do not use in your production. */
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
  };

const Modal = OriginModal as ModalType;

Modal.useModal = useModal;

Modal.info = function infoFn(props: ModalFuncProps) {
    throw new Error("STUB");
};

Modal.success = function successFn(props: ModalFuncProps) {
    throw new Error("STUB");
};

Modal.error = function errorFn(props: ModalFuncProps) {
    throw new Error("STUB");
};

Modal.warning = modalWarn;

Modal.warn = modalWarn;

Modal.confirm = function confirmFn(props: ModalFuncProps) {
    throw new Error("STUB");
};

Modal.destroyAll = function destroyAllFn() {
    throw new Error("STUB");
};

Modal.config = modalGlobalConfig;

Modal._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

if (process.env.NODE_ENV !== 'production') {
  Modal.displayName = 'Modal';
}

export default Modal;
