import React from 'react';
import { Tooltip } from 'antd';
import type { TooltipProps } from 'antd';

import useLocale from '../../../.dumi/hooks/useLocale';
import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';

const locales = {
  cn: {
    root: '根元素 (包含箭头、内容元素)，设置绝对定位、层级、块级显示、最大宽度、可见性、变换原点和箭头背景色',
    container: '内容元素，设置最小宽度高度、内边距、颜色、文本对齐、背景色、圆角、阴影和边框样式',
    arrow: '箭头元素，设置宽高、位置、颜色和边框样式',
  },
  en: {
    root: 'Root element (including arrows, content elements) with absolute positioning, z-index, block display, max width, visibility, transform origin and arrow background color',
    container:
      'Content element with min width and height, padding, color, text alignment, background color, border radius, shadow and border styles',
    arrow: 'Arrow element with width, height, position, color and border styles',
  },
};

const BlockList: React.FC<React.PropsWithChildren<TooltipProps>> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
