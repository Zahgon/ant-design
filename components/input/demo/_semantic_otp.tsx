import React from 'react';
import { Input } from 'antd';

import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素，设置行内flex布局、对齐方式、列间距和包装样式',
    input: '输入框元素，设置文本居中、内边距和数字输入样式',
    separator: '分隔符元素，设置OTP输入框之间的分隔符显示样式',
  },
  en: {
    root: 'Root element, set inline flex layout, alignment, column gap and wrapper styles',
    input: 'Input element, set text center, padding and number input styles',
    separator: 'Separator element, set separator display styles between OTP input boxes',
  },
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
