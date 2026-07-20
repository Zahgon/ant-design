import React from 'react';
import { Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';

import useLocale from '../../../.dumi/hooks/useLocale';
import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';

const locales = {
  cn: {
    root: '根元素，设置绝对定位、层级、变换原点、箭头指向和弹层容器样式',
    container: '容器元素，设置背景色、内边距、圆角、阴影、边框和内容展示样式',
    icon: '图标元素，设置确认图标的尺寸、颜色和布局样式',
    arrow: '箭头元素，设置宽高、位置、颜色和边框样式',
    title: '标题元素，设置标题文本样式和间距',
    content: '描述元素，设置描述文本样式和布局',
  },
  en: {
    root: 'Root element, set absolute positioning, z-index, transform origin, arrow direction and popover container styles',
    container:
      'Container element, set background color, padding, border radius, shadow, border and content display styles',
    icon: 'Icon element, set the confirmation icon size, color and layout styles',
    arrow: 'Arrow element with width, height, position, color and border styles',
    title: 'Title element, set title text styles and spacing',
    content: 'Description element, set content text styles and layout',
  },
};

const BlockList: React.FC<React.PropsWithChildren<PopconfirmProps>> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
