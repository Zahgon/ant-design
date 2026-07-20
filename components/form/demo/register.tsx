import React, { useState } from 'react';
import type { CascaderProps, FormItemProps, FormProps } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import type { DefaultOptionType } from 'antd/es/select';

interface FormCascaderOption {
  value: string;
  label: string;
  children?: FormCascaderOption[];
}

const residences: CascaderProps<FormCascaderOption>['options'] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const formItemLayout: FormProps = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout: FormItemProps = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface PhoneValue {
  prefix?: string;
  phone?: string;
}

interface PhoneInputProps {
  id?: string;
  value?: PhoneValue;
  onChange?: (value: PhoneValue) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ id, value = {}, onChange }) => {
    throw new Error("STUB");
};

interface DonationValue {
  amount?: number;
  currency?: string;
}

interface DonationInputProps {
  id?: string;
  value?: DonationValue;
  onChange?: (value: DonationValue) => void;
}

const DonationInput: React.FC<DonationInputProps> = ({ id, value = {}, onChange }) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
