import React from 'react';
import { clsx } from 'clsx';

import type { PreviewConfig } from '..';
import { useMergedMask, useZIndex } from '../../_util/hooks';
import type { MaskType } from '../../_util/hooks';
import { getTransitionName } from '../../_util/motion';
import type { GroupPreviewConfig } from '../PreviewGroup';

const useMergedPreviewConfig = <T extends PreviewConfig | GroupPreviewConfig>(
  previewConfig: T,
  contextPreviewConfig: T,
  prefixCls: string,
  mergedRootClassName: string,
  getContextPopupContainer: PreviewConfig['getContainer'],
  icons: PreviewConfig['icons'],
  defaultCover?: React.ReactNode,
): T & { blurClassName?: string; maskClosable?: boolean } => {
  const [zIndex] = useZIndex('ImagePreview', previewConfig?.zIndex);
  const [mergedPreviewMask, blurClassName, mergedMaskClosable] = useMergedMask(
    previewConfig?.mask as MaskType,
    contextPreviewConfig?.mask as MaskType,
    `${prefixCls}-preview`,
  );

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [
    previewConfig,
    contextPreviewConfig,
    prefixCls,
    mergedRootClassName,
    getContextPopupContainer,
    defaultCover,
    icons,
    zIndex,
    mergedPreviewMask,
    mergedMaskClosable,
    blurClassName,
  ]);
};

export default useMergedPreviewConfig;
