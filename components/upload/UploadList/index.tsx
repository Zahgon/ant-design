import * as React from 'react';
import FileOutlined from '@ant-design/icons/FileOutlined';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import PaperClipOutlined from '@ant-design/icons/PaperClipOutlined';
import PictureOutlined from '@ant-design/icons/PictureOutlined';
import type { CSSMotionListProps } from '@rc-component/motion';
import CSSMotion, { CSSMotionList } from '@rc-component/motion';
import { omit } from '@rc-component/util';
import { clsx } from 'clsx';

import { useForceUpdate } from '../../_util/hooks';
import { isFunction } from '../../_util/is';
import initCollapseMotion from '../../_util/motion';
import { cloneElement } from '../../_util/reactNode';
import type { ButtonProps } from '../../button/Button';
import Button from '../../button/Button';
import { ConfigContext } from '../../config-provider';
import type { UploadFile, UploadListProps } from '../interface';
import { isImageUrl, previewImage } from '../utils';
import ListItem from './ListItem';

interface UploadListRef {
  handlePreview: (file: UploadFile, e: React.SyntheticEvent<HTMLElement>) => void;
  handleDownload: (file: UploadFile) => void;
}

const InternalUploadList: React.ForwardRefRenderFunction<UploadListRef, UploadListProps> = (
  props,
  ref,
) => {
    throw new Error("STUB");
};

const UploadList = React.forwardRef<UploadListRef, UploadListProps>(InternalUploadList);

if (process.env.NODE_ENV !== 'production') {
  UploadList.displayName = 'UploadList';
}

export default UploadList;
