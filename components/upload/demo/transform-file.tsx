import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';

const props: UploadProps = {
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  listType: 'picture',
  beforeUpload(file) {
    return new Promise((resolve) => {
        throw new Error("STUB");
    });
  },
};

const App: React.FC = () => { throw new Error("STUB"); };

export default App;
