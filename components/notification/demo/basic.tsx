import React from 'react';
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    title: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
        throw new Error("STUB");
    },
  });
};
const App: React.FC = () => { throw new Error("STUB"); };

export default App;
