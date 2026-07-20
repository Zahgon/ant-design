import React from 'react';
import { Splitter } from 'antd';
import type { SplitterProps } from 'antd';

import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';
import { Desc } from './size';

const locales = {
  cn: {
    root: '根元素，设置flex布局、宽度高度、对齐方式和拉伸样式',
    panel: '面板元素，设置flex基础值、增长比例和面板容器样式',
    dragger: '拖拽控制元素，设置绝对定位、用户选择、层级、居中对齐、背景色、悬停态和激活态样式',
  },
  en: {
    root: 'Root element with flex layout, width and height, alignment and stretch styles',
    panel: 'Panel element with flex basis, grow ratio and panel container styles',
    dragger:
      'Drag control element with absolute positioning, user selection, z-index, center alignment, background color, hover and active states styles',
  },
};

const Block: React.FC<Readonly<SplitterProps>> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
