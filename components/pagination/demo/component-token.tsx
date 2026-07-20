import React from 'react';
import type { PaginationProps } from 'antd';
import { ConfigProvider, Pagination } from 'antd';

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
const App: React.FC = () => { throw new Error("STUB"); };

export default App;
