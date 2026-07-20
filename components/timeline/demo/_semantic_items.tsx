import React from 'react';
import { Timeline } from 'antd';

import useLocale from '../../../.dumi/hooks/useLocale';
import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';
import type { SemanticPreviewInjectionProps } from '../../../.dumi/theme/common/SemanticPreview';

const locales = {
  cn: {
    root: '根元素',
    wrapper: '节点内裹元素',
    icon: '节点图标元素',
    header: '节点头部元素',
    title: '节点标题元素',
    section: '节点区域元素',
    content: '节点内容元素',
    rail: '节点连接线元素',
  },
  en: {
    root: 'Root element',
    wrapper: 'Item wrapper element',
    icon: 'Item icon element',
    header: 'Item header element',
    title: 'Item title element',
    section: 'Item section element',
    content: 'Item content element',
    rail: 'Item rail element',
  },
};

const Block = ({ classNames }: SemanticPreviewInjectionProps) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
