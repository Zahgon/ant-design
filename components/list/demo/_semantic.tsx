import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

import useLocale from '../../../.dumi/hooks/useLocale';
import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';

const locales = {
  cn: {
    extra: '设置额外内容',
    actions: '设置列表操作组',
  },
  en: {
    extra: 'set `extra` of List.Item',
    actions: 'set `actions` of List.Item',
  },
};

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => { throw new Error("STUB"); };

const data = Array.from({ length: 1 }).map((_, i) => { throw new Error("STUB"); });

const BlockList: React.FC<React.PropsWithChildren> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
