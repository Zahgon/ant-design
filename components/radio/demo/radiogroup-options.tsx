import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';

const plainOptions: CheckboxGroupProps<string>['options'] = ['Apple', 'Pear', 'Orange'];

const options: CheckboxGroupProps<string>['options'] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', title: 'Orange', className: 'label-3' },
];

const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', className: 'label-3', disabled: true },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
