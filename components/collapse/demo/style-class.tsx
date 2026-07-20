import React from 'react';
import type { CollapseProps, GetProp } from 'antd';
import { Collapse, Flex } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const element = (
  <p>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: element,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: element,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: element,
  },
];

const styles: CollapseProps['styles'] = {
  root: {
    backgroundColor: '#fafafa',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: '12px 16px',
    color: '#141414',
  },
};

const stylesFn: CollapseProps['styles'] = ({
  props,
}): GetProp<CollapseProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
