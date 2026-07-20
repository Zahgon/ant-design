import * as React from 'react';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import CSSMotion from '@rc-component/motion';
import { clsx } from 'clsx';

import { isFunction } from '../../_util/is';
import { ConfigContext } from '../../config-provider';
import Progress from '../../progress';
import Tooltip from '../../tooltip';
import type {
  ItemRender,
  UploadFile,
  UploadListProgressProps,
  UploadListType,
  UploadLocale,
  UploadSemanticAllType,
} from '../interface';

export interface ListItemProps {
  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  classNames?: UploadSemanticAllType['classNames'];
  styles?: UploadSemanticAllType['styles'];
  locale: UploadLocale;
  file: UploadFile;
  items: UploadFile[];
  listType?: UploadListType;
  isImgUrl?: (file: UploadFile) => boolean;
  showRemoveIcon?: boolean | ((file: UploadFile) => boolean);
  showDownloadIcon?: boolean | ((file: UploadFile) => boolean);
  showPreviewIcon?: boolean | ((file: UploadFile) => boolean);
  removeIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
  downloadIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
  previewIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
  extra?: React.ReactNode | ((file: UploadFile) => React.ReactNode);
  iconRender: (file: UploadFile) => React.ReactNode;
  actionIconRender: (
    customIcon: React.ReactNode,
    callback: () => void,
    prefixCls: string,
    title?: string,
    acceptUploadDisabled?: boolean,
  ) => React.ReactNode;
  itemRender?: ItemRender;
  onPreview: (file: UploadFile, e: React.SyntheticEvent<HTMLElement>) => void;
  onClose: (file: UploadFile) => void;
  onDownload: (file: UploadFile) => void;
  progress?: UploadListProgressProps;
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      prefixCls,
      className,
      style,
      classNames: itemClassNames,
      styles,
      locale,
      listType,
      file,
      items,
      progress: progressProps,
      iconRender,
      actionIconRender,
      itemRender,
      isImgUrl,
      showPreviewIcon,
      showRemoveIcon,
      showDownloadIcon,
      previewIcon: customPreviewIcon,
      removeIcon: customRemoveIcon,
      downloadIcon: customDownloadIcon,
      extra: customExtra,
      onPreview,
      onDownload,
      onClose,
    },
    ref,
  ) => {
        throw new Error("STUB");
    },
);

export default ListItem;
