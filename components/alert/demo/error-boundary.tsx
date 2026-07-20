import React, { useState } from 'react';
import { Alert, Button } from 'antd';

const { ErrorBoundary } = Alert;

const ThrowError: React.FC = () => {
    throw new Error("STUB");
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
