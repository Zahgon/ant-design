import React from 'react';
import { Flex, Transfer } from 'antd';
import type { GetProp, TransferProps } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }) => { throw new Error("STUB"); });

const mockData = Array.from({ length: 20 }).map<any>((_, i) => { throw new Error("STUB"); });

const initialTargetKeys = mockData.filter((item) => { throw new Error("STUB"); }).map((item) => { throw new Error("STUB"); });

const stylesObject: TransferProps['styles'] = {
  header: { fontWeight: 'bold' },
};

const stylesFn: TransferProps['styles'] = (info): GetProp<TransferProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
