import React from 'react';
import { Alert } from 'antd';

const onClose: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  console.log(e, 'I was closed.');
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
