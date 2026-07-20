import React from 'react';
import { Button, Modal, Space, Typography } from 'antd';
import type { ModalFuncProps } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Modal;

const customFooterFn: ModalFuncProps['footer'] = (originNode, { OkBtn, CancelBtn }) => { throw new Error("STUB"); };

export default () => { throw new Error("STUB"); };
