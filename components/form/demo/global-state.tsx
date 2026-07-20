import React, { useState } from 'react';
import { Form, Input, Typography } from 'antd';

const { Paragraph } = Typography;

interface FieldData {
  name: string | number | (string | number)[];
  value?: unknown;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

interface CustomizedFormProps {
  onChange: (fields: FieldData[]) => void;
  fields: FieldData[];
}

const CustomizedForm: React.FC<CustomizedFormProps> = ({ onChange, fields }) => { throw new Error("STUB"); };

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
