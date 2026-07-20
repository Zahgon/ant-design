import React from 'react';
import { Badge, Card } from 'antd';
import type { RibbonProps } from 'antd/es/badge/Ribbon';

import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素，设置相对定位和包装容器样式',
    indicator: '指示器元素，设置绝对定位、内边距、背景色、圆角和缎带样式',
    content: '文本元素，设置文本颜色和缎带内容显示样式',
  },
  en: {
    root: 'Root element, set relative positioning and wrapper container styles',
    indicator:
      'Indicator element, set absolute positioning, padding, background color, border radius and ribbon styles',
    content: 'Content element, set text color and ribbon content display styles',
  },
};

const BlockList: React.FC<Readonly<RibbonProps>> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
