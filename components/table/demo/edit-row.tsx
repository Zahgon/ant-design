import React, { useState } from 'react';
import type { TableColumnsType } from 'antd';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles((props) => {
    throw new Error("STUB");
});

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData = Array.from({ length: 100 }).map<DataType>((_, i) => { throw new Error("STUB"); });

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: DataType;
  index: number;
}

const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
