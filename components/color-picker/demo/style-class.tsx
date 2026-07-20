import React from 'react';
import { ColorPicker, Flex, Space } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesObject: ColorPickerProps['styles'] = {
  popup: {
    root: {
      border: '1px solid #fff',
    },
  },
};

const stylesFn: ColorPickerProps['styles'] = (
  info,
): GetProp<ColorPickerProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
