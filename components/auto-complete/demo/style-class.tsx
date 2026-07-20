import React from 'react';
import { AutoComplete, Flex } from 'antd';
import type { AutoCompleteProps, GetProp } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const stylesObject: AutoCompleteProps['styles'] = {
  popup: {
    root: { borderWidth: 1, borderColor: '#1890ff' },
    list: { backgroundColor: 'rgba(240,240,240, 0.85)' },
    listItem: { color: '#272727' },
  },
};

const stylesFn: AutoCompleteProps['styles'] = ({
  props,
}): GetProp<AutoCompleteProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const options: AutoCompleteProps['options'] = [
  { value: 'Burnaby' },
  { value: 'Seattle' },
  { value: 'Los Angeles' },
  { value: 'San Francisco' },
  { value: 'Meet student' },
];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
