import React, { useState } from 'react';
import { Input, Tooltip } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
    throw new Error("STUB");
});

interface NumericInputProps {
  style: React.CSSProperties;
  value: string;
  onChange: (value: string) => void;
}

const formatNumber = (value: number) => new Intl.NumberFormat().format(value);

const NumericInput: React.FC<NumericInputProps> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
