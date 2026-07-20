import React from 'react';
import { Button, QRCode, Segmented, Space } from 'antd';
import type { QRCodeProps } from 'antd';

function doDownload(url: string, fileName: string) {
  const a = document.createElement('a');
  a.download = fileName;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const downloadCanvasQRCode = () => {
    throw new Error("STUB");
};

const downloadSvgQRCode = () => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
