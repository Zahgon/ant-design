import React from 'react';
import { Card, Masonry } from 'antd';

import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素，设置相对定位、flex布局和瀑布流容器样式',
    item: '条目元素，设置绝对定位、宽度计算、过渡动画和瀑布流项目样式',
  },
  en: {
    root: 'Root element, sets relative positioning, flex layout and masonry container styles',
    item: 'Item element, sets absolute positioning, width calculation, transition animation and masonry item styles',
  },
};

const heights = [75, 50, 70, 60, 85, 75, 50].map((height, index) => { throw new Error("STUB"); });

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
