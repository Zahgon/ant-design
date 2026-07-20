import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';
import type { StatisticProps } from 'antd';

import useLocale from '../../../.dumi/hooks/useLocale';
import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';

const locales = {
  cn: {
    root: '根元素，包含统计数值组件的重置样式和整体容器样式',
    header: '头部元素，包含下内边距和标题区域的布局样式',
    title: '标题元素，包含文字颜色、字体大小等标题文字的显示样式',
    content: '内容元素，包含前缀、数值、后缀的布局和对齐等内容区域样式',
    value: '数值元素，包含文字颜色、字体大小、字体族等统计数值的展示样式',
    prefix: '前缀元素，包含行内块显示、右外边距等前缀内容的布局样式',
    suffix: '后缀元素，包含行内块显示、左外边距等后缀内容的布局样式',
  },
  en: {
    root: 'Root element with reset styles and overall container styles for statistic component',
    header: 'Header element with bottom padding and title area layout styles',
    title: 'Title element with text color, font size and other title text display styles',
    content:
      'Content element with layout and alignment styles for the prefix, value and suffix area',
    value:
      'Value element with text color, font size, font family and other statistic number display styles',
    prefix:
      'Prefix element with inline-block display, right margin and other prefix content layout styles',
    suffix:
      'Suffix element with inline-block display, left margin and other suffix content layout styles',
  },
};

const BlockList: React.FC<StatisticProps> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
