import * as React from 'react';
import { flushSync } from 'react-dom';
import type { UploadProps as RcUploadProps } from '@rc-component/upload';
import RcUpload from '@rc-component/upload';
import { useControlledState } from '@rc-component/util';
import { clsx } from 'clsx';

import fallbackProp from '../_util/fallbackProp';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import { isFunction, isPlainObject } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';
import type {
  RcFile,
  ShowUploadListInterface,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from './interface';
import useStyle from './style';
import UploadList from './UploadList';
import { file2Obj, getFileItem, removeFileItem, updateFileList } from './utils';

export const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`;

export type { UploadProps };

export interface UploadRef<T = any> {
  onBatchStart: RcUploadProps['onBatchStart'];
  onSuccess: (response: any, file: RcFile, xhr: any) => void;
  onProgress: (e: { percent: number }, file: RcFile) => void;
  onError: (error: Error, response: any, file: RcFile) => void;
  fileList: UploadFile<T>[];
  upload: RcUpload | null;
  /**
   * Get native element for wrapping upload
   * @since 5.17.0
   */
  nativeElement: HTMLSpanElement | null;
}

const InternalUpload: React.ForwardRefRenderFunction<UploadRef, UploadProps> = (props, ref) => {
    throw new Error("STUB");
};

const Upload = React.forwardRef<UploadRef, UploadProps>(InternalUpload);

if (process.env.NODE_ENV !== 'production') {
  Upload.displayName = 'Upload';
}

export default Upload;
