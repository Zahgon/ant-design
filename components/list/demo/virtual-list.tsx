import React, { useEffect, useState } from 'react';
import VirtualList from '@rc-component/virtual-list';
import { Avatar, List, message } from 'antd';

interface UserItem {
  email: string;
  gender: string;
  name: string;
  avatar: string;
}

const CONTAINER_HEIGHT = 400;
const PAGE_SIZE = 20;

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
