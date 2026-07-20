import React from 'react';
import { Divider } from 'antd';
import type { DividerProps } from 'antd';

import useLocale from '../../../.dumi/hooks/useLocale';
import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';

const locales = {
  cn: {
    root: '根元素，包含边框顶部样式、分隔线样式等分割线容器的基础样式',
    content: '内容元素，包含行内块显示、内边距等分割线文本内容的样式',
    rail: '背景条元素，包含边框顶部样式等分割线连接条的样式',
  },
  en: {
    root: 'Root element with border-top style, divider styling and other basic divider container styles',
    content:
      'Content element with inline-block display, padding and other divider text content styles',
    rail: 'Background rail element with border-top style and other divider connection line styles',
  },
};

const Block: React.FC<DividerProps> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
