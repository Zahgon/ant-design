import React, { createContext } from 'react';
import { Button, Modal, Space } from 'antd';

const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => { throw new Error("STUB"); }}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => { throw new Error("STUB"); }}</UnreachableContext.Consumer>
    </>
  ),
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
