import React, { useState } from 'react';
import type Icon from '@ant-design/icons';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'antd';

interface IconTextProps {
  icon: typeof Icon;
  text: React.ReactNode;
}

const listData = Array.from({ length: 3 }).map((_, i) => { throw new Error("STUB"); });

const IconText: React.FC<IconTextProps> = ({ icon, text }) => { throw new Error("STUB"); };

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
