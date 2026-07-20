import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
    throw new Error("STUB");
});

interface DataType {
  gender?: string;
  name?: string;
  email?: string;
  avatar?: string;
  loading: boolean;
}

const PAGE_SIZE = 3;

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
