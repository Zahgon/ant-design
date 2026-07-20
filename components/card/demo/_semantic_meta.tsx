import React from 'react';
import { Avatar, Card } from 'antd';

import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const { Meta } = Card;

const locales = {
  cn: {
    root: '设置元信息根元素',
    section: '设置元信息内容元素',
    avatar: '设置元信息图标',
    title: '设置元信息标题',
    description: '设置元信息描述',
  },
  en: {
    root: 'set `root` of Card.Meta',
    section: 'set `section` of Card.Meta',
    avatar: 'set `avatar` of Card.Meta',
    title: 'set `title` of Card.Meta',
    description: 'set `description` of Card.Meta',
  },
};

const BlockCard: React.FC<React.PropsWithChildren> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
