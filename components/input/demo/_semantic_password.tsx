import React from 'react';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素',
    input: '输入框元素',
    prefix: '前缀的包裹元素',
    suffix: '后缀的包裹元素',
    clear: '清除按钮元素',
    count: '文字计数元素',
  },
  en: {
    root: 'root element',
    input: 'input element',
    prefix: 'prefix element',
    suffix: 'suffix element',
    clear: 'clear button element',
    count: 'count element',
  },
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
