import React from 'react';
import { EditOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Flex } from 'antd';
import type { CardMetaProps, CardProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const { Meta } = Card;

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesCard: CardProps['styles'] = {
  root: {
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
};

const stylesCardFn: CardProps['styles'] = (info): GetProp<CardProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const stylesCardMeta: CardMetaProps['styles'] = {
  title: {
    color: '#A7AAE1',
  },
  description: {
    color: '#A7AAE1',
  },
};

const actions = [
  <HeartOutlined key="heart" style={{ color: '#ff6b6b' }} />,
  <ShareAltOutlined key="share" style={{ color: '#4ecdc4' }} />,
  <EditOutlined key="edit" style={{ color: '#45b7d1' }} />,
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
