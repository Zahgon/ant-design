import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Flex, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => { throw new Error("STUB"); });

const stylesObject: UploadProps<any>['styles'] = {
  item: {
    borderRadius: 2,
    backgroundColor: 'rgba(5, 5, 5, 0.06)',
    height: 30,
  },
  trigger: {
    backgroundColor: 'rgba(84, 89, 172, 0.1)',
    padding: 8,
    borderRadius: 4,
  },
};

const stylesFn: UploadProps<any>['styles'] = (
  info,
): GetProp<UploadProps<any>, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
