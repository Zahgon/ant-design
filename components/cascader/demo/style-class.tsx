import React from 'react';
import { Cascader, Flex } from 'antd';
import type { CascaderProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
    throw new Error("STUB");
});

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'meet-student',
    label: 'meet-student',
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

const stylesObject: CascaderProps['styles'] = {
  prefix: {
    color: '#ccc',
  },
  suffix: {
    color: '#ccc',
  },
};

const stylesFn: CascaderProps['styles'] = (info): GetProp<CascaderProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
